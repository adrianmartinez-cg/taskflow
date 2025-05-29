import type {
  FindTaskListQuery,
  FindTaskListQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import TaskCard from '../TaskCard/TaskCard'

export const QUERY: TypedDocumentNode<
  FindTaskListQuery,
  FindTaskListQueryVariables
> = gql`
  query TasksByUserQuery($userId: Int!) {
    tasksByUser(userId: $userId) {
      id
      title
      description
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Nenhuma tarefa cadastrada.</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTaskListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  tasksByUser,
}: CellSuccessProps<FindTaskListQuery, FindTaskListQueryVariables>) => {
  return (
  <div className="task-cell-container">
    {tasksByUser.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
  )
}
