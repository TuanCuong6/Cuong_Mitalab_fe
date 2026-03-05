import { UserProvider } from './context/UserContext'
import UserList from './components/users/UserList'

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Danh sách người dùng
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Quản lý thông tin người dùng trong hệ thống
            </p>
          </div>
          <UserList />
        </div>
      </div>
    </UserProvider>
  )
}

export default App
