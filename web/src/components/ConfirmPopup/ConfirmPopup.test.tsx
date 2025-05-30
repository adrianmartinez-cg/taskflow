import { render } from '@redwoodjs/testing/web'

import ConfirmPopup from './ConfirmPopup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmPopup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmPopup />)
    }).not.toThrow()
  })
})
