import { useState } from 'react'
import img from '../../../../assets/cards/Image 1.png'
import { SvgIcon } from '../../../Svg/SvgIcon'
import c from './EditDish.module.scss'
import { ModalProduct } from '../Modal/ModalProduct'
import {createPortal} from 'react-dom'

export const EditDish = ({dish}) => {

  const {name, finalPrice, picture} = dish
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    {openModal && createPortal(<ModalProduct isOpenModal={setOpenModal} product={dish}/>, document.body)}
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
        <button className={c.editBtn} onClick={()=>{setOpenModal(true)}}>
          <SvgIcon icon='edit'/>
          <span>Edit dish</span>
        </button>
      </div>
    </>
  )
}