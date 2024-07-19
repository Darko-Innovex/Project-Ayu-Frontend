import "../../../css/component/medicalReport/DoctorNfcCardPinPopup.css";
import { useRef } from "react";

const DoctorNfcCardPinPopup = ({ closeBtn }) => {
  const fields = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInput = (e, index) => {
    const input = e.target;
    if (input.value.length === 1 && index < fields.length - 1) {
      fields[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value.length === 0 && index > 0) {
      fields[index - 1].current.focus();
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
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <div className="buttons">
            <button>Submit</button>
            <button onClick={closeBtn}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorNfcCardPinPopup;
