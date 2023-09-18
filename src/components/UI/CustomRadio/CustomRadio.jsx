
import c from './CustomRadio.module.scss'

const CustomRadio = ({text, ...props}) => {
  return (
    <label className={c.container}>
      <input className={c.category} type="radio" {...props}/>
      <span className={c.text}>{text}</span>
    </label>
  )
}

export default CustomRadio