
export const getOrders = () => {
  return (
  [ 
    {
         menu:[
            {dishesId: 1,categoryId: 1,name: 'Zpicy seasoned seafood noodles',price: 2.29,bowls: 21,discount: 10,finalPrice: 2.06,comment: '',count: 1,countPrice: 2.06},
            {dishesId: 22,categoryId: 3,name: 'Spicy seasoned seafood mushrooms',price: 2.59,bowls: 21,discount: 0,finalPrice: 2.59,comment: '',count: 1,countPrice: 2.59},
            {dishesId: 21,categoryId: 3,name: 'Seasoned seafood noodles',price: 2.69,bowls: 21,discount: 0,finalPrice: 2.69,comment: '',count: 1,countPrice: 2.69},
            {dishesId: 20,categoryId: 3,name: 'Spicy seasoned seafood noodles',price: 2.39,bowls: 21,discount: 0,finalPrice: 2.39,comment: '',count: 1,countPrice: 2.39},
            {dishesId: 16,categoryId: 1,name: 'Xpicy seasoned seafood noodles',price: 2.29,bowls: 21,discount: 10,finalPrice: 2.06,comment: '',count: 1,countPrice: 2.06}
             ],
         orderNumber: 34562, 
         status: 'Completed', 
         result: 11.79,
      },
      {
        menu: [
          {dishesId: 14,categoryId: 6,name: 'Spicy seasoned seafood noodles',price: 2.6,bowls: 21,discount: 0,finalPrice: 2.6,comment: '',count: 1,countPrice: 2.6
          },
          {dishesId: 15,categoryId: 6,name: 'Hot spicy fried rice with omelet',price: 2.89,bowls: 21,discount: 60,finalPrice: 1.16,comment: '',count: 1,countPrice: 1.16
          },
          {dishesId: 12,categoryId: 6,name: 'Spicy instant noodle with special omelette',price: 2.8,bowls: 21,discount: 0,finalPrice: 2.8,comment: '',count: 1,countPrice: 2.8
          },
          {dishesId: 13,categoryId: 6,name: 'Spicy instant noodle with special omelette',price: 2.7,bowls: 21,discount: 0,finalPrice: 2.7,comment: '',count: 1,countPrice: 2.7
          }
        ],
        orderNumber: 33212, 
        status: 'Pending', 
        result: 9.26,
     },
     {
      menu:[
        {dishesId: 6,categoryId: 1,name: 'Hot spicy fried rice with omelet',price: 2.89,bowls: 21,discount: 60,finalPrice: 1.16,comment: '',count: 1,countPrice: 1.16
        },
        {dishesId: 11,categoryId: 4,name: 'Beef dumpling in hot and sour soup',price: 2.29,bowls: 21,discount: 20,finalPrice: 2.07,comment: '',count: 1,countPrice: 2.07
        }
      ],
      orderNumber: 33155, 
      status: 'Preparing', 
      result: 3.23,
   },
   ]
  )
}