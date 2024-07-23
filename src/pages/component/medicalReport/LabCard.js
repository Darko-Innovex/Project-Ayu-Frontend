import PopupBackground, { setReportData } from "./popup/PopupBackground";
import { PdfToByteArray } from "../../../../src/utils/PdfToByteArray";

const LabCard = ({ data, showReport }) => {
  const onClickViewBtn = () => {
    console.log(data);
    setReportData(data);
    showReport();
  };
  return (
    <div className="labCard">
      <h1>{data.title}</h1>
      <h2>{data.place}</h2>
      <div>
        <h3>{data.date}</h3>
        <h3>{data.time}</h3>
      </div>
      <button onClick={onClickViewBtn}>View</button>
    </div>
  );
};

export default LabCard;
