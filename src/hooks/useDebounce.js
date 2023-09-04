import { useEffect, useState } from 'react'

export const useDebounce = (value, delay) => {
  const [debVal, setDebVal] = useState(value)

  useEffect(()=>{
    const debounceId = setTimeout(() => {
      setDebVal(value)
    }, delay);
    return () => {
      clearTimeout(debounceId)
    }
  }, [value, delay])
  return debVal
}
