import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser } from './Slices/userSlice'
import { getAccessToken } from '../utils/getAccessToken'
import {toast} from 'react-toastify'
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://server-project-production.up.railway.app/api/user'}),
  endpoints: (build) => ({
    getAuth: build.query({
      query: () => ({
        url: 'auth',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // `onSuccess` side-effect
          localStorage.setItem('token', data.token)
          dispatch(setUser(data))
        } catch (err) {
          // `onError` side-effect
        }
      }
    }),
    loginUser: build.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // `onSuccess` side-effect
          localStorage.setItem('token', data.token)
          dispatch(setUser(data))
          console.log(data.message)
          toast.success(data.message)
        } catch ({error}) {
          // `onError` side-effect
          console.log(error.data.message)
          toast.error(error.data.message)
        }
      }
    }),
    regUser: build.mutation({
      query: (body) => ({
        url: 'reg',
        method: 'POST',
        body
      })
    })
  })
})

export const {useGetAuthQuery, useLoginUserMutation, useRegUserMutation} = authApi