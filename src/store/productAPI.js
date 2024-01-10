import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessToken } from '../utils/getAccessToken'
import {toast} from 'react-toastify'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://server-project-production.up.railway.app/api/product'}),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => '/',
      providesTags: [
        {type: 'Product', id: 'LIST'}, 
        {type: 'Product', id: 'ADD-ITEM'},
        {type: 'Product', id:'EDIT-ITEM'},
      ],
    }),
    uploadImage: build.mutation({
      query: (body) => ({
        url: 'upload',
        method: 'POST',
        body,
        //headers: {
          //  Authorization: `Bearer ${getAccessToken()}`
          //}
      }),
      invalidatesTags:[{type: 'Product', id:'UPLOAD-PICTURE'}],
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          const {data} = await queryFulfilled
          return data
        } catch (error) {
          console.log(error)
        }
      },
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: 'create',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      async onQueryStarted(body, {dispatch, queryFulfilled}) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
        } catch ({error}) {
          console.log(error.data.message)
          toast.error(error.data.message)
        }
      },
      invalidatesTags: [{type: 'Product', id:'ADD-ITEM'}]
    }),
    editProduct: build.mutation({
      query :(body) => ({
        url: 'edit',
        method: 'PUT',
        body,
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      async onQueryStarted(body, {dispatch, queryFulfilled}) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
        } catch ({error}) {
          console.log(error.data.message)
          toast.error(error.data.message)
        }
      },
      invalidatesTags: [{type: 'Product', id:'EDIT-ITEM'}],
    })
  })
})

export const {useGetProductQuery, useAddProductMutation, useEditProductMutation, useUploadImageMutation} = productApi