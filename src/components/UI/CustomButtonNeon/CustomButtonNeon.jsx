import { SvgIcon } from '../../Svg/SvgIcon'
import c from './CustomButtonNeon.module.css'

export const CustomButtonNeon = ({text, icon, ...props}) => {
  return (
    <button className={c.btn__neon} {...props}>{text}{icon && <SvgIcon id={icon}/>}</button>
  )
}