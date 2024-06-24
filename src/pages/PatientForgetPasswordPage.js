import MainLoginForm from "./component/registration/MainLoginForm";
import PatientForgetPassword from "./component/registration/PatientForgetPassword";
import {changeForgetPasswordURL} from "./component/registration/PatientForgetPassword";

const MainPatientForgetPassword = () => {
    return (
        <div>
            { changeForgetPasswordURL("Enter Forget Password URL") }
            <MainLoginForm GetForm={PatientForgetPassword} />
        </div>
    );
}

export default MainPatientForgetPassword