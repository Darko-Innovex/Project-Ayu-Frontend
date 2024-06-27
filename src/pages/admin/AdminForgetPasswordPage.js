import RegistrationBackground from "../component/registration/RegistrationBackground";
import ForgetPassword from "../component/registration/ForgetPassword";
import { getForgetPasswordUrlAndNavigations } from "../component/registration/ForgetPassword";

const AdminForgetPasswordPage = () => {
  const navigations = ["/AdminSignIn", "/AdminResetPassword"];

  getForgetPasswordUrlAndNavigations("Enter Forget Password URL", navigations);

  return (
    <div>
      <RegistrationBackground GetForm={ForgetPassword} />
    </div>
  );
};

export default AdminForgetPasswordPage;
