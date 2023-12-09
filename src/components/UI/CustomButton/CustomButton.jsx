import { SvgIcon } from '../../Svg/SvgIcon'
import c from './CustomButton.module.scss'

export const CustomButton = ({children, id, text, mix, ...props}) => {
  return (
    <button className={`${c.btn} ${mix === 'neon' && c.neon}`} {...props}>{id ? <SvgIcon id={id}/> : null}{text}</button>
  )
}
