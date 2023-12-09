import { SvgIcon } from '../../Svg/SvgIcon'
import c from './CustomButton.module.scss'

export const CustomButton = ({id, text, neon, ...props}) => {
  return (
    <button className={`${c.btn} ${neon && c.neon}`} {...props}>{id ? <SvgIcon id={id}/> : null}{text}</button>
  )
}
