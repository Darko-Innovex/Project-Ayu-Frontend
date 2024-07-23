const MedicineReportViewPopup = ({ data }) => {
  return (
    <div id="ReportData">
      <table>
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Dose</th>
            <th>Times Per Day</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.medicineName}</td>
              <td>{data.dose}</td>
              <td>{data.dosesPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineReportViewPopup;
