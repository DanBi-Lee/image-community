const setCookie = (name, value, exp=2) => {
    const date = new Date();
    const expires = 1000 * 60 * 60 * 24 * exp;
    date.setTime(date.getTime() + expires);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()};`;
}

const getCookie = (name) => {
    const cookie = '; ' + document.cookie;
    const cookie_list = cookie.split(`; ${name}=`);
    if(cookie_list.length !== 2){
        return;
    }
    return cookie_list.pop().split(';').shift();
}

const deleteCookie = (name) => {
    const date = new Date('2000-01-01');
    document.cookie = `${name}=value; expires=${date.toUTCString}`;
}


export { setCookie, getCookie, deleteCookie };