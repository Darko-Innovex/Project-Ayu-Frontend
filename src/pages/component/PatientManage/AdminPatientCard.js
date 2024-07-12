import image from "../../../img/Young bearded man with striped shirt.png";
import "../../../css/component/AdminPatientManage/PatientCard.css";

const AdminPatientCard = ({ editDetail, data, viewDetail }) => {
  const EditPatientDetailOnClick = () => {
    editDetail(data);
  };

  const ViewPatientDetailOnClick = () => {
    viewDetail(data);
  };

  const DeleteCardOnClick = () => {
    // deleteDetail(data);
  };

  return (
    <div id="AdminPatientCard">
      <div>
        <img src={image} alt="" />
        <button onClick={DeleteCardOnClick} className="deleteIcon">
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1664 5.44012L10.9144 12.8647C10.8929 13.5006 10.6177 14.1033 10.1471 14.5449C9.67655 14.9865 9.04769 15.2322 8.39401 15.23H3.60536C2.9521 15.2323 2.3236 14.9868 1.85311 14.5458C1.38262 14.1047 1.10712 13.5026 1.08501 12.8671L0.832975 5.44012C0.82746 5.27747 0.888555 5.11936 1.00282 5.00056C1.11708 4.88176 1.27516 4.812 1.44227 4.80663C1.60938 4.80127 1.77183 4.86073 1.8939 4.97194C2.01596 5.08315 2.08763 5.237 2.09315 5.39964L2.34518 12.8261C2.35773 13.1431 2.49602 13.4431 2.731 13.663C2.96598 13.8828 3.27938 14.0056 3.60536 14.0053H8.39401C8.72041 14.0055 9.03417 13.8825 9.26922 13.6621C9.50427 13.4417 9.64227 13.1411 9.65419 12.8236L9.90622 5.39964C9.91174 5.237 9.98341 5.08315 10.1055 4.97194C10.2275 4.86073 10.39 4.80127 10.5571 4.80663C10.7242 4.812 10.8823 4.88176 10.9965 5.00056C11.1108 5.11936 11.1719 5.27747 11.1664 5.44012ZM12 2.96935C12 3.13199 11.9336 3.28797 11.8155 3.40298C11.6973 3.51798 11.537 3.58259 11.3699 3.58259H0.630087C0.462977 3.58259 0.302712 3.51798 0.184548 3.40298C0.0663838 3.28797 0 3.13199 0 2.96935C0 2.8067 0.0663838 2.65072 0.184548 2.53572C0.302712 2.42071 0.462977 2.3561 0.630087 2.3561H2.58336C2.783 2.35662 2.9757 2.28484 3.12396 2.15471C3.27222 2.02458 3.36543 1.84542 3.38546 1.65209C3.43195 1.19859 3.65026 0.778174 3.99783 0.472763C4.34541 0.167351 4.79736 -0.00117946 5.26563 6.21395e-06H6.73374C7.20201 -0.00117946 7.65396 0.167351 8.00154 0.472763C8.34911 0.778174 8.56742 1.19859 8.61391 1.65209C8.63394 1.84542 8.72715 2.02458 8.87541 2.15471C9.02367 2.28484 9.21637 2.35662 9.41602 2.3561H11.3693C11.5364 2.3561 11.6967 2.42071 11.8148 2.53572C11.933 2.65072 11.9994 2.8067 11.9994 2.96935H12ZM4.47929 2.3561H7.52134C7.43855 2.17197 7.38439 1.97686 7.36067 1.77719C7.34506 1.62603 7.27236 1.48589 7.15665 1.38393C7.04094 1.28196 6.89046 1.22542 6.73437 1.22527H5.26626C5.11017 1.22542 4.95969 1.28196 4.84398 1.38393C4.72827 1.48589 4.65557 1.62603 4.63996 1.77719C4.61603 1.97689 4.5623 2.172 4.47929 2.3561ZM5.11378 11.6474V6.4256C5.11378 6.26296 5.0474 6.10698 4.92923 5.99197C4.81107 5.87697 4.65081 5.81236 4.4837 5.81236C4.31659 5.81236 4.15632 5.87697 4.03816 5.99197C3.91999 6.10698 3.85361 6.26296 3.85361 6.4256V11.6499C3.85361 11.8125 3.91999 11.9685 4.03816 12.0835C4.15632 12.1985 4.31659 12.2631 4.4837 12.2631C4.65081 12.2631 4.81107 12.1985 4.92923 12.0835C5.0474 11.9685 5.11378 11.8125 5.11378 11.6499V11.6474ZM8.14702 11.6474V6.4256C8.14702 6.26296 8.08064 6.10698 7.96247 5.99197C7.84431 5.87697 7.68404 5.81236 7.51693 5.81236C7.34982 5.81236 7.18956 5.87697 7.0714 5.99197C6.95323 6.10698 6.88685 6.26296 6.88685 6.4256V11.6499C6.88685 11.8125 6.95323 11.9685 7.0714 12.0835C7.18956 12.1985 7.34982 12.2631 7.51693 12.2631C7.68404 12.2631 7.84431 12.1985 7.96247 12.0835C8.08064 11.9685 8.14702 11.8125 8.14702 11.6499V11.6474Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <h1>1423 123 152 </h1>
      <h2>Mr. Gayanuka Bulegoda</h2>
      <h2>2024 / 02 / 12</h2>
      <div className="buttons">
        <button onClick={ViewPatientDetailOnClick} className="viewButton">
          View
        </button>
        <button onClick={EditPatientDetailOnClick} className="editButton">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5544 3.72931L3.94371 10.3409C3.35337 10.9369 1.58791 11.2098 1.18692 10.8143C0.785933 10.4189 1.06997 8.65323 1.66031 8.05723L8.27105 1.44562C8.5763 1.15487 8.98308 0.994984 9.40456 1.00012C9.8261 1.00526 10.2289 1.17501 10.5269 1.47312C10.825 1.77122 10.9947 2.17407 10.9999 2.59562C11.005 3.01718 10.8452 3.42403 10.5544 3.72931Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminPatientCard;
