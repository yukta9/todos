import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../web/pages/layout";
import Signin from "../web/pages/auth/signin";

const RouteFlow: React.FC = () => {
    const isAuth = localStorage.getItem("userData");
    return(
        <Routes>
            <Route path="/signin" element={<Signin />} />
            
            <Route path="/*" element={isAuth ? <Layout /> : <Navigate to='/signin' replace />} />
        </Routes>
    )
}   

export default RouteFlow;