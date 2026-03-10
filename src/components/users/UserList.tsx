import UserTable from './UserTable';
import UserPagination from './UserPagination';

export default function UserList() {
  return (
    <div className="space-y-6">
      <UserTable />
      <UserPagination />
    </div>
  );
}