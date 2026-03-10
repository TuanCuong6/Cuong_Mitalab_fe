interface Props {
  title: string;
  subtitle: string;
  totalCount?: number;
}

export default function Header({ title, subtitle, totalCount }: Props) {
  return (
    <div className="mb-8">
      {/* Mobile Layout - Stack vertically */}
      <div className="block sm:hidden">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
        </div>
        
        {totalCount !== undefined && (
          <div className="bg-blue-50 px-4 py-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-600 font-medium">Tổng số người dùng</div>
                <div className="text-xl font-bold text-blue-900">{totalCount.toLocaleString()}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden sm:flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>
        {totalCount !== undefined && (
          <div className="bg-blue-50 px-6 py-4 rounded-lg">
            <div className="text-sm text-blue-600 font-medium">
              Tổng số người dùng
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {totalCount.toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}