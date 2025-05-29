// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import TaskListCell from '../../components/TaskListCell'

const TaskPage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="Task" description="Task page" />
      <TaskListCell userId={currentUser.id} />
    </>
  )
}

export default TaskPage
