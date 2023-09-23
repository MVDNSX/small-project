import { useState } from 'react'
import { useAddDishMutation } from '../../../../../store/dishesAPI'
import {CustomButton} from '../../../../UI/CustomButton/CustomButton'
import {CustomRadio} from '../../../../UI/CustomRadio/CustomRadio'
import { CustomInput } from '../../Modal/CustomInput/CustomInput'
import { CustomRadioGroup } from '../../../../UI/CustomRadioGroup/CustomRadioGroup'
import c from './ProductForm.module.scss'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {dishSchema} from '../../../../../Validation/dishSchema'

export const ProductForm = () => {

  const categories = [
    {id: 1, name:'Hot Dishes'},
    {id: 2, name:'Cold Dishes'},
    {id: 3, name:'Soup'},
    {id: 4, name:'Grill'},
    {id: 5, name:'Appetizer'},
    {id: 6, name:'Dessert'},
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
                <CustomInput
                  register={register}
                  name={'name'}
                  errors={errors.name}
                  placeholder='Product name'
                  type='text'
                  autoComplete='off'
                /> 

                <CustomInput
                  register={register}
                  name={'price'}
                  errors={errors.price}
                  placeholder='Price'
                  type='number'
                  inputMode='decimal'
                  step={0.01}
                  autoComplete='off'
                /> 

                <CustomInput
                  register={register}
                  name={'discount'}
                  errors={errors.discount}
                  placeholder='Discount'
                  type='number'
                  inputMode='numeric'
                  autoComplete='off'
                /> 

                <CustomRadioGroup title={'Product category'} errors={errors.categoryId}>
                  {categories.map( ({id, name}) => {
                    return <CustomRadio 
                            key={id} 
                            register={register} 
                            name={'categoryId'} 
                            type={'radio'}
                            value={id}
                            labelText={name}/>})}
                </CustomRadioGroup>
                
              </div>

              <div className={c.controls}>
                <CustomButton type='button' text='Discard Changes' onClick={() => {handleClose(false)}}/>
                <CustomButton type='submit' text='Save Changes'/>
              </div>

    </form>
  )
}