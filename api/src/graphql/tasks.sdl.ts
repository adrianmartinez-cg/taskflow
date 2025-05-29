export const schema = gql`
  type Task {
    id: Int!
    title: String!
    description: String
    status: String!
    user: User!
    userId: Int!
    createdAt: DateTime!
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
    tasksByUser(userId: Int!): [Task!]! @requireAuth
  }

  input CreateTaskInput {
    title: String!
    description: String
    status: String!
    userId: Int!
  }

  input UpdateTaskInput {
    title: String
    description: String
    status: String
    userId: Int
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
