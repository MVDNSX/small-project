import { createSlice} from '@reduxjs/toolkit'

const initialState = {
	basketId: null,
	products: [
	],
	totalCostBasket: 0,
	totalDiscountBasket: 0
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
			const {basketId, totalCostBasket, totalDiscountBasket, products} = action.payload
			state.basketId = basketId,
			state.products = [...products]
			state.totalCostBasket = totalCostBasket
			state.totalDiscountBasket = totalDiscountBasket
		},

		addDish: (state, action) => {
			const {products, totalCostBasket, totalDiscountBasket} = action.payload
			const productIndex = state.products.findIndex( item => item.productId === products[0].productId)
			if(productIndex === -1){
				state.products = [...state.products, ...products]
			}else{
				state.products[productIndex].product_basket = {...products[0].product_basket}
			}
			state.totalCostBasket = totalCostBasket
			state.totalDiscountBasket = totalDiscountBasket
		},

		changeCount: (state, action) => {
			const {product_basket, totalCostBasket, totalDiscountBasket} = action.payload
			const productIndex = state.products.findIndex( item => item.productId === product_basket.productId)
			state.products[productIndex].product_basket = {...state.products[productIndex].product_basket, ...product_basket}
			state.totalCostBasket = totalCostBasket
			state.totalDiscountBasket = totalDiscountBasket
		},

		changeComment: (state, action) => {
			const {product_basket, totalCostBasket, totalDiscountBasket} = action.payload
			const productIndex = state.products.findIndex( item => item.productId === product_basket.productId)
			state.products[productIndex].product_basket = {...state.products[productIndex].product_basket, ...product_basket}
			state.totalCostBasket = totalCostBasket
			state.totalDiscountBasket = totalDiscountBasket
		}, 

		delDish: (state, action) => {
			const {productId, totalCostBasket, totalDiscountBasket} = action.payload
			state.products = state.products.filter(item => item.productId !== productId)
			state.totalCostBasket = totalCostBasket
			state.totalDiscountBasket = totalDiscountBasket
		},
		
	},
})

export const {loadBasket, addDish, delDish, changeCount, changeComment } = basketSlice.actions

export default basketSlice.reducer
