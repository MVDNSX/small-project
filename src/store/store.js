import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Slices/basketSlice'
import authSlice from './Slices/authSlice'

//export const store = configureStore({
//	reducer: {
//		basket: basketReducer,
//		auth: authSlice,
//	},
//})

import { dishesApi } from './dishesAPI'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer:{
		[dishesApi.reducerPath]: dishesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dishesApi.middleware),
})
setupListeners(store.dispatch)