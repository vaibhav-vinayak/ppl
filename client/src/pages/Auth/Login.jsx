import useFormInput from "hooks/useFormInput";
import Checkbox from "components/form-control/Checkbox";
import Input from "components/form-control/Input";
import GoogleIcon from "assets/images/google.webp";
import FacebookIcon from "assets/images/facebook.webp";

const Login = () => {
  const email = useFormInput("");
  const password = useFormInput("");
  console.log("email", email, "  password", password);

  const login = () => {
    console.log("logging in...");
  };

  const loginWithGoogle = () => {
    console.log("logging in with Google...");
  };

  const loginWithFacebook = () => {
    console.log("logging in with Facebook...");
  };

  return (
    <div className="">
      <div className="offset-sm-3 col-md-6">
        <Input label="Email address" id="email" type="email" {...email} />
        <Input label="Password" id="password" type="password" {...password} />
        <Checkbox label="Remember Me" id="rememberMe" />
        <button type="button" className="btn btn-primary w-100" onClick={login}>
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
    </div>
  );
};

export default Login;
