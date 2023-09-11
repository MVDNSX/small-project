import { SvgIcon } from '../../Svg/SvgIcon'
import c from './NewDish.module.scss'

export const NewDish = () => {
  return (
    <>
      <div className={c.adding} >
        <SvgIcon id='plus'/>
        <div>Add new dish</div>
      </div>
    </>
  )
}