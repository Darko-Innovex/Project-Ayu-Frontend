import RegistrationBackground from "../component/registration/RegistrationBackground";
import SignIn from "../component/registration/SignIn";
import { getSignInUrlAndNavigations } from "../component/registration/SignIn";

const SignInPage = () => {
  const navigations = ["/PatientSignUp", "/PatientForgetPassword"];

  getSignInUrlAndNavigations(`http://localhost:8080/auth/signIn`, navigations);

  return (
    <div>
      <RegistrationBackground GetForm={SignIn} />
    </div>
  );
};

export default SignInPage;
