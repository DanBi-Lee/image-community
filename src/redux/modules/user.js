import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, deleteCookie } from "../../shared/Cookie";

// 액션 타입
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// 액션 생성 함수
const logIn = createAction(LOG_IN, (user)=>({user}));
const logOut = createAction(LOG_OUT, ()=>({}));
const getUser = createAction(GET_USER, (user)=>({user}));

// initialState
const initialState = {
    user: null,
    is_login: false
};

// middleware actions
const loginAction = (user, navigate) => {
    return function (dispatch, getState){
        console.log(navigate);
        dispatch(logIn(user));
        if(navigate){
            navigate('/');
        }
    }
}

// 리듀서
export default handleActions({
    [LOG_IN] : (state, action) => 
        produce(state, (draft) => {
            setCookie("is_login", "successs");
            draft.user = action.payload.user;
            draft.is_login = true;
        }),
    [LOG_OUT] : (state, action) =>
        produce(state, (draft) => {
            deleteCookie("is_login");
            draft.user = null;
            draft.is_login = false;
        }),
    [GET_USER] : (state, action) => produce(state, (draft) => {})
}, initialState);

const actionsCreators = {
    logIn, getUser, logOut, loginAction
}

export { actionsCreators };