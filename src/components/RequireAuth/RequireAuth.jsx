
import { useSelector } from 'react-redux'
import {Navigate, useLocation} from 'react-router-dom'

const RequireAuth = ({children}) => {

  const isAuth = useSelector((state) => state.user.isAuthUser)
  if(!isAuth){
    let location = useLocation()
    return (
    <Navigate 
    to='/account/auth' state={{from: location}} replace/>)
  }
  return children
}

export default RequireAuth