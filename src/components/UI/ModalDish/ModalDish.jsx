import { useState } from 'react'
import CustomRadio from '../CustomRadio/CustomRadio'
import c from './ModalDish.module.scss'
import {motion, AnimatePresence} from 'framer-motion'

export const ModalDish = () => {
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
    hidden: {scale: 0},
    show:{
      scale:1, 
      transition: {
        duration: .3
      }
    }
  }
  const [preview, setPreview] = useState('')
  const handleChange = (e) => {
    const img = URL.createObjectURL(e.target.files[0])
    setPreview(img)
  }

  return (
    <AnimatePresence>
      <motion.div className={c.modal} variants={container} initial={'hidden'} animate={'show'}>
        <motion.div className={c.content} variants={item}>
          <form className={c.form}>

            {preview && 
              <div className={c.preview}>
                <span onClick={()=>setPreview('')}>&#10006;</span>
                <img src={preview} alt='your image'/>
              </div> }

            {!preview && 
            <div className={c.drop}>
              <label htmlFor="file"><div className={c.text}>Drop image</div></label>
              <input type="file" name="" id="file" onChange={(e) => {handleChange(e)}}/>
            </div>}

            <div className={c.inputs}>
              <input type="text" placeholder='Product name'/>
              <input type="text" placeholder='Price'/>
              <input type="text" placeholder='Discount'/>
              
              <div className={c.radio}>
                <div className={c.title}>Category</div>
                <CustomRadio name='category' text='Hot Dishes' value={1}/>
                <CustomRadio name='category' text='Cold Dishes' value={2}/>
                <CustomRadio name='category' text='Soup' value={3}/>
                <CustomRadio name='category' text='Grill' value={4}/>
                <CustomRadio name='category' text='Appetizer' value={5}/>
                <CustomRadio name='category' text='Dessert' value={6}/>
              </div>
            </div>
            <button>send</button>
          </form>
        </motion.div>
      </motion.div> 
    </AnimatePresence>
  )
}