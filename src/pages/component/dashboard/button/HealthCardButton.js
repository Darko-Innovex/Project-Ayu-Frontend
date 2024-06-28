import "../../../../css/component/dashboard/Buttons.css";

const HealthCardButton = () => {
  return (
    <div id="Button">
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 13.5H5M7 10.5H5" stroke="white" stroke-linecap="round" />
        <path
          d="M13 12C13 11.057 13 10.586 13.293 10.293C13.586 10 14.057 10 15 10C15.943 10 16.414 10 16.707 10.293C17 10.586 17 11.057 17 12C17 12.943 17 13.414 16.707 13.707C16.414 14 15.943 14 15 14C14.057 14 13.586 14 13.293 13.707C13 13.414 13 12.943 13 12Z"
          stroke="white"
        />
        <path
          d="M21 9C21 5.229 21 3.343 19.828 2.172C18.657 1 16.771 1 13 1H9C5.229 1 3.343 1 2.172 2.172C1 3.343 1 5.229 1 9C1 12.771 1 14.657 2.172 15.828C3.343 17 5.229 17 9 17H13C16.771 17 18.657 17 19.828 15.828C20.482 15.175 20.771 14.3 20.898 13M1 7H6M21 7H10"
          stroke="white"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default HealthCardButton;
