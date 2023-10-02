
import { useState } from 'react'
import c from './CustomSelect.module.scss'
import SelectOptions from './SelectOptions/SelectOptions'
import { SvgIcon } from '../../Svg/SvgIcon'

export const CustomSelect = ({value, defaultValue, options, onChange}) => {
  
  const [isVisible, setVisible] = useState(false);

  const handlerClick = (option) => {
    if(value !== option.value){
      onChange(option);
    }
    setVisible(false);
  }
  
  return (
    <div className={c.select}>
      <div 
        className={c.current}
        onClick={() => setVisible(!isVisible)}>
          <div className={isVisible ? `${c.rotate} ${c.arrow}` : `${c.arrow}`}>
            <SvgIcon id='arrow-select'/>
          </div>
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
