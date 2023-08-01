import c from './CustomButton.module.css'

const CustomButton = ({children, ...props}) => {
  return (
    <button className={c.btn} {...props}>{children}</button>
  )
}

export default CustomButton