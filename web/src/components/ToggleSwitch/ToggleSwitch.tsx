import { useState } from 'react'

const ToggleSwitch = ({isOn = false, toggleFunction}) => {

  return (
    <button
      className={`relative w-14 h-7 flex items-center bg-gray-300 rounded-full transition ${isOn ? 'bg-green-500' : ''
        }`}
      onClick={(event) => {
        event.preventDefault()
        toggleFunction()
        }
      }
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow transition transform ${isOn ? 'translate-x-7' : 'translate-x-1'
          }`}
      ></div>
    </button>
  )
}

export default ToggleSwitch