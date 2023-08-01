import c from './CustomButtonNeon.module.css'

const CustomButtonNeon = ({children, ...props}) => {
  return (
    <button className={c.btn__neon} {...props}>{children}</button>
  )
}

export default CustomButtonNeon