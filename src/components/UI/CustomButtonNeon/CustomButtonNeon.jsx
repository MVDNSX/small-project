import c from './CustomButtonNeon.module.css'

export const CustomButtonNeon = ({text, ...props}) => {
  return (
    <button className={c.btn__neon} {...props}>{text}</button>
  )
}