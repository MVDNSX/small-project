
import { useState } from 'react'
import c from './CustomSelect.module.css'
import SelectOptions from './SelectOptions/SelectOptions'

const CustomSelect = ({value, defaultValue, options, onChange}) => {
  
  const [isVisible, setVisible] = useState(false);

  const handlerClick = (option) => {
    if(value !== option.value){
      onChange(option);
    }
    setVisible(false);
  }
  
  return (
   <div className={c.sort}>
    <div 
    className={c.sort__current}
    onClick={() => setVisible(!isVisible)}>
      {!value ? defaultValue : value}
    </div>
    <SelectOptions 
    handlerClick={handlerClick}
    options={options}
    isVisible={isVisible}
    />
   </div>
  )
}

export default CustomSelect