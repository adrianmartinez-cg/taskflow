type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="layout-container">
        <header className="layout-header">
          <h1>TaskFlow</h1>
          <nav className="layout-nav">
            <div>Logged in as</div>
            <span>PLACEHOLDER</span>
            <button type="button">Log out</button>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025</footer>
      </div>
    </>
  )
}

export default MainLayout
