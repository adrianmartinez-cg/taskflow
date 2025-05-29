// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import { useAuth } from './auth'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
      <PrivateSet unauthenticated="home">
        <Set wrap={MainLayout}>
          <Route path="/tasks" page={TaskPage} name="task" />
        </Set>  
      </PrivateSet>
    </Router>
  )
}

export default Routes
