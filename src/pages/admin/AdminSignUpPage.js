import RegistrationBackground from "../component/registration/RegistrationBackground";
import AdminSignUp from "../component/registration/AdminSignUp";

const AdminSignUpPage = () => {
  return (
    <div>
      <RegistrationBackground GetForm={AdminSignUp} />
    </div>
  );
};

export default AdminSignUpPage;
