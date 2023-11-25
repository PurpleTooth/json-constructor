import { useState } from "react"

interface WidgetOptionsProps {
  data: {
    displayedName: string
    options: {
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
    }
  }
}

const WidgetOptions = (props: any) => {
  const getInputType = (value: string | number) =>
    typeof value === "number" ? "number" : "text"
  const [options, setOptions] = useState(props.data.options)
  const [inputValues, setInputValues] = useState<{
    [key: string]: string | number
  }>(options)

  const handleInputChange = (key: string, value: string | number) => {
    setInputValues((prevValues) => ({ ...prevValues, [key]: value }))
  }

  const handleSubmit = () => {
    console.log(inputValues)
  }
  return (
    <div>
      <div>
        <h1>{props.data.displayedName}</h1>
        <div className="flex flex-col gap-4">
          {Object.keys(options).map((key) => (
            <div key={key}>
              <label>{key}: </label>
              <input
                type={getInputType(inputValues[key])}
                value={inputValues[key].toString()}
                onChange={(e) =>
                  handleInputChange(
                    key,
                    getInputType(inputValues[key]) === "number"
                      ? Number(e.target.value)
                      : e.target.value
                  )
                }
              />
            </div>
          ))}
        </div>
        <button className="mt-[20px]" onClick={handleSubmit}>
          Добавить
        </button>
      </div>
    </div>
  )
}

export default WidgetOptions
