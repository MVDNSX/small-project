import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './authAPI'
import { productApi } from './productAPI'
import userSlice from './Slices/userSlice'
import basketSlice from './Slices/basketSlice'
import { basketApi } from './basketApi'

export const store = configureStore({
	reducer:{
		[authApi.reducerPath]: authApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
		[basketApi.reducerPath]: basketApi.reducer,
		user: userSlice,
		basket: basketSlice
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware, basketApi.middleware),
})
setupListeners(store.dispatch)