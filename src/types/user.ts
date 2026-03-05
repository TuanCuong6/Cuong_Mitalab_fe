export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: string;
}

export interface PagedResult<T> {
    items: T[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}

export interface UserContextType {
    users: User[];
    loading: boolean;
    error: string | null;
    refreshUsers: () => Promise<void>;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    hasPrevious: boolean;
    hasNext: boolean;
    goToPage: (page: number) => Promise<void>;
    nextPage: () => Promise<void>;
    previousPage: () => Promise<void>;
}
