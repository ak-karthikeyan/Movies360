import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminLogin from "../AdminLogin";
import AdminPage from "../AdminPage";
import MoviesList from "../MoviesList";

function AppRoutes() {
  const navigate = useNavigate();
  useEffect(() => {
    const navigateToHome = () => {
      navigate("/");
    };
    navigateToHome();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MoviesList />}></Route>
      <Route path="/home" element={<MoviesList />}></Route>
      <Route path="/AdminLogin" element={<AdminLogin />}></Route>
      <Route path="/AdminPage" element={<AdminPage />}></Route>
      <Route
        path="*"
        element={
          <center>
            <h3>Page not Found!</h3>
          </center>
        }
      ></Route>
    </Routes>
  );
}
export default AppRoutes;
