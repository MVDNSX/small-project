import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:{},
  isAuthUser: false
}

export const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = {...action.payload.user}
      state.isAuthUser =  true;
    },
    resetUser: (state, action) => {
      state.currentUser = {},
      state.isAuthUser = false;
      localStorage.clear()
    }
  }
})

export const {setUser, resetUser} = authSlice.actions

export default authSlice.reducer
