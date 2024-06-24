import MainLoginForm from "./component/registration/MainLoginForm";
import PatientSignIn from "./component/registration/PatientSignIn";

const MainPatientLogin = () => {
    return (
        <div>
            <MainLoginForm GetForm={PatientSignIn} />
        </div>
    );
}

export default MainPatientLogin;