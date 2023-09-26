import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5005/api/product'}),
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
        //headers: {
        //  Authorization: `Bearer ${getAccessToken()}`
        //}
      }),
      invalidatesTags: [{type: 'Product', id:'ADD-ITEM'}]
    }),
    editProduct: build.mutation({
      query :(body) => ({
        url: 'edit',
        method: 'PUT',
        body,
        //headers: {
        //  Authorization: `Bearer ${getAccessToken()}`
        //}
      }),
      invalidatesTags: [{type: 'Product', id:'EDIT-ITEM'}],
    })
  })
})

export const {useGetProductQuery, useAddProductMutation, useEditProductMutation, useUploadImageMutation} = productApi