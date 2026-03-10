import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, UserContextType } from '@/types/user';
import { userService } from '@/services/userService';

const UserContext = createContext<UserContextType | undefined>(undefined);

const DEFAULT_PAGE_SIZE = 6;

export function UserProvider({ children }: { children: ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize] = useState(DEFAULT_PAGE_SIZE);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(false);

    // Separate loading state for pagination (không ảnh hưởng header)
    const [paginationLoading, setPaginationLoading] = useState(false);

    const fetchUsers = async (page: number = pageNumber, showPaginationLoading = false) => {
        try {
            if (showPaginationLoading) {
                setPaginationLoading(true);
            } else {
                setLoading(true);
            }
            setError(null);
            
            const data = await userService.getPaged(page, pageSize);
            setUsers(data.items);
            setTotalPages(data.totalPages);
            setTotalCount(data.totalCount);
            setHasPrevious(data.hasPrevious);
            setHasNext(data.hasNext);
            setPageNumber(page);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Có lỗi xảy ra');
        } finally {
            setLoading(false);
            setPaginationLoading(false);
        }
    };

    const goToPage = async (page: number) => {
        if (page >= 1 && page <= totalPages && page !== pageNumber) {
            await fetchUsers(page, true); // Chỉ show pagination loading
        }
    };

    const nextPage = async () => {
        if (hasNext) {
            await fetchUsers(pageNumber + 1, true);
        }
    };

    const previousPage = async () => {
        if (hasPrevious) {
            await fetchUsers(pageNumber - 1, true);
        }
    };

    useEffect(() => {
        fetchUsers(1, false); // Initial load - show full loading
    }, []);

    return (
        <UserContext.Provider value={{ 
            users, 
            loading: paginationLoading || loading, // Combine both loading states
            error, 
            refreshUsers: () => fetchUsers(pageNumber, false),
            pageNumber,
            pageSize,
            totalPages,
            totalCount,
            hasPrevious,
            hasNext,
            goToPage,
            nextPage,
            previousPage
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUsers() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUsers phải được dùng trong UserProvider');
    }
    return context;
}
