import RegistrationBackground from "../component/registration/RegistrationBackground";
import ResetPassword from "../component/registration/ResetPassword";
import { getResetPasswordUrlAndNavigations } from "../component/registration/ResetPassword";

const HospitalResetPasswordPage = () => {
  const navigations = ["/HospitalSignIn"];

  getResetPasswordUrlAndNavigations("Enter Reset-password URL", navigations);

  return (
    <div>
      <RegistrationBackground GetForm={() => <ResetPassword />} />
    </div>
  );
};

export default HospitalResetPasswordPage;
