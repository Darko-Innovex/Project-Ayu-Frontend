import PatientSignUp from "./component/registration/PatientSignUp";
import RegistrationBackground from "./component/registration/RegistrationBackground";

const MainPatientSignUp = () => {
  return (
    <div>
      <RegistrationBackground GetForm={PatientSignUp} />
    </div>
  );
};

export default MainPatientSignUp;
