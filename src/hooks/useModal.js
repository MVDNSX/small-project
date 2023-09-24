import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { dishSchema } from '../Validation/dishSchema'
import { useAddProductMutation } from '../store/productAPI'
import { useState } from 'react'


export const useModalForm = (product) => {
  let itemData = {}
  const [addProduct] = useAddProductMutation()
  const [preview, setPreview] = useState(product ? `http://localhost:5005/${product.picture}` : null)
  
  if(product) {
    const {categoryId, name, price, discount, picture} = product
    itemData = {
      picture,
      name,
      price,
      discount,
      categoryId,
    }

  }
  
  const {register, formState: {errors}, handleSubmit, resetField, control, getValues} = useForm({
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

  const onSave = (data) => {
    const formData = new FormData()
    formData.append('categoryId', data.categoryId)
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('discount', data.discount)
    formData.append('picture',data.picture[0], data.picture[0].name)
    addProduct(formData)
  }

  const handleChange = (e) => {
    const fileObj = e.target.files[0];
    if (fileObj) {
      setPreview(URL.createObjectURL(fileObj))
    }
    return;
  };

  const clearImage = () => {
    resetField('picture')
    setPreview(null)
  }

  return {register, errors, handleSubmit, resetField, Controller, control, categories, addProduct, onSave, handleChange, clearImage, preview}
}