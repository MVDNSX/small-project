
import c from './CustomRadio.module.scss'

export const CustomRadio = ({register, name, labelText, ...props}) => {
  return (
    <label className={c.container}>
      <input 
        className={c.category} 
        {...register(name)} 
        {...props} />
      <span className={c.text}>{labelText}</span>
    </label>
  )
}