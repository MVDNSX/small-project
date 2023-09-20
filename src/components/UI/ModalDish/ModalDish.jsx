import { useEffect, useRef, useState } from 'react'
import CustomRadio from '../CustomRadio/CustomRadio'
import c from './ModalDish.module.scss'
import {motion, AnimatePresence} from 'framer-motion'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { dishSchema } from '../../../Validation/dishSchema'

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

  const categories = [
    {value: 1, text:'Hot Dishes'},
    {value: 2, text:'Cold Dishes'},
    {value: 3, text:'Soup'},
    {value: 4, text:'Grill'},
    {value: 5, text:'Appetizer'},
    {value: 6, text:'Dessert'},
  ]

  const {register, formState: {errors}, handleSubmit} = useForm({
    defaultValues: {
    },
    resolver: yupResolver(dishSchema)
  });

  const onSave = (data) => {
    const picture = new FormData()
    
  }


  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    const fileObj = e.target.files[0];
    if (fileObj) {
      inputRef.current = ''
      setPreview(URL.createObjectURL(fileObj))
    }
    return;
  };

  const clearDrop = () => {
    inputRef.current = null;
    setPreview(null)
  }

  


  return (
    <AnimatePresence>
      <motion.div className={c.modal} variants={container} initial={'hidden'} animate={'show'}>
        <motion.div className={c.content} variants={item}>

          <form className={c.form} onSubmit={handleSubmit(onSave)}>
            
           
            <div className={c.drop}>
              {!preview && <label htmlFor="file"><div className={c.text}>No selected image</div></label>}
              <input 
                value=''
                {...register('picture')} 
                type="file" 
                id="file"
                accept='image/png' 
                name="picture" 
                autoComplete='off'
                onChange={(e) => {handleChange(e)}}/>

              {preview && 
                <div className={c.preview}>
                  <img src={preview} alt='your image'/>
                  <span className={c.cancel} onClick={clearDrop}>&#10006;</span>
                </div> 
              }
            </div>
          

            

            <div className={c.inputs}>
              <input 
                {...register('name')} 
                type="text" 
                placeholder='Product name' 
                autoComplete="off"
                className={errors.name ? `${c.required}` : ''}/>
              {errors.name?.message 
                ? <p className={c.alert}>{errors.name?.message}</p> 
                : <p className={c.empty}></p>}

              <input 
                {...register("price")} 
                type="number" 
                inputMode='decimal' 
                step={0.1} 
                placeholder='Price'
                autoComplete="off" 
                className={errors.price ? `${c.required}` : ''}/>
              {errors.price?.message 
                ? <p className={c.alert}>{errors.price?.message}</p> 
                : <p className={c.empty}></p>}

              <input 
                {...register('discount')} 
                type="number" inputMode='numeric' 
                placeholder='Discount' 
                autoComplete="off"
                className={errors.discount ? `${c.required}` : ''}/>
              {errors.discount?.message 
                ? <p className={c.alert}>{errors.discount?.message}</p> 
                : <p className={c.empty}></p>}

              <div className={errors.name ? `${c.radio} ${c.required}` : `${c.radio}`}>
                <div className={c.title}>Category</div>
                {categories.map( ({text, value}) => {return <CustomRadio key={value} register={register} name='categoryId' text={text} value={value}/>} )}
              </div>
              {errors.categoryId?.message 
                ? <p className={c.alert}>{errors.categoryId?.message}</p> 
                : <p className={c.empty}></p>}
            </div>

            <button type='submit'>send</button>
          </form>

        </motion.div>
      </motion.div> 
    </AnimatePresence>
  )
}