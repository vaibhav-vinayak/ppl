import axios from "axios";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import GoogleIcon from "assets/images/google.webp";
import FacebookIcon from "assets/images/facebook.webp";
import Checkbox from "components/form-control/Checkbox";
import Input from "components/form-control/Input";
import useFormInput from "hooks/useFormInput";
import { login } from "constants/apiEndpoints";
import fire from "config/Firebase";
import {
  loginFailed,
  loginRequest,
  loginSuccess,
  selectAuth,
} from "./authSlice";

const Login = () => {
  const email = useFormInput("");
  const password = useFormInput("");
  const dispatch = useDispatch();
  const auth = getAuth(fire);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const { isLoading, error } = useSelector(selectAuth);

  const handleLoginClick = async () => {
    const formData = { email: email.value, password: password.value };
    try {
      dispatch(loginRequest());
      const { data } = await axios.post(login, formData);
      console.log("res...", data);
      dispatch(loginSuccess(data));
    } catch (err) {
      console.error(err.message);
      dispatch(loginFailed(err.message));
    }
  };

  const loginWithGoogle = async () => {
    console.log("logging in with Google...");
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      console.log("google res...", user.uid);
    } catch (err) {
      console.error("google err...", err.message);
    }
  };

  const loginWithFacebook = async () => {
    console.log("logging in with Facebook...");
    try {
      const { user } = await signInWithPopup(auth, facebookProvider);
      console.log("google res...", user);
    } catch (err) {
      console.error("google err...", err.message);
    }
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error.message}</div>
  ) : (
    <div className="offset-sm-3 col-md-6">
      <Input label="Email address" id="email" type="email" {...email} />
      <Input label="Password" id="password" type="password" {...password} />
      <Checkbox label="Remember Me" id="rememberMe" />
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={handleLoginClick}
      >
        Submit
      </button>
      <div className="position-relative my-4">
        <div className="my-4 border border-gray" />
        <div className="position-absolute top-50 start-50 translate-middle p-2 border-gray bg-light rounded-circle">
          or
        </div>
      </div>
      <div className="d-flex p-2 justify-content-center align-items-center gap-4">
        <div className="text-center">Sign in using:</div>
        <img
          onClick={loginWithGoogle}
          src={GoogleIcon}
          width={30}
          alt="google"
        />
        <img
          onClick={loginWithFacebook}
          src={FacebookIcon}
          width={30}
          alt="google"
        />
      </div>
    </div>
  );
};

export default Login;
