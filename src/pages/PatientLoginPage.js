import MainLoginForm from "./component/registration/MainLoginForm";
import PatientLogin from "./component/registration/PatientLogin";

const MainPatientLogin = () => {
    return (
        <div>
            <MainLoginForm GetForm={PatientLogin} />
        </div>
    );
}

export default MainPatientLogin;