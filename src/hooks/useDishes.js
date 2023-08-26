import { useMemo } from 'react';

export const useCategoryDishes = (dishes, filterCategory) => {
	const categoryDishes = useMemo( ()=> {
		if(filterCategory !== 0){
			return dishes.filter( dish => dish.categoryId === filterCategory)
		}else{
			return dishes
		}
	}, [filterCategory, dishes])
	return categoryDishes
}

export const useSortDishes = (dishes, sortParam, category) => {
	const categoryDishes = useCategoryDishes(dishes, category)

  const sortedDishes = useMemo( () => {
		if(sortParam === 'name' ) {
			return [...categoryDishes].sort( (a,b) => {return a[sortParam].localeCompare(b[sortParam])})
		}else if(sortParam === 'finalPrice'){
			return [...categoryDishes].sort( (a,b) => {return a[sortParam] - b[sortParam] })
		}
		else{
			return categoryDishes;
		}
	}, [sortParam, categoryDishes])
  return sortedDishes
}

export const useSortAndFilterDishes = (dishes, sort, query, category) => {
  const sortedDishes = useSortDishes(dishes, sort, category);
  const sortedAndSearchDishes = useMemo( ()=> {
		if(sortedDishes){
			return sortedDishes.filter( d => d.name.toLowerCase().includes(query.toLowerCase()))
		}else{
			return sortedDishes
		}
	},[query, sortedDishes])
  return sortedAndSearchDishes;
}