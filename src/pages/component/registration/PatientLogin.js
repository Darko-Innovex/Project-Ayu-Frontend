import React, {useEffect, useState} from "react";
import '../../../css/component/LoginFormStyle.css'
import { Link } from "react-router-dom";

const PatientLogin = () => {

    const [ nicNum , setNicNum ] = useState( null )
    const [ password , setPassword ] = useState( null )

    const handleNic = ( event ) =>{
        setNicNum( event.target.value )
    }

    const handlePassword = ( event ) =>{
        setPassword( event.target.value )
    }

    const handleSubmit = ( event ) => {
        event.preventDefault()
        const data = {
            nicNum : nicNum,
            password : password
        }
        fetch( " ENTER URL " , {
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
                setNicNum( null )
                setPassword( null )
            } )
            .catch( ( err ) => {
                console.log( err )
            } )
    }

    return (
        <div id="Form">
            <form>
                <div>
                    <h2>Sign In</h2>
                    <button>Sign Up</button>
                </div>
                <label htmlFor="">NIC</label>
                <input type="text" onChange={ handleNic } placeholder="Enter Your NIC Number" required/>
                <label htmlFor="">Password</label>
                <input type="password" onChange={ handlePassword } placeholder="Enter Password" required/>
                <p>By Sign Up , you agree to our <u>Terms & Conditions</u></p>
                <div>
                    <button type="submit" >Sign In</button>
                    <Link to="/">
                        <h2 className="ForgetPassword">Forget Password</h2>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default PatientLogin;