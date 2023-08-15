export const getOptionsSort = () => {
  return (
    [
      {value: 'name', name: 'Name' },
      {value: 'price', name: 'Price'},
    ]
  )
} 

export const getOptionsSortOrder = () => {
   return (
    [
      {value: 'Completed', name: 'Completed'},
      {value: 'Preparing', name: 'Preparing'},
      {value: 'Pending', name: 'Pending'},
    ]
   )
}