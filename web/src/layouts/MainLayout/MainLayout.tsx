import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <div className="layout-container">
        <header className="layout-header">
          <h1>TaskFlow</h1>
          {
            isAuthenticated ? (
              <nav className="layout-nav">
                <div>Logged in as</div>
                <span>{currentUser.email}</span>
                <button className="purple-button" type="button" onClick={logOut}>Log out</button>
              </nav>
            ) : null
          }
          
        </header>
        <main>{children}</main>
        <footer>© 2025</footer>
      </div>
    </>
  )
}

export default MainLayout
