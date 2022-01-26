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
import BlogDetail from "./Componants/BlogDetail/BlogDetail";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/details" element={<BlogDetail />} />
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
      />
    </AuthProvider>
  );
}

export default App;
