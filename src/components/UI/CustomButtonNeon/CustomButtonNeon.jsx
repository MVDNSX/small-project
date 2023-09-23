import c from './CustomButtonNeon.module.css'

export const CustomButtonNeon = ({children, ...props}) => {
  return (
    <button className={c.btn__neon} {...props}>{children}</button>
  )
}