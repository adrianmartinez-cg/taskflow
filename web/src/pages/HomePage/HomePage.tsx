import { Link, routes, navigate } from '@redwoodjs/router'
import { useEffect } from 'react'
import { useAuth } from 'src/auth'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.task())
    }
  }, [isAuthenticated])
  
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao TaskFlow</h1>
        <p className="mt-2 text-lg text-gray-600">
          Uma ferramenta para organizar suas tarefas. Crie uma conta ou faça login agora mesmo.
        </p>
        <div className="mt-6 space-x-4">
          <Link to={routes.login()}>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Login
            </button>
          </Link>
          <Link to={routes.signup()}>
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Criar Conta
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomePage
