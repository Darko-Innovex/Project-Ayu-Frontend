import nfc_image from '../../../img/nfc.png'
import sideLines from '../../../img/sideLines.png'
import logo from '../../../img/loginFormLogo.png'
import buttonLine from '../../../img/buttonLine.png'
import '../../../css/component/MainLoginForm.css'

const MainLoginForm = ({GetForm}) => {
    return(
        <div id="MainForm">
            <div className="container">
                <div className="cir">
                        <img src={ nfc_image } alt="" srcset="" />
                        <div></div>
                        <div></div>
                </div>
                <img className='logo' src={ logo } alt="" />
                <div className="subContainer">
                    <div>
                        <div>
                            <img src={ sideLines } alt="" />
                            <div className='subText'>
                                <h3>10</h3>
                                <p>Years <br/> Excellence In Health</p>
                            </div>
                        </div>
                        <button className='learnMore'>
                            <span>Learn More</span>
                            <img src={ buttonLine } alt="" srcset="" />
                        </button>
                    </div>
                    <div>
                        <GetForm />   
                    </div>
                </div>
                <div>
                    <h2>Terms & Condition <span>|</span> Privacy Policy</h2>
                    <div>
                        <div>
                            <div>
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <h2>Facebook</h2>
                        </div>
                        <div>
                            <div>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <h2>Instagram</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLoginForm;