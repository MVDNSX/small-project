import { useState } from 'react';
import { useChangeItemCommentMutation, useChangeItemCountMutation, useDeleteItemMutation, useGetBasketQuery } from '../store/basketApi'
import { useDebounce } from './useDebounce'

export const useBasket = () => {
  const [isOpen, setOpen] = useState(false)
  const {data: basket = []} = useGetBasketQuery()
  const basketItems = basket.Dishes
  const totalDiscount = 'Fix'
  const totalCostBasket = 'Fix'
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return {
    isOpen,
    setOpen,
    basketItems,
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
  const handleComment = (e) => {
        changeItemComment({basketId: 1, dishId, comment:e.target.value})
  }
  const handleDelete = (dishId) => {
    deleteItem({basketId: 1, dishId, comment: e.target.value})
  }
  return {
    dishId,name, discount, price, finalPrice, picture, count, comment, totalCost, handleCount, handleComment, handleDelete, isLoading
  }
}