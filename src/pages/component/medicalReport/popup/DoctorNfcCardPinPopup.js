import "../../../../css/component/medicalReport/DoctorNfcCardPinPopup.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorNfcCardPinPopup = ({ closeBtn, index }) => {
  const fields = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [pin, setPin] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleInput = (e, index) => {
    const input = e.target;
    const newPin = [...pin];
    newPin[index] = input.value;
    setPin(newPin);

    if (input.value.length === 1 && index < fields.length - 1) {
      fields[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value.length === 0 && index > 0) {
      fields[index - 1].current.focus();
    }
  };

  const handleSubmit = async () => {
    const pinValue = pin.join("");

    try {
      const response = await axios.get(
        `http://localhost:8080/health-card/config`,
        {
          params: {
            pinNo: index,
            password: pinValue,
          },
        },
      );

      if (response.status === 200) {
        navigate(`/DoctorPatientDetailPage/${response.data}`);
      }
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  return (
    <div id="DoctorNfcCardPinPopup">
      <div className="background">
        <div>
          <h1>ENTER PIN</h1>
          <h2>Enter your health card PIN</h2>
          <div className="code">
            {fields.map((field, index) => (
              <input
                key={index}
                ref={field}
                type="text"
                maxLength="1"
                value={pin[index]}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <div className="buttons">
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={closeBtn}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorNfcCardPinPopup;
