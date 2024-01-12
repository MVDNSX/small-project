import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessToken } from '../utils/getAccessToken'
import { urlHostingApi } from '../utils/getBaseUrlHosting'
import { addDish, changeComment, changeCount, delDish, loadBasket } from './Slices/basketSlice'


export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({baseUrl: `${urlHostingApi}/basket`}),
  tagTypes:['Basket'],
  endpoints: (build) => ({

    getBasket: build.query({
      query: () => ({
        url: '/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      providesTags: [{type: 'Basket', id: 'LIST'}],
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          const {data} = await queryFulfilled
          dispatch(loadBasket(data))
        } catch (error) {

        }
      },
    }),

    addItemBasket: build.mutation({
      query: (productId) => ({
        url: `/add`,
        method: 'POST',
        body:{
          productId
        },
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          const {data} = await queryFulfilled
          dispatch(addDish(data))
        } catch (error) {
          console.log(error)
        }
      },
      //invalidatesTags: [{type: 'Basket', id: 'LIST'}]
    }),

    deleteItem: build.mutation({
      query: (productId) => ({
        url: `/${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      async onQueryStarted(
        productId,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          const {data} = await queryFulfilled
          dispatch(delDish({productId, ...data}))
        } catch (error) {
          console.log(error)
        }
      },
      //invalidatesTags: [{type: 'Basket', id: 'RELOAD-LIST'}]
    }),
    changeItemComment: build.mutation({
      query: ({productId, comment}) => ({
        url: '/comment',
        method: 'PUT',
        body:{
          productId,
          comment
        },
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          const {data} = await queryFulfilled
          dispatch(changeComment(data))
        } catch (error) {
          console.log(error)
        }
      },
      //invalidatesTags: (result, error, arg) => [{type: 'Basket', id: arg.dishId}]
    }), 
    changeItemCount: build.mutation({
      query: ({productId, count}) => ({
        url: '/count',
        method: 'PUT',
        body:{
          productId,
          count
        },
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        try {
          const {data} = await queryFulfilled
          dispatch(changeCount(data))
        } catch (error) {
          console.log(error)
        }
      },
      //invalidatesTags: ['Basket']
    })
  })
})

export const {useGetBasketQuery, useGetBasketItemQuery, useDeleteItemMutation, useAddItemBasketMutation, useChangeItemCommentMutation, useChangeItemCountMutation} = basketApi