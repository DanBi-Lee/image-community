import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { history } from "../redux/configureStore";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import usePermit from "./usePermit";
import { Button } from "../elements";
import PostWrite from "../pages/PostWrite";

function App() {
  const { isLogin } = usePermit();
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, [dispatch, is_session]);

  return (
    <BrowserRouter history={history}>
      {console.log(history)}
      <Routes>
        <Route path="/" element={<PostList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/write" element={<PostWrite />}></Route>
      </Routes>
      {isLogin && (
        <Button is_float={true} text="+">
          +
        </Button>
      )}
    </BrowserRouter>
  );
}

export default App;
