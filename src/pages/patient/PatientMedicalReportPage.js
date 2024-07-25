import { useEffect, useState } from "react";
import "../../css/PatientMediReport.css";
import Navbar from "../component/dashboard/Navbar";
import HomeButton from "../component/dashboard/button/HomeButton";
import AppointmentButton from "../component/dashboard/button/AppointmentButton";
import ReportButton from "../component/dashboard/button/ReportButton";
import ReviewButton from "../component/dashboard/button/ReviewButton";
import Search from "../component/medicalReport/Search";
import LabCard from "../component/medicalReport/LabCard";
import OldCard from "../component/medicalReport/OldCard";
import SearchFilter from "../component/medicalReport/SearchFilter";
import PopupBackground from "../component/medicalReport/popup/PopupBackground";
import labReport from "../../../src/img/a-visual-guide-chart-showing-blood-chemistry-test-interpretation 2.pdf";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PatientMedicalReportPage = () => {
  const [labReportFilter, setLabReportFilter] = useState(false);
  const [oldReportFilter, setOldReportFilter] = useState(false);
  const [reportViewPopup, setReportViewPopup] = useState(false);

  const [appointments, setAppointments] = useState([]);
  const [labReports, setLabReports] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [regularDrugs, setRegularDrugs] = useState([]);
  const navigate = useNavigate(null);
  const { userId } = useParams();

  const Components = [HomeButton, AppointmentButton, ReportButton];

  const Paths = [
    `/PatientDashboard/${userId}`,
    `/PatientAppointment/${userId}`,
    `/PatientMedicalReport/${userId}`,
  ];

  const sowAndHideLabReportFilter = () => {
    setLabReportFilter(!labReportFilter);
  };

  const showAndHideOldReportFilter = () => {
    setOldReportFilter(!oldReportFilter);
  };

  const showAndHideReportViesPopUp = () => {
    setReportViewPopup(!reportViewPopup);
  };

  const logOutBtnOnAction = () => {
    navigate("/");
  };

  let data = {
    title: "Blood Test",
    place: "Lanka Hospital Matara",
    date: "2024 / 05 / 25",
    time: "05 : 36 : 52 PM",
    report: labReport,
    reportType: "pdf",
  };

  let data1 = {
    title: "Blood Test",
    place: "Lanka Hospital Matara",
    date: "2024 / 05 / 25",
    time: "05 : 36 : 52 PM",
    report:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
      "        tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit\n" +
      "        aliquet sagittis id consectetur purus ut. Dui vivamus arcu felis\n" +
      "        bibendum ut tristique. Pellentesque diam volutpat commodo sed egestas\n" +
      "        egestas fringilla phasellus. Et egestas quis ipsum suspendisse.\n" +
      "        Consectetur lorem donec massa sapien faucibus et molestie ac. At\n" +
      "        volutpat diam ut venenatis tellus in. Vel facilisis volutpat est velit\n" +
      "        egestas dui. Sit amet commodo nulla facilisi nullam vehicula ipsum a\n" +
      "        arcu. Risus ultricies tristique nulla aliquet enim tortor at auctor.\n" +
      "        Elementum curabitur vitae nunc sed velit dignissim sodales. Sed enim ut\n" +
      "        sem viverra aliquet eget.",
    reportType: "text",
  };

  let data2 = {
    title: "Blood Test",
    place: "Lanka Hospital Matara",
    date: "2024 / 05 / 25",
    time: "05 : 36 : 52 PM",
    report: labReport,
    reportType: "Table",
  };

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const data = {
          page: 0,
          count: 6,
        };

        const response = await axios.get(
          `http://localhost:8080/patient/${userId}/appointment`,
          {
            params: data,
          },
        );
        setAppointments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getAllergies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/patient/${userId}/allergies`,
        );
        setAllergies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getRegularDrugs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/patient/${userId}/drug_list`,
        );
        setRegularDrugs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getLabReports = async () => {
      try {
        const data = {
          page: 0,
          count: 6,
        };

        const response = await axios.get(
          `http://localhost:8080/patient/${userId}/lab_reports`,
          {
            params: data,
          },
        );
        setLabReports(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getLabReports().then((r) => console.log(r));
    getAppointments().then((r) => console.log(r));
    getAllergies().then((r) => console.log(r));
    getRegularDrugs().then((r) => console.log(r));
  }, []);

  const calculateAge = (dob) => {
    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();

    // If the birth month hasn't occurred yet this year, or if it's the birth month but the birth date hasn't occurred yet this month, subtract a year.
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dobDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div id="dashboard">
      <div className="cir">
        <div></div>
        <div></div>
      </div>
      {/* ---------------------- Report View
      -------------------------------------------- */}
      {reportViewPopup && (
        <PopupBackground hideReport={showAndHideReportViesPopUp} />
      )}
      {/*------------------------ Filter View
      ---------------------------------------------*/}
      {labReportFilter && (
        <SearchFilter
          getClassName={"labReportFilter"}
          hideFilter={sowAndHideLabReportFilter}
        />
      )}
      {oldReportFilter && (
        <SearchFilter
          getClassName={"oldReportFilter"}
          hideFilter={showAndHideOldReportFilter}
        />
      )}
      <div className="container">
        <Navbar
          components={Components}
          Paths={Paths}
          LogOut={logOutBtnOnAction}
        />
        <div id="PatientMediReport">
          <div>
            <div className="labReport">
              <div className="title">
                <h1>Lab Reports</h1>
                <Search showFilter={sowAndHideLabReportFilter} />
              </div>
              <div className="cardSet">
                {labReports &&
                  labReports.map((labReport) => (
                    <LabCard
                      data={labReport}
                      showReport={showAndHideReportViesPopUp}
                    />
                  ))}
              </div>
            </div>
            <div className="OldMediReport">
              <div className="title">
                <h1>Old Medical Reports & Medicines</h1>
                <Search showFilter={showAndHideOldReportFilter} />
              </div>
              <div className="cardSet">
                {appointments &&
                  appointments.map((appointment) => (
                    <OldCard
                      Appointment={appointment}
                      hideReport={showAndHideReportViesPopUp}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div>
            <div className="Allergies">
              <h1>Allergies</h1>
              <div className="list">
                {allergies &&
                  allergies.map((allergy) => (
                    <h2 key={allergy.id}>{allergy.allergy}</h2>
                  ))}
              </div>
            </div>
            <div className="Allergies">
              <h1>Regular drug list</h1>
              <div className="list">
                {regularDrugs &&
                  regularDrugs.map((drug) => (
                    <h2 key={drug.id}>{drug.medicineName}</h2>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientMedicalReportPage;
