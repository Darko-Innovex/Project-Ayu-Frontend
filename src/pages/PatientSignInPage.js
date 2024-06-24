import RegistrationBackground from "./component/registration/RegistrationBackground";
import SignIn from "./component/registration/SignIn";
import { getSignInUrlAndNavigations } from "./component/registration/SignIn";

const PatientSignInPage = () => {
  const navigations = ["/PatientSignUp", "/PatientForgetPassword"];

  getSignInUrlAndNavigations("Enter Sign-in URL", navigations);

  return (
    <div>
      <RegistrationBackground GetForm={() => <SignIn showSignUp={true} />} />
    </div>
  );
};

export default PatientSignInPage;
