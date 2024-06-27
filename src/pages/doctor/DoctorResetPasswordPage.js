import RegistrationBackground from "../component/registration/RegistrationBackground";
import ResetPassword from "../component/registration/ResetPassword";
import { getResetPasswordUrlAndNavigations } from "../component/registration/ResetPassword";

const DoctorResetPasswordPage = () => {
  const navigations = ["/DoctorSignIn"];

  getResetPasswordUrlAndNavigations("Enter Reset-password URL", navigations);

  return (
    <div>
      <RegistrationBackground GetForm={() => <ResetPassword />} />
    </div>
  );
};

export default DoctorResetPasswordPage;
