import { SvgIcon } from '../../Svg/SvgIcon'
import c from './CustomButton.module.css'

const CustomButton = ({children, id, text, ...props}) => {
  return (
    <button className={c.btn} {...props}>{id ? <SvgIcon id={id}/> : null}{children}{text}</button>
  )
}

export default CustomButton