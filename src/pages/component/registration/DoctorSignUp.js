import React from "react";

const DoctorSignUp = () => {
    return (
        <div id="Form">
            <form action="">
                <div>
                    <h2>Sign Up</h2>
                    <button>Sign In</button>
                </div>
                <input type="text" placeholder="Name" required/>
                <input type="text" placeholder="NIC" required/>
                <input type="text" placeholder="Mobile" required/>
                <input type="text" placeholder="Email" required/>
                <div>
                    <input type="password" placeholder="Password" required/>
                    <input type="password" placeholder="Confirm Password" required/>
                </div>
                <p>By Sign Up , you agree to our <u>Terms & Conditions</u></p>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default DoctorSignUp