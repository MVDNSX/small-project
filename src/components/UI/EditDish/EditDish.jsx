import img from '../../../assets/cards/Image 1.png'
import { SvgIcon } from '../../Svg/SvgIcon'
import c from './EditDish.module.scss'

export const EditDish = () => {
  return (
    <>
      <div className={c.editing}>
        <div className={c.heading}>
          <div className={c.imgDish}>
            <img src={img} alt="dish picture" />
          </div>
          <div className={c.description}>
            <div>Spicy seasoned seafood noodles</div>
            <div className={c.price}>$ 2.29 - 20 Bowls</div>
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