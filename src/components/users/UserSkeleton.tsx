export default function UserSkeleton() {
    return (
        <div className="animate-fade-in">
            {/* Header skeleton */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                    <div className="h-8 sm:h-9 bg-gray-200 rounded w-48 sm:w-64 mb-2 animate-pulse"></div>
                    <div className="h-4 sm:h-5 bg-gray-200 rounded w-64 sm:w-80 animate-pulse"></div>
                </div>
                <div className="bg-white rounded-xl shadow-sm px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[200px] animate-pulse">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-200"></div>
                        <div className="flex-1">
                            <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                            <div className="h-5 sm:h-6 bg-gray-200 rounded w-12"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Table skeleton - hidden on mobile */}
            <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <div className="col-span-1">
                        <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                    <div className="col-span-3">
                        <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                    <div className="col-span-4">
                        <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                    <div className="col-span-3">
                        <div className="h-3 bg-gray-200 rounded w-28 animate-pulse"></div>
                    </div>
                    <div className="col-span-1">
                        <div className="h-3 bg-gray-200 rounded w-12 ml-auto animate-pulse"></div>
                    </div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-gray-100">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 animate-pulse">
                            <div className="col-span-1 flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            </div>
                            <div className="col-span-3 flex items-center">
                                <div className="h-4 bg-gray-200 rounded w-32"></div>
                            </div>
                            <div className="col-span-4 flex items-center">
                                <div className="h-4 bg-gray-200 rounded w-48"></div>
                            </div>
                            <div className="col-span-3 flex items-center">
                                <div className="h-4 bg-gray-200 rounded w-24"></div>
                            </div>
                            <div className="col-span-1 flex items-center justify-end">
                                <div className="h-6 bg-gray-200 rounded-full w-12"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Card skeleton - hidden on desktop */}
            <div className="lg:hidden space-y-3 sm:space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm p-4 sm:p-5 animate-pulse">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-200"></div>
                            <div className="flex-1">
                                <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-48"></div>
                            </div>
                            <div className="h-6 bg-gray-200 rounded-full w-12"></div>
                        </div>
                        <div className="pt-3 sm:pt-4 border-t border-gray-100">
                            <div className="h-4 bg-gray-200 rounded w-40"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
