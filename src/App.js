import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Componants/Home/Home/Home';
import Login from './Componants/Authentication/Login/Login';
import Registration from './Componants/Authentication/Registration/Registration';
import NotFound from './Componants/NotFound/NotFound';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Verification from "./Componants/Authentication/Registration/Verification";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogDetail from "./Componants/BlogDetail/BlogDetail";
import Dashboard from "./Componants/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Componants/ProtectedRoutes/PrivateRoute/PrivateRoute";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease'
    });
  });

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/details/:blogID" element={
            <PrivateRoute>
              <BlogDetail />
            </PrivateRoute>} />
          <Route path="/dashboard/*" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        sx={{ zIndex: 999 }}
      />
    </AuthProvider>
  );
}

export default App;
