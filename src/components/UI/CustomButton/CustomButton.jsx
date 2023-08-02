import { SvgIcon } from '../../Svg/SvgIcon'
import c from './CustomButton.module.css'

const CustomButton = ({children, id, ...props}) => {
  return (
    <button className={c.btn} {...props}>{id ? <SvgIcon id={id}/> : null}{children}</button>
  )
}

export default CustomButton