import { ReactNode } from "react"
import { Navigate} from "react-router-dom";

type props = {
    children: ReactNode
} 

const ProtectedRoute: React.FC<props> = ({children}) => {

    const isAuth = localStorage.getItem("userData");
    if(isAuth){
        return <>{children}</>
    }
    return <Navigate to={'/signin'} />
}

export default ProtectedRoute;