// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  taskList: {
    __typename: 'TaskList' as const,
    id: 42,
  },
})
