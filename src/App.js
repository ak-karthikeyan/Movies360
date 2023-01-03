import { } from "antd";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layout";
import MoviesList from "./Components/MoviesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout />
        <MoviesList />
      </BrowserRouter>
    </div>
  );
}

export default App;

