// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import TaskListCell from '../../components/TaskListCell'
import { useState } from 'react'
import TaskCardEditForm from 'src/components/TaskCardEditForm/TaskCardEditForm'

const TaskPage = () => {
  const { currentUser } = useAuth()
  const [ isCreatingTask, setIsCreatingTask ] = useState(false)
  return (
    <>
      <Metadata title="Task" description="Task page" />
      <button className="text-xl font-black text-white text-[32px] rounded-full w-8 h-8 flex items-center self-start ml-2 mb-2 justify-center bg-purple-700"
       onClick={() => {
        setIsCreatingTask(true)
       }}
      >
        +
      </button>
      {isCreatingTask && (
        <div className="modal-overlay">
          <div className="modal-content">
            <TaskCardEditForm mode="create" setIsActive={setIsCreatingTask}/>
          </div>
        </div>
      )}
      <TaskListCell userId={currentUser.id} />

    </>
  )
}

export default TaskPage
