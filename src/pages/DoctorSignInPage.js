import MainLoginForm from "./component/registration/MainLoginForm";
import PatientSignIn, {changeLoginURL} from "./component/registration/PatientSignIn";

const DoctorSignInPage = () => {
    const navigations = [
        "DoctorSignUp"
    ]
    return(
        <div>
            { changeLoginURL("Enter Sign-in URL" , navigations) }
            <MainLoginForm GetForm={ PatientSignIn } />
        </div>
    )
}

export default DoctorSignInPage