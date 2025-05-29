import { useMutation } from '@redwoodjs/web'
import { Form, FormError, Label, TextField, TextAreaField, Submit, SubmitHandler } from '@redwoodjs/forms'
import type { Task } from 'types/graphql'
import { QUERY as TasksQuery } from 'src/components/TaskListCell'

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

interface Props {
  task: Task
}

const TaskCardEditForm = ({ task }: Props) => {

  const [updateTask, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    refetchQueries: [
      {
        query: TasksQuery,
        variables: { userId: task.userId }
      },
    ]

  })

  return (
    <div className="task-card-edit-form">
      <div className="flex justify-center items-center">
        <h3 className="flex-1 pl-5">Editar tarefa</h3>
        <button className="bg-purple-600 bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-purple-700">{String.fromCodePoint(0x274C)}</button>
      </div>

      <Form
        onSubmit={(data) => {
          updateTask({
            variables: {
              id: task.id,
              input: data
            },
          })
        }}
      >
        <Label name="title" className="block text-sm text-gray-600 uppercase">
          Título
        </Label>
        <TextField
          name="title"
          defaultValue={task.title}
          className="block w-full p-1 border rounded text-xs"
        />

        <Label name="description" className="block text-sm text-gray-600 uppercase">
          Descrição
        </Label>
        <TextField
          name="description"
          defaultValue={task.description}
          className="block w-full p-1 border rounded text-xs"
        />
        <Submit
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          {loading ? 'Salvando...' : 'Salvar'}
        </Submit>
      </Form>
    </div>
  )
}

export default TaskCardEditForm
