import { useState } from "react"
import WidgetOptions from "./WidgetOptions"
import Selector from "./Selector"
// import IWidgetEntry from "../../types/IWidgetEntry"
import selectorList from "../../constants/SelectorList"
const Switcher = () => {
  const [widget, setWidget] = useState()
  return (
    <div className="flex flex-row gap-5 mx-2 my-2">
      <div className=" pl-5 flex flex-col">
        <h1 className="font-bold text-xl">Доступные виджеты</h1>
        <div>
          {selectorList.map((item: any, index: number) => (
            <div key={index}>
              <Selector
                data={item}
                displayedName={item.displayedName}
                onSetWidget={setWidget}
                type={item.type}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        {widget ? (
          <WidgetOptions data={widget} />
        ) : (
          <h1 className="font-bold text-3xl">Выберите виджет для настройки</h1>
        )}
      </div>
    </div>
  )
}

export default Switcher
