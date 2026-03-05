import { useUsers } from '@/context/UserContext';
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
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mb-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className="text-red-600 mb-4 text-sm font-medium">{error}</p>
                <button 
                    onClick={refreshUsers}
                    className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                    Thử lại
                </button>
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                </div>
                <p className="text-gray-500 text-sm">Không có dữ liệu người dùng</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-[calc(100vh-8rem)] animate-fade-in">
            {/* Header with stats */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Danh sách người dùng
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">
                        Quản lý thông tin người dùng trong hệ thống
                    </p>
                </div>
                
                {/* Stats card */}
                <div className="bg-white rounded-xl shadow-sm px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 w-full sm:w-auto sm:min-w-[200px]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm text-gray-600">Tổng số người dùng</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">{totalCount}</p>
                    </div>
                </div>
            </div>

            {/* Desktop Table - hidden on mobile */}
            <div className="hidden lg:flex flex-1 flex-col bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <div className="col-span-1 text-xs font-semibold text-primary-600 uppercase tracking-wider">
                        Avatar
                    </div>
                    <div className="col-span-3 text-xs font-semibold text-primary-600 uppercase tracking-wider">
                        Họ và tên
                    </div>
                    <div className="col-span-4 text-xs font-semibold text-primary-600 uppercase tracking-wider">
                        Email
                    </div>
                    <div className="col-span-3 text-xs font-semibold text-primary-600 uppercase tracking-wider">
                        Ngày tham gia
                    </div>
                    <div className="col-span-1 text-xs font-semibold text-primary-600 uppercase tracking-wider text-right">
                        Mã số
                    </div>
                </div>

                {/* Table body */}
                <div className="flex-1 divide-y divide-gray-100">
                    {users.map((user) => (
                        <div 
                            key={user.id}
                            className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                        >
                            {/* Avatar */}
                            <div className="col-span-1 flex items-center">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                                    <span className="text-primary-600 font-semibold text-sm">
                                        {user.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            {/* Name */}
                            <div className="col-span-3 flex items-center">
                                <span className="text-gray-900 font-medium">
                                    {user.name}
                                </span>
                            </div>

                            {/* Email */}
                            <div className="col-span-4 flex items-center">
                                <span className="text-gray-600">
                                    {user.email}
                                </span>
                            </div>

                            {/* Date */}
                            <div className="col-span-3 flex items-center">
                                <span className="text-gray-600">
                                    {new Date(user.createdAt).toLocaleDateString('vi-VN')}
                                </span>
                            </div>

                            {/* ID Badge */}
                            <div className="col-span-1 flex items-center justify-end">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                                    #{user.id}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination footer */}
                {totalPages > 1 && (
                    <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between mt-auto">
                        <div className="text-sm text-gray-600">
                            Trang {pageNumber} / {totalPages}
                        </div>
                        <Pagination
                            currentPage={pageNumber}
                            totalPages={totalPages}
                            hasPrevious={hasPrevious}
                            hasNext={hasNext}
                            onPageChange={goToPage}
                            onPrevious={previousPage}
                            onNext={nextPage}
                        />
                    </div>
                )}
            </div>

            {/* Mobile/Tablet Card Layout - hidden on desktop */}
            <div className="lg:hidden flex flex-1 flex-col">
                <div className="flex-1 space-y-3 sm:space-y-4">
                    {users.map((user) => (
                        <div 
                            key={user.id}
                            className="bg-white rounded-xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                {/* Avatar */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary-600 font-semibold text-base sm:text-lg">
                                        {user.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 truncate">
                                        {user.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 truncate">
                                        {user.email}
                                    </p>
                                </div>

                                {/* ID Badge */}
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 flex-shrink-0">
                                    #{user.id}
                                </span>
                            </div>

                            {/* Date */}
                            <div className="pt-3 sm:pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Ngày tham gia: {new Date(user.createdAt).toLocaleDateString('vi-VN')}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Pagination */}
                {totalPages > 1 && (
                    <div className="mt-6 bg-white rounded-xl shadow-sm p-4">
                        <div className="text-xs sm:text-sm text-gray-600 text-center mb-3">
                            Trang {pageNumber} / {totalPages}
                        </div>
                        <Pagination
                            currentPage={pageNumber}
                            totalPages={totalPages}
                            hasPrevious={hasPrevious}
                            hasNext={hasNext}
                            onPageChange={goToPage}
                            onPrevious={previousPage}
                            onNext={nextPage}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
