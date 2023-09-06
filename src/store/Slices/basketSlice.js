import { createSlice} from '@reduxjs/toolkit'

const initialState = {
	basketId: null,
	products: [
	],
	totalCostBasket: 0,
	totalDiscount: 0
}

const recalculationPrice = (count, price) => {
	return +(count * price).toFixed(2)
}

const calculationTotal = (state) => {
	let result = 0;
	let discount = 0
	state.order.map( (item) => {
		result += item.countPrice
		if(item.discount !== 0){
			discount += (item.price - item.finalPrice) * item.count
		}
	})
	state.result = +result.toFixed(2)
	state.discount = +discount.toFixed(2)
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {

		loadBasket: (state, action) => {
			const {basketId, totalCostBasket, totalDiscount, products} = action.payload
			state.basketId = basketId,
			state.products = [...products]
			state.totalCostBasket = totalCostBasket
			state.totalDiscount = totalDiscount
		},

		addDish: (state, action) => {
			const {productId} = action.payload
			if(!productId){
				state.products = [...state.products, ...action.payload.products]
			}else{
				const indexDish = state.products.findIndex(item => item.productId === productId)
				state.products[indexDish].product_basket = {...action.payload} 
			}
		},

		delDish: (state, action) => {
			console.log(action.payload)
			const productId = action.payload
			state.products = state.products.filter(item => item.productId !== productId)
		},

		changeCount: (state, action) => {
			const {productId, product_basket} = action.payload.products
			const {count, totalCost} = product_basket
			state.products.map( item  => {
				if(item.productId === productId){
					item.product_basket = {...item.product_basket, count, totalCost }
				}
			})
		},

		changeComment: (state, action) => {
			console.log(action.payload)
			const {productId, product_basket} = action.payload.products
			const {comment} = product_basket
			state.products.map( item  => {
				if(item.productId === productId){
					item.product_basket = {...item.product_basket, comment}
				}
			})
		}
	},
})

export const {loadBasket, addDish, delDish, changeCount, changeComment } = basketSlice.actions

export default basketSlice.reducer
