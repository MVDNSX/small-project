import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessToken } from '../utils/getAccessToken'

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5005/api/basket'}),
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
      providesTags: (result, error, arg) => 
      result?.Dishes
      ? [...result.Dishes
        .map( (el) => ({type: 'Basket', id: el.dishId})), 
        {type: 'Basket', id: 'LIST'}, 
        {type: 'Basket', id: 'RELOAD-LIST'}]
      : [{type: 'Basket', id: 'LIST'}, {type: 'Basket', id: 'RELOAD-LIST'}]
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
      invalidatesTags: [{type: 'Basket', id: 'LIST'}]
    }),
    deleteItem: build.mutation({
      query: (dishId) => ({
        url: `/${dishId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }),
      invalidatesTags: [{type: 'Basket', id: 'RELOAD-LIST'}]
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
      invalidatesTags: (result, error, arg) => [{type: 'Basket', id: arg.dishId}]
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
      invalidatesTags: ['Basket']
    })
  })
})

export const {useGetBasketQuery, useGetBasketItemQuery, useDeleteItemMutation, useAddItemBasketMutation, useChangeItemCommentMutation, useChangeItemCountMutation} = basketApi