import { render } from '@redwoodjs/testing/web'

import ToggleSwitch from './ToggleSwitch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ToggleSwitch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToggleSwitch />)
    }).not.toThrow()
  })
})
