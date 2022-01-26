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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
