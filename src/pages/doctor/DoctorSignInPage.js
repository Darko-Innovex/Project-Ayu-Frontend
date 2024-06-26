import RegistrationBackground from "../component/registration/RegistrationBackground";
import SignIn, {
  getSignInUrlAndNavigations,
} from "../component/registration/SignIn";

const DoctorSignInPage = () => {
  const navigations = ["", "/DoctorForgetPassword"];

  getSignInUrlAndNavigations("Enter Sign-in URL", navigations);

  return (
    <div>
      <RegistrationBackground GetForm={() => <SignIn showSignUp={false} />} />
    </div>
  );
};

export default DoctorSignInPage;
