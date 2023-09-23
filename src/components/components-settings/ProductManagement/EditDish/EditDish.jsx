import img from '../../../../assets/cards/Image 1.png'
import { SvgIcon } from '../../../Svg/SvgIcon'
import c from './EditDish.module.scss'

export const EditDish = ({dish}) => {

  const {name, finalPrice, picture} = dish

  return (
    <>
      <div className={c.editing}>
        <div className={c.heading}>
          <div className={c.imgDish}>
            <img src={`http://localhost:5005/${picture}`} alt="dish picture" />
          </div>
          <div className={c.description}>
            <div>{name}</div>
            <div className={c.price}>$ {finalPrice}</div>
          </div>
        </div>
        <button className={c.editBtn}>
          <SvgIcon id='edit'/>
          <span>Edit dish</span>
        </button>
      </div>
    </>
  )
}