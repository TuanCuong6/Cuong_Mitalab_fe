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
        <div className="flex items-center justify-center gap-2 mt-8">
            <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-gray-50 transition-colors"
            >
                Trước
            </button>

            <div className="flex gap-1">
                {getPageNumbers().map((page, index) => (
                    typeof page === 'number' ? (
                        <button
                            key={index}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors
                                ${page === currentPage
                                    ? 'bg-blue-600 text-white'
                                    : 'border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className="w-10 h-10 flex items-center justify-center text-gray-400">
                            {page}
                        </span>
                    )
                ))}
            </div>

            <button
                onClick={onNext}
                disabled={!hasNext}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-gray-50 transition-colors"
            >
                Sau
            </button>
        </div>
    );
}
