import RegistrationBackground from "../component/registration/RegistrationBackground";
import SignIn, {
  getSignInUrlAndNavigations,
} from "../component/registration/SignIn";

const AdminSignInPage = () => {
  const navigations = [
    "/AdminSignUp",
    "/AdminForgetPassword",
    "/AdminDashboard",
  ];

  getSignInUrlAndNavigations("Enter Sign-in URL", navigations);

  return (
    <div>
      <RegistrationBackground GetForm={() => <SignIn showSignUp={true} />} />
    </div>
  );
};

export default AdminSignInPage;
