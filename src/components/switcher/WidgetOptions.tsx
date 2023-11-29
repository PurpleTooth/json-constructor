<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import JsonDisplay from "../JsonDisplay";

interface OptionProps {
  text?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  fontStyle?: string;
  verticalAlign?: string;
  horizontalAlign?: string;
  blockHeight?: number;
  blockWidth?: number;
  marginRight?: number;
  digitsAfterDot?: number;
  [key: string]: any;
>>>>>>> upstream/main
}

interface WidgetOptionProps {
   data: {
     displayedName: string;
     widget: {
       type: string;
       options: OptionProps;
     };
     id: string;
     x: number;
     y: number;
     width: number;
     height: number;
   };
 }
 
 const WidgetOptions: React.FC<WidgetOptionProps> = ({
   data: { displayedName, widget, id, x, y, width, height },
 }) => {
   const getInputType = (value: any) => (typeof value === "number" ? "number" : "text");
 
   const [inputValues, setInputValues] = useState<Record<string, any>>({});
   const [localInputValues, setLocalInputValues] = useState<Record<string, any>>({});
 
   useEffect(() => {
     const initialValues = {
       displayedName, 
       id, 
       x, 
       y, 
       width, 
       height, 
       widget
     };
     setInputValues(initialValues);
     setLocalInputValues(initialValues);
   }, [displayedName, widget, id, x, y, width, height]);
 
   const handleInputChange = (path: string, value: any) => {
     setLocalInputValues(prev => ({...prev, [path]: value}));
     // Обновляем глобальное состояние, чтобы сохранить структуру данных
     setInputValues(prevValues => {
       const keys = path.split('.');
       const newValues = { ...prevValues };
       let current = newValues;
       for (let i = 0; i < keys.length - 1; i++) {
         if (!current[keys[i]]) {
           current[keys[i]] = {};
         }
         current = current[keys[i]];
       }
       current[keys[keys.length - 1]] = value;
       return newValues;
     });
   };
 
   const renderFields = (data: any, parentPath = "") => {
     return Object.entries(data).map(([key, value]) => {
       const path = parentPath ? `${parentPath}.${key}` : key;
 
       if (typeof value === 'object' && value !== null) {
         return (
           <div key={path}>
             <fieldset>
               <legend>{key}</legend>
               {renderFields(value, path)}
             </fieldset>
           </div>
         );
       } else {
         return (
           <div key={path}>
             <label>{key}: </label>
             <input
               type={getInputType(value)}
               value={localInputValues[path]}
               onChange={(e) => handleInputChange(path, e.target.value)}
             />
           </div>
         );
       }
     });
   };
 
   return (
     <div>
       <h1>{displayedName}</h1>
       <div className="flex flex-col gap-4">
         {renderFields(inputValues)}
       </div>
       <button className="mt-[20px]" onClick={() => console.log(inputValues)}>
         Сохранить
       </button>
       <JsonDisplay data={inputValues} />
     </div>
   );
 };
 
 export default WidgetOptions;