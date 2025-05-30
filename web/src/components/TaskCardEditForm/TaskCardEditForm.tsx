import { useMutation } from '@redwoodjs/web'
import { Form, Label, TextField, Submit } from '@redwoodjs/forms'
import type { Task } from 'types/graphql'
import { QUERY as TasksQuery } from 'src/components/TaskListCell'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import { useAuth } from 'src/auth'

const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTaskMutation($id: Int!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
      title
      description
      status
    }
  }
`

const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      title
      description
      userId
    }
  }
`

interface Props {
  mode?: String
  task?: Task
  setIsActive: (value: boolean) => void

}

const TaskCardEditForm = ({ mode = "edit", task, setIsActive }: Props) => {

  const { currentUser } = useAuth()
  const refetchQuery = { query: TasksQuery, variables: { userId: currentUser.id } }

  const [updateTask, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    refetchQueries: [
      refetchQuery
    ]
  })
  const toggleStatus = () => {
    if (task) {
      const newStatus = task.status === "pending" ? "completed" : "pending"
      updateTask({
        variables: { id: task.id, input: { status: newStatus } },
      })
    }
  }

  const [createTask, {loading: createLoading, error: createError }] = useMutation(CREATE_TASK_MUTATION, {
    refetchQueries: [
      refetchQuery
    ]
  })

  return (
    <div className="task-card-edit-form">
      <div className="flex justify-center items-center">
        <h3 className="flex-1 pl-5">{mode === "edit" ? "Editar tarefa" : "Criar tarefa"}</h3>
        <button
          className="bg-purple-600 bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-purple-700"
          onClick={() => setIsActive(false)}
        >
          {String.fromCodePoint(0x274C)}
        </button>
      </div>

      <Form
        onSubmit={(data) => {
          if (task && mode === "edit") {
            updateTask({
              variables: {
                id: task.id,
                input: data
              },
            })
          } else {
            createTask({
              variables: {
                input: {
                  ...data,
                  userId: currentUser.id
                }
              }
            })
          }

          setIsActive(false)
        }}
      >
        <Label name="title" className="block text-sm text-gray-600 uppercase">
          Título
        </Label>
        <TextField
          name="title"
          defaultValue={task ? task.title : ""}
          className="block w-full p-1 border rounded text-xs"
        />

        <Label name="description" className="block text-sm text-gray-600 uppercase">
          Descrição
        </Label>
        <TextField
          name="description"
          defaultValue={task ? task.description : ""}
          className="block w-full p-1 border rounded text-xs"
        />
        {task && mode === "edit" && <ToggleSwitch isOn={task.status === "completed"} toggleFunction={toggleStatus} />}
        <Submit
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          {loading || createLoading ? 'Salvando...' : 'Salvar'}
        </Submit>
      </Form>
    </div>
  )
}

export default TaskCardEditForm
