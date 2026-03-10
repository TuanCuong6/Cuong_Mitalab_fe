import { UserProvider } from './context/UserContext'
import Header from './components/layout/Header'
import UserList from './components/users/UserList'
import { useUsers } from './context/UserContext'

function UserManagementPage() {
  const { totalCount } = useUsers();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Header 
          title="Danh sách người dùng"
          subtitle="Quản lý thông tin người dùng trong hệ thống"
          totalCount={totalCount}
        />
        <UserList />
      </div>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <UserManagementPage />
    </UserProvider>
  )
}

export default App
