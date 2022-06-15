import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {history} from "../redux/configureStore";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
  return (
    <BrowserRouter history ={history}>
      {console.log(history)}
      <Routes>
        <Route path="/" element={<PostList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
