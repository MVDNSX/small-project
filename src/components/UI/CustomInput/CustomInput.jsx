import { SvgIcon } from '../../Svg/SvgIcon'
import c from './CustomInput.module.scss'
export const CustomInput = ({id, labelText,icon, ...props}) => {
  return (
    <div>
      <label className={c.label} htmlFor={id}>{labelText}</label>
      <div className={c.inputGroup}>
        {icon && <SvgIcon className={c.icon} icon={icon}/>}
        <input className={c.input} id={id} {...props}/>
      </div>
    </div>
  )
}