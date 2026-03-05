import { UserProvider } from './context/UserContext'
import UserList from './components/users/UserList'

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <UserList />
        </div>
      </div>
    </UserProvider>
  )
}

export default App
