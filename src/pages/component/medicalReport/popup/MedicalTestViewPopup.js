const MedicalTestViewPopup = ({ data }) => {
  return (
    <div id="ReportData">
      <embed src={data} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default MedicalTestViewPopup;
