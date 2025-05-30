import type { Task } from 'types/graphql'
import { useState } from 'react'
import TaskCardEditForm from 'src/components/TaskCardEditForm'
import { QUERY as TasksQuery } from 'src/components/TaskListCell'
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`

interface Props {
  task: Task
}

const TaskCard = ({ task }: Props) => {

  const { currentUser } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const refetchQuery = { query: TasksQuery, variables: { userId: currentUser.id } }
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    refetchQueries: [
      refetchQuery
    ]
  })

  return (
    <div className="task-card">
      <div className="task-card-container task-card-id">
        <p className="text-md uppercase font-bold text-gray-500">ID</p>
        {task.id}
      </div>
      <div className="task-card-container task-card-title">
        <p className="text-md uppercase font-bold text-gray-500">Título</p>
        <p>{task.title}</p>
      </div>
      <div className="task-card-container task-card-description">
        <p className="text-md uppercase font-bold text-gray-500">Descrição</p>
        <p>{task.description}</p>
      </div>
      <div className="task-card-container task-card-status">
        <p className="text-md uppercase font-bold text-gray-500">Status</p>
        <p>{task.status == "pending" ? String.fromCodePoint(0x1F7E1) : String.fromCodePoint(0x1F7E2)}</p>
      </div>
      <div className="task-card-container">
        <button className="text-xl" onClick={() => setIsEditing(true)}>{String.fromCodePoint(0x1F4DD)}</button>
      </div>
      <div className="task-card-container">
        <button className="text-xl font-black text-white bg-red-800 w-8 h-8 flex items-center justify-center rounded-full" onClick={() => setIsDeleting(true)}>X</button>
      </div>
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal-content">
            <TaskCardEditForm task={task} setIsActive={setIsEditing} />
          </div>
        </div>
      )}
      {
        isDeleting && (
          <div className="modal-overlay">
            <div className="modal-content">
              <ConfirmPopup msg={"Deseja apagar a tarefa?"} setIsActive={setIsDeleting} onConfirm={() => {
                deleteTask({
                  variables: {
                    id: task.id
                  }
                }
                )
              }}
              />
            </div>
          </div>
      )}

    </div>
  )
}

export default TaskCard
