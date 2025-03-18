import Signin from "./web/pages/auth/signin";
import Login from "./web/pages/auth/signup";
import Content from "./web/pages/content";
import Header from "./web/pages/header";
import Layout from "./web/pages/layout";
import Navbar from "./web/pages/sideNav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TaskDetails from "./web/pages/taskDetails";


const App = () => {
  const isAuthenticated = true;
  return(

    <Routes>
      <Route path="/*" element={isAuthenticated ? <Layout/> : <Navigate to={'/signin'} /> } />
      
    </Routes>

    // <Login />
    // <Signin />
    // <Header />
    // <Navbar />
    // <BrowserRouter>
    // <Layout />
    // </BrowserRouter>
    
    // <Content />
  )
}

export default App;