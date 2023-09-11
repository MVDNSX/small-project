
import c from './ModalDish.module.scss'

export const ModalDish = () => {
  return (
    <>
      <div className={c.adding} >
        <SvgIcon id='plus'/>
        <div>Add new dish</div>
      </div>
    </>
  )
}