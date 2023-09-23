import { SvgIcon } from '../../Svg/SvgIcon'
import c from './CustomButton.module.css'

export const CustomButton = ({children, id, text, ...props}) => {
  return (
    <button className={c.btn} {...props}>{id ? <SvgIcon id={id}/> : null}{children}{text}</button>
  )
}
