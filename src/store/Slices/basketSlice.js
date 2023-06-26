import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	order: [
	]
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addDishes: (state, action) => {
			const existingItemIndex = state.order.findIndex(item => item.dishesId === action.payload.dishesId)
			if (existingItemIndex >= 0) {
				state.order[existingItemIndex].count += 1;
			} else {
				state.order = [...state.order, action.payload]
			}
		},
		deleteDishes: (state, action) => {
			state.order = state.order.filter(item => item.dishesId !== action.payload.dishesId)
		},
		changeCount: (state, action) => {
			const existingItemIndex = state.order.findIndex(item => item.dishesId === action.payload.dishesId)
			if (existingItemIndex >= 0) {
				state.order[existingItemIndex].count = +action.payload.count;
			}
		},
	},
})

export const { addDishes, deleteDishes, changeCount } = basketSlice.actions

export default basketSlice.reducer
