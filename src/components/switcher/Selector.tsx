import Arrow from "../../assets/arrow.svg"
// import ISelectorEntry from "../../types/ISelectorEntry"

const Selector = ({ displayedName, onSetWidget, data }: any) => {
  return (
    <div
      onClick={() => onSetWidget(data)}
      className="flex items-center  flex-row gap-2 bg-transparent cursor-pointer hover:bg-[#2c2c2c] rounded-md  py-2 px-3"
    >
      <span>
        <img src={Arrow} className="w-2" />
      </span>
      <p className="font-medium">{displayedName}</p>
    </div>
  )
}

export default Selector
