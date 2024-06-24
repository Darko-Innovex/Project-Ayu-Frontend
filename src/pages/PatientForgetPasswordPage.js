import MainLoginForm from "./component/registration/MainLoginForm";
import PatientForgetPassword from "./component/registration/PatientForgetPassword";

const MainPatientForgetPassword = () => {
    return (
        <div>
            <MainLoginForm GetForm={PatientForgetPassword} />
        </div>
    );
}

export default MainPatientForgetPassword