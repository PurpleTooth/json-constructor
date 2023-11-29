import React, { useState, useEffect } from "react"
import JsonDisplay from "../JsonDisplay"

interface OptionProps {
  text?: string
  color?: string
  fontSize?: number
  fontWeight?: number
  fontStyle?: string
  verticalAlign?: string
  horizontalAlign?: string
  blockHeight?: number
  blockWidth?: number
  marginRight?: number
  digitsAfterDot?: number
  [key: string]: any
}

interface WidgetOptionProps {
  data: {
    displayedName: string
    widget: {
      type: string
      options: OptionProps
    }
    id: string
    x: number
    y: number
    width: number
    height: number
  }
}

const WidgetOptions: React.FC<WidgetOptionProps> = ({
  data: { displayedName, widget, id, x, y, width, height },
}) => {
  const getInputType = (value: any) =>
    typeof value === "number" ? "number" : "text"

  const [inputValues, setInputValues] = useState<Record<string, any>>({})
  const [localInputValues, setLocalInputValues] = useState<Record<string, any>>(
    {}
  )

  useEffect(() => {
    const initialValues = {
      displayedName,
      id,
      x,
      y,
      width,
      height,
      widget,
    }
    setInputValues(initialValues)
    setLocalInputValues(initialValues)
  }, [displayedName, widget, id, x, y, width, height])

  const handleInputChange = (path: string, value: any) => {
    setLocalInputValues((prev) => ({ ...prev, [path]: value }))
    // Обновляем глобальное состояние, чтобы сохранить структуру данных
    setInputValues((prevValues) => {
      const keys = path.split(".")
      const newValues = { ...prevValues }
      let current = newValues
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {}
        }
        current = current[keys[i]]
      }
      current[keys[keys.length - 1]] = value
      return newValues
    })
  }

  const renderFields = (data: any, parentPath = "") => {
    return Object.entries(data).map(([key, value]) => {
      const path = parentPath ? `${parentPath}.${key}` : key

      if (typeof value === "object" && value !== null) {
        return (
          <div key={path}>
            <fieldset>
              <legend>{key}</legend>
              {renderFields(value, path)}
            </fieldset>
          </div>
        )
      } else {
        return (
          <div key={path} className="flex items-center gap-2 m-2">
            <label className="w-[120px]">{key}: </label>
            <input
              type={getInputType(value)}
              value={localInputValues[path]}
              onChange={(e) => handleInputChange(path, e.target.value)}
            />
          </div>
        )
      }
    })
  }

  return (
    <div className="flex flex-row">
      <div>
        <h1 className="font-bold text-xl">{displayedName}</h1>
        <div className="flex flex-col gap-4 max-h-[720px] overflow-y-scroll p-4 m-2 border-2 border-solid border-[#1d4ed8] rounded-xl">
          {renderFields(inputValues)}
        </div>
        <button className="mt-[20px]" onClick={() => console.log(inputValues)}>
          Сохранить
        </button>
      </div>
      <div className="flex flex-col gap-4 max-h-[748px] overflow-y-scroll p-4 m-2 border-2 border-solid border-[#1d4ed8] rounded-xl">
        <JsonDisplay data={inputValues} />
      </div>
    </div>
  )
}

export default WidgetOptions
