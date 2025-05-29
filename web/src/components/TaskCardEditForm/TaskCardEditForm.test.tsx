import { render } from '@redwoodjs/testing/web'

import TaskCardEditForm from './TaskCardEditForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TaskCardEditForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskCardEditForm />)
    }).not.toThrow()
  })
})
