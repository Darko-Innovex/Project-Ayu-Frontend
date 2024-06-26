import PopupBackground, { setReportData } from "./popup/PopupBackground";

const LabCard = ({ data, showReport }) => {
  const onClickViewBtn = () => {
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
