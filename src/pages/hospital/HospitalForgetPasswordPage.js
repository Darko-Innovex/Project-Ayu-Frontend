import RegistrationBackground from "../component/registration/RegistrationBackground";
import ForgetPassword from "../component/registration/ForgetPassword";
import { getForgetPasswordUrlAndNavigations } from "../component/registration/ForgetPassword";

const HospitalForgetPasswordPage = () => {
  const navigations = ["/HospitalSignIn", "/HospitalResetPassword"];

  getForgetPasswordUrlAndNavigations("Enter Forget Password URL", navigations);

  return (
    <div>
      <RegistrationBackground GetForm={() => <ForgetPassword isHospital />} />
    </div>
  );
};

export default HospitalForgetPasswordPage;
