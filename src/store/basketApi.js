import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessToken } from '../utils/getAccessToken'

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5005/api/basket'}),
  tagTypes:['BasketItems', 'ItemComment', 'ItemCount', 'DeleteItem'],
  endpoints: (build) => ({

    getBasket: build.query({
      query: () => ({
        url: '/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      providesTags:['BasketItems', 'AddBasketItem', 'DeleteItem', 'ItemComment', 'ItemCount']
    }),
    addItemBasket: build.mutation({
      query: ({basketId, dishId}) => ({
        url: `/add`,
        method: 'POST',
        body:{
          basketId, // захардкожено пофиксить в  homepage, basketitem
          dishId
        },
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      invalidatesTags: ['AddBasketItem']
    }),
    deleteItem: build.mutation({
      query: (dishId) => ({
        url: `/${dishId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      invalidatesTags: ['DeleteItem']
    }),
    changeItemComment: build.mutation({
      query: ({basketId, dishId, comment}) => ({
        url: '/comment',
        method: 'PUT',
        body:{
          basketId,
          dishId,
          comment
        },
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      invalidatesTags: ['ItemComment']
    }), 
    changeItemCount: build.mutation({
      query: ({basketId, dishId, count}) => ({
        url: '/count',
        method: 'PUT',
        body:{
          basketId,
          dishId,
          count: +count
        },
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      invalidatesTags: ['ItemCount']
    })
  })
})

export const {useGetBasketQuery, useDeleteItemMutation, useAddItemBasketMutation, useChangeItemCommentMutation, useChangeItemCountMutation} = basketApi