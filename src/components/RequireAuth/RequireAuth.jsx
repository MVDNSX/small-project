
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'

const RequireAuth = ({children}) => {

  const isAuth = useSelector((state) => state.user.isAuthUser)
  if(!isAuth){
    return (
    <Navigate 
    to='/account/auth'/>)
  }
  return children
}

export default RequireAuth