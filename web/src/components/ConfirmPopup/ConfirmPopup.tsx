interface Props {
  msg: String
  confirmMsg?: String
  declineMsg?: String
  onConfirm: () => void
  setIsActive: (value: boolean) => void
}

const ConfirmPopup = ({ msg, confirmMsg = "Sim", declineMsg = "Não" , onConfirm, setIsActive }: Props) => {
  return (
    <div className="flex w-[240px] min-h-[132px] flex-col bg-white p-[8px] rounded-xl">
      <p className="overflow-hidden text-ellipsis mt-4" >{msg}</p>
      <div className="flex-1 gap-4 flex justify-center mt-8">
        <button className="w-16 h-12 p-[4px] bg-green-300 rounded-lg"
         onClick={() =>{
          onConfirm()
          setIsActive(false)
          }}
          >{confirmMsg}</button>
        <button className="w-16 h-12 p-[4px] bg-red-300 rounded-lg"
        onClick={() =>{
          setIsActive(false)
          }}>{declineMsg}</button>
      </div>
    </div>
  )
}

export default ConfirmPopup
