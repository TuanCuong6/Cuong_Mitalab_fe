interface Props {
    currentPage: number;
    totalPages: number;
    hasPrevious: boolean;
    hasNext: boolean;
    onPageChange: (page: number) => void;
    onPrevious: () => void;
    onNext: () => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    hasPrevious,
    hasNext,
    onPageChange,
    onPrevious,
    onNext
}: Props) {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-1 sm:gap-2">
            {/* Previous button */}
            <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:text-gray-900
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-colors"
            >
                <span className="hidden sm:inline">‹ Trước</span>
                <span className="sm:hidden">‹</span>
            </button>

            {/* Page numbers */}
            <div className="flex gap-1">
                {getPageNumbers().map((page, index) => (
                    typeof page === 'number' ? (
                        <button
                            key={index}
                            onClick={() => onPageChange(page)}
                            className={`w-8 h-8 sm:w-9 sm:h-9 text-xs sm:text-sm font-medium rounded-lg transition-all
                                ${page === currentPage
                                    ? 'bg-primary-600 text-white shadow-sm'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-gray-400 text-xs sm:text-sm">
                            {page}
                        </span>
                    )
                ))}
            </div>

            {/* Next button */}
            <button
                onClick={onNext}
                disabled={!hasNext}
                className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:text-gray-900
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-colors"
            >
                <span className="hidden sm:inline">Sau ›</span>
                <span className="sm:hidden">›</span>
            </button>
        </div>
    );
}
