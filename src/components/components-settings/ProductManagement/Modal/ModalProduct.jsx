import { motion } from 'framer-motion'
import c from './ModalProduct.module.scss'
import { ProductForm } from './ModalForm/ProductForm'


export const ModalProduct = ({isOpenModal, product}) => {

  const container = {
    hidden: {opacity: 0},
    show:{
      opacity:1, 
      transition: {
        delayChildren: .1,
      }
    }
  }
  
  const item = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show:{
      opacity:1,
      y:0,
    }
  }

  return (
      <motion.div 
        className={c.modal} 
        variants={container} 
        initial={'hidden'} 
        animate={'show'} 
        exit={'hidden'} 
        onClick={() => {isOpenModal(false)}}>

          <motion.div 
            className={c.content} 
            variants={item} 
            initial={'hidden'} 
            animate={'show'} 
            exit={'hidden'} 
            onClick={(e) => {e.stopPropagation()}}>

              <ProductForm isOpenModal={isOpenModal} product={product}/>

          </motion.div>
      </motion.div> 
  )
}