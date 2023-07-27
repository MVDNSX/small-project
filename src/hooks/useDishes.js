import { useMemo } from 'react';

export const useSortDishes = (dishes, sortParam) => {
  const sortedDishes = useMemo( () => {
		if(sortParam === 'name' ) {
			return [...dishes].sort( (a,b) => {return a[sortParam].localeCompare(b[sortParam])})
		}else if(sortParam === 'price'){
			return [...dishes].sort( (a,b) => {return a[sortParam] - b[sortParam] })
		}
		else{
			return dishes;
		}
	}, [sortParam, dishes])
  return sortedDishes
}

export const useSortAndFilterDishes = (dishes, sort, query) => {
  const sortedDishes = useSortDishes(dishes, sort);
	
  const sortedAndSearchDishes = useMemo( ()=> {
		return sortedDishes.filter( d => d.name.toLowerCase().includes(query.toLowerCase()))
	},[query, sortedDishes])
  return sortedAndSearchDishes;
}