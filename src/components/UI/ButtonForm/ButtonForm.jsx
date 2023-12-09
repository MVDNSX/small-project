import c from './ButtonForm.module.scss'
export const ButtonForm = ({text, invers, ...props}) => {
  return (
    <button className={`${c.btn} ${invers && c.invers}`} {...props}>{text}</button>
  )
}