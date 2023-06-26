
import { useSelector } from 'react-redux'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'

const RequireAuth = ({children}) => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth.auth)
  if(!auth){
    return (
    <Navigate 
    to='/account/login' 
    state={{from: location}}/>)
  }

  return children
}

export default RequireAuth