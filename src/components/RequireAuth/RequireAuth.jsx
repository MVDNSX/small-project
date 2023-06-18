
import {Navigate, useLocation, useNavigate} from 'react-router-dom'

const RequireAuth = ({children}) => {
  const location = useLocation();
  const auth = false;
  console.log(location.pathname)
  if(!auth){
    return (
    <Navigate 
    to='/account/login' 
    state={{from: location}}/>)
  }

  return children
}

export default RequireAuth