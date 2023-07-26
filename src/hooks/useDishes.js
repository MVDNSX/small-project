import { useEffect, useState } from 'react';

export function useDishes(url){
  const [dishes, setDishes] = useState([])
  useEffect(()=>{
    fetch(url)
		.then((res) => res.json())
		.then((res) => {
			setDishes(res)
		})
  }, [])
  return {dishes, setDishes};
}

