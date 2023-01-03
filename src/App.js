import { } from "antd";
import './App.css';
import { BrowserRouter, useNavigate } from "react-router-dom";
import AppLayout from "./layout";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {

    const navigateToHome = () => {
      navigate("/");
    };
    navigateToHome();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;

