import { User } from '@/types/user';

interface Props {
    user: User;
}

export default function UserCard({ user }: Props) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{user.email}</p>
                </div>
                <span className="text-xs text-gray-400">#{user.id}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                    Ngày tạo: {new Date(user.createdAt).toLocaleDateString('vi-VN')}
                </p>
            </div>
        </div>
    );
}
