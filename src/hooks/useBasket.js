import { useState } from 'react';
import { useChangeItemCommentMutation, useChangeItemCountMutation, useDeleteItemMutation, useGetBasketQuery } from '../store/basketApi'
import { useSelector } from 'react-redux'

export const useBasket = () => {
  const [isOpen, setOpen] = useState(false)
  useGetBasketQuery()
  const basket = useSelector( state => state.basket )
  const {products, totalCostBasket, totalDiscount} = basket
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return {
    isOpen,
    products,
    totalDiscount,
    totalCostBasket,
    handleOpen, 
    handleClose
  }
}

export const useBasketItem = (item) => {
  const {name, price, finalPrice, dishId, discount, picture} = item
  const {count, comment, totalCost} = item.BasketItem
  const [changeItemComment] = useChangeItemCommentMutation()
  const [changeItemCount] = useChangeItemCountMutation()
  const [deleteItem, {isLoading}] = useDeleteItemMutation()

  const handleCount = (e) => {
    changeItemCount({basketId:1, dishId, count: e.target.value})
  }
  const handleComment = (comment) => {
       return changeItemComment({basketId:1, dishId, comment})
  }
  const handleDelete = (dishId) => {
    deleteItem(dishId)
  }
  return {
    dishId,name, discount, price, finalPrice, picture, count, comment, totalCost, handleCount, handleComment, handleDelete, isLoading
  }
}