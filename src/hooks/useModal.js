import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { dishSchema } from '../Validation/dishSchema'
import { useAddProductMutation, useEditProductMutation } from '../store/productAPI'
import { useState } from 'react'


export const useModalForm = (product) => {
  let itemData = {}
  const [addProduct] = useAddProductMutation()
  const [editProduct] = useEditProductMutation()
  const [preview, setPreview] = useState(product ? `http://localhost:5005/${product.picture}` : null)
  
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
  
  const {register, formState: {errors}, handleSubmit, resetField, control} = useForm({
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
    const formData = new FormData()
    formData.append('categoryId', data.categoryId)
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('discount', data.discount)
    formData.append('picture',data.picture[0], data.picture[0].name)
    addProduct(formData)
  }

  const onEditProduct = (data) => {
    const formData = new FormData()
    formData.append('productId', data.productId)
    formData.append('categoryId', data.categoryId)
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('discount', data.discount)
    editProduct(formData)
  }

  const handleModalForm =  data => {return product ? onEditProduct(data) : onCreateProduct(data)}

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

  return {register, errors, handleSubmit, resetField, Controller, control, categories, addProduct, handleModalForm, handleChange, clearImage, preview}
}