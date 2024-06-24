import React, {useState} from "react";
import '../../../css/component/RegistrationFormStyle.css'
import {useNavigate} from "react-router-dom";

const PatientSignUp = () => {

    const [ firstName , setFirstName ] = useState( null )
    const [ lastName , setLastName ] = useState( null )
    const [ nicNum , setNicNum ] = useState( null )
    const [ dateOfBirth , setDateOfBirth ] = useState( null )
    const [ mobileNum , setMobile ] = useState( null )
    const [ bloodType , setBloodType ] = useState( null )
    const [ mail , setMail ] = useState( null )
    const [ password , setPassword ] = useState( null )
    const [ confirmPassword , setConfirmPassword ] = useState( null )
    const navigate = useNavigate();

    const navigateToSignIn = () => {
        navigate( "/")
    }

    const handleFistName = ( event ) => {
        setFirstName( event.target.value )
    }

    const handleLastName = ( event ) => {
        setLastName( event.target.value )
    }

    const handleNicNum = ( event ) => {
        setLastName( event.target.value )
    }

    const handleDateOfBirth = ( event ) => {
        setLastName( event.target.value )
    }

    const handleMobileNum = ( event ) => {
        setLastName( event.target.value )
    }

    const handleBloodType = ( event ) => {
        setLastName( event.target.value )
    }

    const handleMail = ( event ) => {
        setLastName( event.target.value )
    }

    const handlePassword = ( event ) => {
        setLastName( event.target.value )
    }

    const handleConfirmPassword = ( event ) => {
        setLastName( event.target.value )
    }

    const handleSubmit = ( event ) => {
        event.preventDefault()
        const data = {
            firstName : firstName,
            lastName : lastName,
            nicNum : nicNum,
            dateOfBirth : dateOfBirth,
            mobileNum : mobileNum,
            bloodType : bloodType,
            mail : mail,
            password : password,
            confirmPassword : confirmPassword
        }
        fetch( " ENTER URL " , {
            method : " POST ",
            headers : {
                Accept : " application/json ",
                " Contend-Type ": " application/json "
            } ,
            body : JSON.stringify( data )
        } )
            .then( ( response ) => {
                return response.json()
            } )
            .then( () => {
                setFirstName( null )
                setLastName( null )
                setNicNum( null )
                setDateOfBirth( null )
                setMobile( null )
                setBloodType( null )
                setMail( null )
                setPassword( null )
                setConfirmPassword( null )
            } )
            .catch( ( err ) => {
                console.log( err )
            } )
    }

    return (
        <div id="Form">
            <form action="">
                <div>
                    <h2>Sign Up</h2>
                    <button onClick={ navigateToSignIn } >Sign In</button>
                </div>
                <div>
                    <input type="text" onChange={ handleFistName } placeholder="First Name" required/>
                    <input type="text" onChange={ handleLastName } placeholder="Last Name" required/>
                </div>
                <div>
                    <input type="text" onChange={ handleNicNum } placeholder="NIC"/>
                    <input type="date" onChange={ handleDateOfBirth } placeholder="Date of Birth" required/>
                </div>
                <div>
                    <input type="number" onChange={ handleMobileNum } placeholder="Mobile Number" required/>
                    <input type="text" onChange={ handleBloodType } placeholder="Blood Type" required/>
                </div>
                <input type="email" onChange={ handleMail } placeholder="Email" required/>
                <div>
                    <input type="password" onChange={ handlePassword } placeholder="Password" required/>
                    <input type="password" onChange={ handleConfirmPassword } placeholder="Confirm Password" required/>
                </div>
                <p>By Sign Up , you agree to our <u>Terms & Conditions</u></p>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default PatientSignUp;