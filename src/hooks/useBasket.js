import { useCallback, useState } from 'react';
import { useChangeItemCommentMutation, useChangeItemCountMutation, useDeleteItemMutation, useGetBasketQuery } from '../store/basketApi'
import { useSelector } from 'react-redux'

export const useBasket = () => {
  const [isOpen, setOpen] = useState(false)
  useGetBasketQuery()
  const basket = useSelector( state => state.basket )
  const {products, totalCostBasket, totalDiscountBasket} = basket
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return {
    isOpen,
    products,
    totalDiscountBasket,
    totalCostBasket,
    handleOpen, 
    handleClose
  }
}

export const useBasketItem = (item) => {
  const {name, price, finalPrice, productId, discount, picture} = item
  const {count, comment, totalCostProduct} = item.product_basket
  const [deleteItem] = useDeleteItemMutation()
  const [changeItemCount] = useChangeItemCountMutation()
  const [changeItemComment] = useChangeItemCommentMutation()
  const [localComment, setLocalComment] = useState(comment);


  const handleCount = (e) => {
    changeItemCount({productId, count: +e.target.value})
  }
  const handleCommentQuery = () =>{
    if(comment === localComment.trim()){
      return
    }
    changeItemComment({productId, comment: localComment})
  }

  const handleDelete = () => {
    deleteItem(productId)
  }
  return {
    name, price, finalPrice, discount, picture, count, totalCostProduct, localComment, setLocalComment, handleCommentQuery, handleCount, handleDelete
  }
}