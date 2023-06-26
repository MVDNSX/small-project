import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Slices/basketSlice'
import authSlice from './Slices/authSlice'

export const store = configureStore({
	reducer: {
		basket: basketReducer,
		auth: authSlice,
	},
})