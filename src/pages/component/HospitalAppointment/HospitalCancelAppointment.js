import "../../../css/component/Appointment/CancelAppointment.css";

const HospitalCancelAppointment = ({ AppointmentData, cancel }) => {
  return (
    <div id="CancelAppointment">
      <div className="background">
        <div>
          <div>
            <div className="title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <path
                  d="M32.5 0C14.5395 0 0 14.5395 0 32.5C0 50.4605 14.5395 65 32.5 65C50.4605 65 65 50.4605 65 32.5C65 14.5395 50.4605 0 32.5 0ZM32.5 61.5789C16.4211 61.5789 3.42105 48.5789 3.42105 32.5C3.42105 16.4211 16.4211 3.42105 32.5 3.42105C48.5789 3.42105 61.5789 16.4211 61.5789 32.5C61.5789 48.5789 48.5789 61.5789 32.5 61.5789ZM34.8947 32.5L45.6711 21.7237C46.3553 21.0395 46.3553 20.0132 45.6711 19.3289C44.9868 18.6447 43.9605 18.6447 43.2763 19.3289L32.5 30.1053L21.7237 19.3289C21.0395 18.6447 20.0132 18.6447 19.3289 19.3289C18.6447 20.0132 18.6447 21.0395 19.3289 21.7237L30.1053 32.5L19.3289 43.2763C18.6447 43.9605 18.6447 44.9868 19.3289 45.6711C20.0132 46.3553 21.0395 46.3553 21.7237 45.6711L32.5 34.8947L43.2763 45.6711C43.9605 46.3553 44.9868 46.3553 45.6711 45.6711C46.3553 44.9868 46.3553 43.9605 45.6711 43.2763L34.8947 32.5Z"
                  fill="#0E9A66"
                />
              </svg>
              <div>
                <h1>ARE YOU SURE</h1>
                <h2>Do you want to cancel this appointment</h2>
              </div>
            </div>
            <div className="buttons">
              <button>Yes</button>
              <button onClick={cancel}>No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCancelAppointment;
