import { yupResolver } from '@hookform/resolvers/yup'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { dishSchema } from '../../../Validation/dishSchema'
import { useAddDishMutation } from '../../../store/dishesAPI'
import CustomButton from '../CustomButton/CustomButton'
import CustomRadio from '../CustomRadio/CustomRadio'
import c from './ModalDish.module.scss'


export const ModalDish = ({setModal}) => {

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
      scale: 0
    },
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

  const [addDish] = useAddDishMutation()

  const {register, formState: {errors}, handleSubmit, resetField} = useForm({
    defaultValues: {
    },
    resolver: yupResolver(dishSchema),
  });


  const onSave = (data) => {
    
    const formData = new FormData()
    formData.append('categoryId', data.categoryId)
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('discount', data.discount)
    formData.append('picture',data.picture[0], data.picture[0].name)
    
    addDish(formData)
  }

  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    const fileObj = e.target.files[0];
    if (fileObj) {
      setPreview(URL.createObjectURL(fileObj))
    }
    return;
  };

  const clearDrop = () => {
    resetField('picture')
    setPreview(null)
  }

  



  return (
      <motion.div className={c.modal} variants={container} initial={'hidden'} animate={'show'} exit={'hidden'} 
      onClick={() => {setModal(false)}}>
        <motion.div className={c.content} variants={item} initial={'hidden'} animate={'show'} exit={{scale:0}} onClick={(e)=>{e.stopPropagation()}}
        >

          <form className={c.form} onSubmit={handleSubmit(onSave)}>
            
           
            <div className={errors.picture ? `${c.drop} ${c.required}` : `${c.drop}`}>
              {!preview && <label htmlFor="file"><div className={c.text}>Select image</div></label>}
              <input 
                {...register('picture')} 
                type="file" 
                id="file"
                accept='image/png' 
                onChange={(e) => {handleChange(e)}}/>

              {preview && 
                <div className={c.preview}>
                  <img src={preview} alt='your image'/>
                  <span className={c.cancel} onClick={clearDrop}>&#10006;</span>
                </div> 
              }
            </div>
            {errors.picture?.message 
                ? <p className={c.alert}>{errors.picture?.message}</p> 
                : <p className={c.empty}></p>}
          

            

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
                step={0.01} 
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

            <div className={c.controls}>
              <CustomButton type='button' text='Discard Changes' onClick={()=>{setModal(false)}}/>
              <CustomButton type='submit' text='Save Changes'/>
            </div>
          </form>

        </motion.div>
      </motion.div> 
  )
}