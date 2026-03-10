import { useUsers } from '@/context/UserContext';
import Pagination from '@/components/ui/Pagination';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function UserPagination() {
  const { 
    pageNumber,
    totalPages,
    hasPrevious,
    hasNext,
    goToPage,
    nextPage,
    previousPage,
    loading
  } = useUsers();

  if (totalPages <= 1) return null;

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10 rounded-xl">
          <div className="bg-white p-3 rounded-lg shadow-lg flex items-center gap-2">
            <LoadingSpinner size="sm" />
            <span className="text-sm text-gray-600">Đang tải...</span>
          </div>
        </div>
      )}
      
      {/* Desktop Pagination */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between">
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
      </div>

      {/* Mobile Pagination */}
      <div className="lg:hidden bg-white rounded-xl shadow-sm p-4">
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
    </div>
  );
}