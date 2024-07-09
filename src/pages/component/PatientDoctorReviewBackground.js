import "../../css/component/PatientDoctorReviewBackground.css";
import { useEffect, useState } from "react";

const PatientDoctorReviewBackground = ({ data, backBrnAction }) => {
  const [lastLine, setLastLine] = useState(null);

  useEffect(() => {
    if (data.ReviewType === "addReview") {
      setLastLine(<IfAddReview />);
    }
  }, [data.ReviewType]);

  return (
    <div id="PatientDoctorReviewBackground">
      <div className="background">
        <div id="PatientDoctorReviewPopup">
          <div>
            <h1>Add Review</h1>
            <button onClick={backBrnAction}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="16"
                viewBox="0 0 41 16"
                fill="none"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9L41 9V7L1 7L1 9Z"
                  fill="#262626"
                />
              </svg>
              Back
            </button>
          </div>
          <div>
            <div>
              <h3>Doctor name</h3>
              <h2>Mr. Gayanuka Bulegoda</h2>
            </div>
            <div>
              <h3>Specialty</h3>
              <h2>Cardiologist</h2>
            </div>
          </div>
          <h3>Review</h3>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          {lastLine}
        </div>
      </div>
    </div>
  );
};

// const returnStarCount = (starCount, star) => {
//   return Array.from({ length: starCount }, (_, index) => (
//     <span key={index}>{star}</span>
//   ));
// };

const IfAddReview = () => {
  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.091 2.18854C11.379 1.51104 11.5231 1.17229 11.7236 1.06797C11.8978 0.977342 12.1023 0.977342 12.2764 1.06797C12.477 1.17229 12.621 1.51104 12.909 2.18854L15.2029 7.58493C15.2881 7.78521 15.3307 7.88536 15.3966 7.96204C15.4548 8.0299 15.5261 8.08418 15.6056 8.12133C15.6955 8.16333 15.7995 8.17484 16.0075 8.19785L21.6108 8.81799C22.3142 8.89584 22.6659 8.93477 22.8225 9.1025C22.9585 9.2482 23.0217 9.45221 22.9933 9.65393C22.9607 9.88612 22.698 10.1344 22.1726 10.631L17.9869 14.5863C17.8317 14.733 17.7539 14.8065 17.7048 14.8958C17.6613 14.975 17.634 15.0628 17.6249 15.1536C17.6146 15.2562 17.6363 15.3635 17.6797 15.5781L18.8488 21.3576C18.9956 22.0833 19.0689 22.4461 18.9652 22.654C18.875 22.8348 18.7096 22.9608 18.5179 22.9949C18.2972 23.034 17.9908 22.8488 17.378 22.4782L12.4972 19.5262C12.3161 19.4166 12.2255 19.362 12.1293 19.3405C12.044 19.3215 11.956 19.3215 11.8708 19.3405C11.7745 19.362 11.6839 19.4166 11.5028 19.5262L6.62205 22.4782C6.00929 22.8488 5.70291 23.034 5.48221 22.9949C5.2905 22.9608 5.125 22.8348 5.03489 22.654C4.93115 22.4461 5.00454 22.0833 5.15131 21.3576L6.32036 15.5781C6.36375 15.3635 6.38544 15.2562 6.37514 15.1536C6.36602 15.0628 6.33882 14.975 6.29528 14.8958C6.24608 14.8065 6.16841 14.733 6.01307 14.5863L1.82754 10.631C1.30207 10.1344 1.03933 9.88612 1.00666 9.65393C0.978297 9.45221 1.0415 9.2482 1.17752 9.1025C1.33411 8.93477 1.68585 8.89584 2.38932 8.81799L7.99258 8.19785C8.20055 8.17484 8.30452 8.16333 8.39444 8.12133C8.47399 8.08418 8.54522 8.0299 8.60352 7.96204C8.66938 7.88536 8.71195 7.78521 8.7971 7.58493L11.091 2.18854Z"
        fill="white"
        stroke="#262626"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  // const stars = returnStarCount(3, star);
  const stars = [star, star, star, star, star];

  return (
    <div className="lastLine">
      <div>
        <h3>Rate This Doctor</h3>
        <div>{stars}</div>
      </div>
      <button>Add Review</button>
    </div>
  );
};

export default PatientDoctorReviewBackground;
