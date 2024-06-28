import "../../../../css/component/medicalReport/AddReport.css";
import AddReportBackButton from "../Button/AddReportBackButton";

const AddReportPopup = ({ backOnAction }) => {
  return (
    <div id="AddReport">
      <div>
        <div>
          <h1>Add Report</h1>
          <AddReportBackButton buttonOnAction={backOnAction} />
        </div>
        <div>
          <textarea placeholder="Type Here ....."></textarea>
        </div>
        <button>Add Report</button>
      </div>
    </div>
  );
};

export default AddReportPopup;
