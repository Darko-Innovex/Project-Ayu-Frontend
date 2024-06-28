import RegistrationBackground from "../component/registration/RegistrationBackground";
import SignIn, {
  getSignInUrlAndNavigations,
} from "../component/registration/SignIn";

const HospitalSignInPage = () => {
  const navigations = ["", "/HospitalForgetPassword", "/HospitalDashboard"];

  getSignInUrlAndNavigations("Enter Sign-in URL", navigations);

  return (
    <div>
      <RegistrationBackground
        GetForm={() => <SignIn showSignUp={false} isHospital />}
      />
    </div>
  );
};

export default HospitalSignInPage;
