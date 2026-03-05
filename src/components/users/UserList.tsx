import { useUsers } from '@/context/UserContext';
import UserCard from './UserCard';
import UserSkeleton from './UserSkeleton';
import Pagination from './Pagination';

export default function UserList() {
    const { 
        users, 
        loading, 
        error, 
        refreshUsers,
        pageNumber,
        totalPages,
        totalCount,
        hasPrevious,
        hasNext,
        goToPage,
        nextPage,
        previousPage
    } = useUsers();

    if (loading) return <UserSkeleton />;

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-600 mb-4">{error}</p>
                <button 
                    onClick={refreshUsers}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Thử lại
                </button>
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">Không có dữ liệu người dùng</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-4 text-sm text-gray-600">
                Tổng số: {totalCount} người dùng
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={pageNumber}
                    totalPages={totalPages}
                    hasPrevious={hasPrevious}
                    hasNext={hasNext}
                    onPageChange={goToPage}
                    onPrevious={previousPage}
                    onNext={nextPage}
                />
            )}
        </div>
    );
}
