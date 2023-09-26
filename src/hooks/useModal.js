import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { dishSchema } from '../Validation/dishSchema'
import { useAddProductMutation, useEditProductMutation, useUploadImageMutation } from '../store/productAPI'
import { useRef, useState } from 'react'


export const useModalForm = (product) => {
  let itemData = {}
  const [uploadImage] = useUploadImageMutation()
  const [preview, setPreview] = useState(product ? product.picture : null)
  const [addProduct] = useAddProductMutation()
  const [editProduct] = useEditProductMutation()
  const refInput = useRef()
  if(product) {
    const {categoryId, name, price, discount, picture, productId} = product
    itemData = {
      productId,
      picture,
      name,
      price,
      discount,
      categoryId,
    }

  }
  
  const {register, formState: {errors}, handleSubmit, resetField, control, setValue} = useForm({
    resolver: yupResolver(dishSchema),
    defaultValues: itemData,
  });

  const categories = [
    {id: 1, name:'Hot Dishes'},
    {id: 2, name:'Cold Dishes'},
    {id: 3, name:'Soup'},
    {id: 4, name:'Grill'},
    {id: 5, name:'Appetizer'},
    {id: 6, name:'Dessert'},
  ]

  const onCreateProduct = (data) => {
    //console.log(data)
    addProduct(data)
  }

  const onEditProduct = (data) => {
    //console.log(data)
    editProduct(data)
  }

  const handleModalForm =  data => {return product ? onEditProduct(data) : onCreateProduct(data)}

  const handleChange = async (e) => {
    const picture = e.target.files[0]
    if (picture) {
      const fd = new FormData()
      fd.append('picture', picture, picture.name)
      await uploadImage(fd).then(
        response => {setPreview(response.data.url), setValue('picture', `${response.data.url}`)}
      )
    }
    return;
  };

  const clearImage = () => {
    refInput.current.value = '';
    resetField('picture')// не работает тк инпут был отключен от react hook form
    setValue('picture', null)
    setPreview(null)
  }

  return {register, errors, handleSubmit, resetField, Controller, control, categories, addProduct, handleModalForm, handleChange, clearImage, preview, refInput}
}