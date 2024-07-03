const Notification = ({ data }) => {
  const SetView = () => {
    if (data.viewMore === true) {
      return (
        <svg
          className="viewButton"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M13.0343 34.5522C13.6852 35.203 14.7404 35.203 15.3913 34.5522L26.4654 23.478C28.4176 21.5259 28.4181 18.3612 26.4667 16.4083L15.5162 5.44934C14.8654 4.79846 13.8101 4.79846 13.1592 5.44934C12.5083 6.10021 12.5083 7.15549 13.1592 7.80636L24.1126 18.7597C24.7636 19.4107 24.7636 20.4659 24.1126 21.1167L13.0343 32.195C12.3834 32.846 12.3834 33.9012 13.0343 34.5522Z"
            fill="#262626"
            fill-opacity="0.8"
          />
        </svg>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="notificationCard">
      <div className="cardData">
        <img src={data.img} alt="" />
        <div>
          <h1>{data.title}</h1>
          <h2>{data.time}</h2>
        </div>
      </div>
      <SetView />
    </div>
  );
};

export default Notification;
