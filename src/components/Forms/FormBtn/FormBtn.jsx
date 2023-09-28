import c from './FormBtn.module.scss'
export const FormBtn = ({text, ...props}) => {
  return (
    <button {...props} className={c.Fbtn}>{text}</button>
  )
}