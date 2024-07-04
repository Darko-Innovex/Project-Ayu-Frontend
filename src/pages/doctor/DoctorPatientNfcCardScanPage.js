import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import ScanButton from "../component/dashboard/button/ScanButton";
import DoctorPatientDetailPage from "./DoctorPatientDetailPage";

const DoctorPatientNfcCardScanPage = () => {
  const Components = [HomeButton, ReviewButton, ScanButton];
  const [cardId, setCardId] = useState(null);
  const [port, setPort] = useState(null);

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
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            console.log("Reader closed");
            reader.releaseLock();
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
            navigate("/DoctorPatientDetailPage");
          }
        }
      };

      readLoop();
    }
  }, [port]);

  useEffect(() => {
    scanNFC();
  }, []);

  const scanNFC = () => {};

  const Paths = [
    "/DoctorDashboard",
    "/DoctorSignIn",
    "/DoctorPatientNfcCardScanPage",
  ];

  // const [showPatientDetail, setShowPatientDetail] = useState(false);
  const navigate = useNavigate();

  const handleScanPatientCardClick = () => {
    connect();
  };

  const logOutBtnOnAction = () => {
    navigate("/DoctorSignIn");
  };

  return (
    <div>
      <div id="DoctorDashboard">
        <div className="cir">
          <div></div>
          <div></div>
        </div>
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
            {/*{showPatientDetail && <DoctorPatientDetailPage />}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatientNfcCardScanPage;
