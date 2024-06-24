import PatientSignUp from "./component/registration/PatientSignUp";
import MainLoginForm from "./component/registration/MainLoginForm";

const MainPatientSignUp = () => {
  return (
    <div>
        <MainLoginForm GetForm={PatientSignUp} />
    </div>
  );
};

export default MainPatientSignUp;