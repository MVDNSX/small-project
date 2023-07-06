import { useEffect, useState } from 'react';

export function useDishes(){
  const [isLoading, setIsLoading] = useState(true)
  const [dishes, setDishes] = useState([])
  useEffect(()=>{
    let updated = false;
    setIsLoading(true)
    fetch(`https://6420700f25cb657210497359.mockapi.io/api/dishes`)
    .then((res) => res.json())
    .then((json) =>  {
      if(!updated){
        setDishes(json)
        setIsLoading(false)
      }
    })
    

    return () => {
      updated = true; 
    }
  }, [])
  return {isLoading,dishes};
}

