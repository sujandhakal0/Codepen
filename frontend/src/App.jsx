import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "./main";
import Pen from "./pages/Pen";
import Profile from "./pages/Profile";

function App() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Context);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await axios.get(
          "https://codepen-backend-t587.onrender.com/api/v1/user/me",
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    getUser();
  }, [isAuthenticated, setIsAuthenticated]);

  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="/pen/:urlId?" element={<Pen />} />
        <Route path="/profile" element={<Profile />} />
        {/* if route not matching */}
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
