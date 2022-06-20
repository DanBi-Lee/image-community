import { useSelector } from "react-redux";

const usePermit = (props) => {
  const is_login = useSelector((state) => state.user.user);
  const _session_key = `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  const isLogin = is_session && is_login;

  return { isLogin };
};

export default usePermit;
