import { Routes, Route } from "react-router-dom";
import AdminLogin from "../AdminLogin";
import AdminPage from "../AdminPage";
import MoviesList from "../MoviesList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />}></Route>
      <Route path="/Movies360" element={<MoviesList />}></Route>
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
