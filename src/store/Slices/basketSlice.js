import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	order: [
	],
	result: 0
}

const recalculationPrice = (count, price) => {
	return +(count * price).toFixed(2)
}

const calculationTotal = (state) => {
	let res = 0;
	state.order.map( item => res += item.countPrice)
	return +res.toFixed(2)
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addDishes: (state, action) => {
			const dish = {...action.payload, comment: '', count: 1, countPrice: action.payload.finalPrice}
			const indexDish = state.order.findIndex( item => item.dishesId === dish.dishesId)
			if(indexDish < 0){
				state.order = [...state.order, dish]
			}else{
				state.order[indexDish].count += 1
				state.order[indexDish].countPrice = recalculationPrice(state.order[indexDish].count, state.order[indexDish].finalPrice)
			}
			state.result = calculationTotal(state)
		},

		deleteDishes: (state, action) => {
			state.order = state.order.filter(item => item.dishesId !== action.payload)
			state.result = calculationTotal(state)
		},

		changeCount: (state, action) => {
			const indexDish = action.payload.index
			if(action.payload.count > 0){
				state.order[indexDish].count = +action.payload.count
			}else {
				state.order[indexDish].count = 1
			}
			state.order[indexDish].countPrice = recalculationPrice(state.order[indexDish].count, state.order[indexDish].finalPrice)
			calculationTotal(state)
			state.result = calculationTotal(state)
		},
		
		changeComment: (state, action) => {
			state.order[action.payload.index].comment = action.payload.comment
		}
	},
})

export const { addDishes, deleteDishes, changeCount, changeComment } = basketSlice.actions

export default basketSlice.reducer
