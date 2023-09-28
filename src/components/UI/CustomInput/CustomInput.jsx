
import c from './CustomInput.module.css'

export const CustomInput = ({children, ...props}) => {
  return (
    <div className={c.input__wrapper} >
      {children}
      <input className={c.input} {...props}/>
    </div>
  )
}
