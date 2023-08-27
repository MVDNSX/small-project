import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './authAPI'
import { dishesApi } from './dishesAPI'
import userSlice from './Slices/userSlice'

export const store = configureStore({
	reducer:{
		[dishesApi.reducerPath]: dishesApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		user: userSlice
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dishesApi.middleware, authApi.middleware),
})
setupListeners(store.dispatch)