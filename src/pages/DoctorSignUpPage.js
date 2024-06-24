import DoctorSignUp from "./component/registration/DoctorSignUp";
import MainLoginForm from "./component/registration/MainLoginForm";

const DoctorSignUpPage = () =>{
    return (
        <div>
            <MainLoginForm GetForm={ DoctorSignUp } />
        </div>
    )
}

export default DoctorSignUpPage