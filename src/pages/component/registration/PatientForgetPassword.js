import React, {useState} from "react";
import '../../../css/component/registration/RegistrationFormStyle.css'
import { useNavigate } from "react-router-dom";

var url = ""

export function changeForgetPasswordURL( getUrl ){
    url = getUrl;
}

const PatientForgetPassword = () => {

    const [ nic , setNic ] = useState( null )
    const [ opt , setOtp ] = useState( null )
    const navigate = useNavigate()

    const navigateToSignIn = () => {
        navigate('/');
    }

    const handleNic = ( event ) => {
        setNic( event.target.value )
    }

    const handleOtp = ( event ) => {
        setOtp( event.target.value )
    }

    const handleSubmit = ( event ) => {
        event.preventDefault()
        const data = {
            nic : nic,
            opt : opt
        }
        fetch( url , {
            method : " POST ",
            headers : {
                Accept: " application/json ",
                " Contend-Type ": " application/json "
            } ,
            body : JSON.stringify( data )
        } )
            .then( ( response ) => {
                return response.json()
            } )
            .then( () => {
                setNic( null )
                setOtp( null )
            } )
            .catch( ( err ) => {
                console.log( err )
            } )
    }

    return (
        <div id="Form">
            <form>
                <div>
                    <h2>Forget Password</h2>
                    <button onClick={ navigateToSignIn } >Sign In</button>
                </div>
                <label htmlFor="">Enter NIC Or Email</label>
                <input type="text" onChange={ handleNic } placeholder="Enter Your NIC Number" required />
                <div>
                    <div>
                        <label htmlFor="">Enter OTP</label>
                        <input type="text" onChange={ handleOtp } placeholder="Enter OTP" required />
                    </div>
                    <button className="GetOTP">Get OTP</button>
                </div>
                <p>By Sign Up , you agree to our <u>Terms & Conditions</u></p>
                <div>
                    <button>Confirm
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                        <path d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989592 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75L30 6.75V5.25L0 5.25L0 6.75Z" fill="#262626"/>
                    </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PatientForgetPassword;