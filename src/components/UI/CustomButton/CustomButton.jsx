import { SvgIcon } from '../../Svg/SvgIcon'
import c from './CustomButton.module.scss'

export const CustomButton = ({icon, text, neon, ...props}) => {
  return (
    <button className={`${c.btn} ${neon && c.neon}`} {...props}>{icon ? <SvgIcon icon={icon}/> : null}{text}</button>
  )
}
