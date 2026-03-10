import { useUsers } from '@/context/UserContext';
import UserSkeleton from './UserSkeleton';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function UserTable() {
  const { users, loading, error, refreshUsers } = useUsers();

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
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
        >
          <LoadingSpinner size="sm" className="border-white border-t-transparent" />
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
    <div className="flex flex-col min-h-[calc(100vh-16rem)] animate-fade-in">
      {/* Desktop Table - hidden on mobile */}
      <div className="hidden lg:flex flex-1 flex-col bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="col-span-1 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Avatar
          </div>
          <div className="col-span-3 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Họ và tên
          </div>
          <div className="col-span-4 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Email
          </div>
          <div className="col-span-3 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Ngày tham gia
          </div>
          <div className="col-span-1 text-xs font-semibold text-blue-600 uppercase tracking-wider text-right">
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
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
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
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                  #{user.id}
                </span>
              </div>
            </div>
          ))}
        </div>
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
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-base sm:text-lg">
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
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 flex-shrink-0">
                  #{user.id}
                </span>
              </div>

              {/* Date */}
              <div className="pt-3 sm:pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                  <span>Ngày tham gia: {new Date(user.createdAt).toLocaleDateString('vi-VN')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}