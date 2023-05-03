const { REACT_APP_BACKEND_URL } = process.env;

const authUrls = REACT_APP_BACKEND_URL + "/auth";

export const login = authUrls + "/login";
export const signup = authUrls + "/signup";
