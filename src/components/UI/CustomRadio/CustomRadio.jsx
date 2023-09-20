
import c from './CustomRadio.module.scss'

const CustomRadio = ({register, name, text, ...props}) => {
  return (
    <label className={c.container}>
      <input className={c.category} type="radio" {...props} {...register(name)}/>
      <span className={c.text}>{text}</span>
    </label>
  )
}

export default CustomRadio