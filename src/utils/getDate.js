export const getDateFormat = () => {
  let date = new Date()
  const option = {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }
  return date.toLocaleString('en-GB', option)
}