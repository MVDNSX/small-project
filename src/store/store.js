import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './authAPI'
import { dishesApi } from './dishesAPI'
import userSlice from './Slices/userSlice'
import basketSlice from './Slices/basketSlice'
import { basketApi } from './basketApi'

export const store = configureStore({
	reducer:{
		[authApi.reducerPath]: authApi.reducer,
		[dishesApi.reducerPath]: dishesApi.reducer,
		[basketApi.reducerPath]: basketApi.reducer,
		user: userSlice,
		basket: basketSlice
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, dishesApi.middleware, basketApi.middleware),
})
setupListeners(store.dispatch)