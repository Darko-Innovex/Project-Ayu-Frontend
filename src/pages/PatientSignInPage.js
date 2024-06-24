import MainLoginForm from "./component/registration/MainLoginForm";
import PatientSignIn from "./component/registration/PatientSignIn";
import {changeLoginURL} from "./component/registration/PatientSignIn";

const MainPatientLogin = () => {
    const navigations = [
        "PatientSignUp"
    ]
    return (
        <div>
            { changeLoginURL("Enter Sign-in URL" , navigations) }
            <MainLoginForm GetForm={PatientSignIn} />
        </div>
    );
}

export default MainPatientLogin;