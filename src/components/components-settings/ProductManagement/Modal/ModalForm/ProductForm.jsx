import { CustomButton } from '../../../../UI/CustomButton/CustomButton'
import { GroupLayout } from '../../../../UI/CustomRadioGroup/GroupLayout'
import { CustomInputForm } from '../../../../UI/CustomInputForm/CustomInputForm'
import c from './ProductForm.module.scss'
import { useModalForm } from '../../../../../hooks/useModal'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { urlHostingImage } from '../../../../../utils/getBaseUrlHosting'

export const ProductForm = ({isOpenModal, product}) => {


  
  const {register, errors, handleSubmit, control, Controller, categories, handleModalForm, handleChange, clearImage, preview, isDataSuccess, refInput} = useModalForm(product)

  return (
    <form className={c.form} onSubmit={handleSubmit(handleModalForm)}>

              <div className={errors.picture ? `${c.drop} ${c.required}` : `${c.drop}`}>
                {!preview && <label htmlFor="file"><div className={c.text}>Select image</div></label>}
                <input 
                  //{...register('picture')}
                  name='picture' 
                  type="file" 
                  id="file"
                  accept='image/png' 
                  ref={refInput}
                  onChange={(e) => {handleChange(e)}}/>

                {preview &&
                  <div className={c.preview}>
                    <div className={c.imagePreview}>
                      <img src={`${urlHostingImage}/${preview}`} alt='Product image'/>
                    </div>
                    <span className={c.cancel} onClick={clearImage}>&#10006;</span>
                  </div>
                }
              </div>
              {errors.picture?.message 
                  ? <p className={c.alert}>{errors.picture?.message}</p> 
                  : <p className={c.empty}></p>}

              <div className={c.inputs}>
                <CustomInputForm
                  register={register}
                  name={'name'}
                  errors={errors.name}
                  placeholder='Product name'
                  type='text'
                  autoComplete='off'
                /> 
                {isDataSuccess && <div>'Запрос успешно выполнен'</div>}
                <CustomInputForm
                  register={register}
                  name={'price'}
                  errors={errors.price}
                  placeholder='Price'
                  type='number'
                  inputMode='decimal'
                  step={0.01}
                  autoComplete='off'
                /> 

                <CustomInputForm
                  register={register}
                  name={'discount'}
                  errors={errors.discount}
                  placeholder='Discount'
                  type='number'
                  inputMode='numeric'
                  autoComplete='off'
                /> 
                
                <GroupLayout 
                  title={'Product category'} 
                  errors={errors.categoryId}>
                  <Controller
                    control={control}
                    name="categoryId"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <CustomSelect
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        options={categories}
                        placeholder={'Choose a category...'}
                      />
                    )}
                  />
                </GroupLayout>

              </div>

              <div className={c.controls}>
                <CustomButton type='button' text='Discard Changes' onClick={() => {isOpenModal(false)}}/>
                <CustomButton type='submit' text='Save Changes'/>
              </div>

    </form>
  )
}