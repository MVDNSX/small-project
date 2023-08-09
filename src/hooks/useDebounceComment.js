import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeComment } from '../store/Slices/basketSlice'

export const useDebounceComment = (value, index, delay) => {
  const dispatch = useDispatch()

  useEffect(()=>{
    let timer
    if(value){
      timer = setTimeout(() => {
        dispatch(changeComment({comment: value, index}))
      }, delay);}

    return () => {
      clearTimeout(timer)
    }
  }, [value, index])
}
