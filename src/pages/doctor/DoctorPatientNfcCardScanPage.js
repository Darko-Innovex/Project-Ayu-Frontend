import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import ScanButton from "../component/dashboard/button/ScanButton";
import axios from "axios";
import DoctorNfcCardPinPopup from "../component/medicalReport/popup/DoctorNfcCardPinPopup";
import DoctorSelectSchedulePopup from "../component/medicalReport/popup/DoctorSelectSchedulePopup";

const DoctorPatientNfcCardScanPage = () => {
  const Components = [HomeButton, ScanButton];
  const [cardId, setCardId] = useState(null);
  const [patient, setPatient] = useState(null);
  const [port, setPort] = useState(null);
  const { doctorId } = useParams();
  const [showNfcPinPopup, setShowNfcPinPopup] = useState(false);
  const [doctorSchedule, setDoctorSchedule] = useState(false);

  const navigate = useNavigate();

  const connect = async () => {
    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      setPort(port);
      console.log("Connected to port:", port);
    } catch (error) {
      console.error("Error connecting to port:", error);
    }
  };

  let original = "";

  useEffect(() => {
    if (port) {
      const reader = port.readable.getReader();
      const textDecoder = new TextDecoder();

      const readLoop = async () => {
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              console.log("Reader closed");
              break;
            }
            if (value) {
              const decodedValue = textDecoder.decode(value, { stream: true });

              if (decodedValue.includes("$")) {
                let splitedarray = decodedValue.split("$");
                original += splitedarray.at(1);
              }
              if (!decodedValue.includes("$") && !decodedValue.includes("#")) {
                original += decodedValue;
              }
              if (decodedValue.includes("#")) {
                let splitedarray = decodedValue.split("#");
                original += splitedarray.at(0);
                console.log(original);
                setCardId(original);
                original = "";
              }
            }
          }
        } catch (error) {
          console.error("Error in readLoop:", error);
        } finally {
          reader.releaseLock();
        }
      };

      readLoop();

      return () => {
        reader.cancel();
        reader.releaseLock();
      };
    }
  }, [port]);

  useEffect(() => {
    const fetchPatient = async () => {
      if (cardId !== null) {
        handelSubmitPopup();
      }
    };

    fetchPatient();
  }, [cardId]);

  const Paths = [
    `/DoctorDashboard/${doctorId}`,
    `/DoctorPatientNfcCardScanPage/${doctorId}`,
  ];

  const handleScanPatientCardClick = () => {
    connect();
    //navigate(`/DoctorPatientDetailPage/123451`);
  };

  const logOutBtnOnAction = () => {
    navigate("/DoctorSignIn");
  };

  const handelSubmitPopup = () => {
    setShowNfcPinPopup(!showNfcPinPopup);
  };

  const handelDoctorSchedule = () => {
    setDoctorSchedule(!doctorSchedule);
  };

  useEffect(() => {
    const setSchedule = localStorage.getItem("schedule");
    if (setSchedule === "false") {
      localStorage.setItem("schedule", "true");
      handelDoctorSchedule();
    }
  }, []);

  return (
    <div>
      <div id="DoctorDashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>
        {showNfcPinPopup && (
          <DoctorNfcCardPinPopup closeBtn={handelSubmitPopup} index={cardId} />
        )}

        {doctorSchedule && (
          <DoctorSelectSchedulePopup closeAction={handelDoctorSchedule} />
        )}

        <div className="container">
          <Navbar
            components={Components}
            Paths={Paths}
            LogOut={logOutBtnOnAction}
          />
          <div className="nfcScan">
            <h1>Patient Details</h1>
            <div>
              <div onClick={handleScanPatientCardClick}>Scan Patient Card</div>
            </div>
            {/* {showPatientDetail && <DoctorPatientDetailPage />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatientNfcCardScanPage;
