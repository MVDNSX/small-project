import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
	order: []
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addDishes: (state, action) => {
			const dish = {...action.payload, comment: ''}
			const checkDishInArray = state.order.findIndex( item => item.dishesId === dish.dishesId)
			if(checkDishInArray < 0){
				state.order = [...state.order, dish]
			}else{
				state.order = [...state.order]
			}
		},
		deleteDishes: (state, action) => {
			state.order = state.order.filter(item => item.dishesId !== action.payload)
		},
		changeCount: (state, action) => {
			
			//const existingItemIndex = state.order.findIndex(item => item.dishesId === action.payload.dishesId)
			//if (existingItemIndex >= 0) {
			//	state.order[existingItemIndex].count = +action.payload.count;
			//}
		},
		changeComment: (state, action) => {
			state.order[action.payload.index].comment = action.payload.comment
		}
	},
})

export const { addDishes, deleteDishes, changeCount, changeComment } = basketSlice.actions

export default basketSlice.reducer
