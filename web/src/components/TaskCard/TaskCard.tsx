import type { Task } from 'types/graphql'

interface Props {
  task: Task
}

const TaskCard = ({task} : Props) => {
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
        <button className="text-xl" >{String.fromCodePoint(0x1F4DD)}</button>
      </div>
    </div>
  )
}

export default TaskCard
