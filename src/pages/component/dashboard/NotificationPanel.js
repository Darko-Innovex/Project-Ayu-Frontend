import React, { useState } from "react";
import "../../../css/component/dashboard/NotificationPanel.css";
import warning from "../../../img/notiWarning.png";
import addMedical from "../../../img/AddMedicalNoti.png";
import bloodTest from "../../../img/bloodTestOnNoti.png";
import Notification from "./button/Notification";

const NotificationPanel = ({ hideNotification }) => {
  const data1 = {
    img: warning,
    title: "Upcoming appointments alert",
    time: "20 min ago",
    viewMore: false,
    status: "Unread",
  };
  const data2 = {
    img: addMedical,
    title: "Dr.Ashen added Your Medicine ddddddddd",
    time: "20 min ago",
    viewMore: true,
    status: "Unread",
  };
  const data3 = {
    img: bloodTest,
    title: "Blood Test Added",
    time: "1 hour ago",
    viewMore: true,
    status: "Read",
  };
  const data = [data1, data2, data3, data1, data2, data3];

  const [currentStatus, setCurrentStatus] = useState("All");
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (status, button) => {
    setCurrentStatus(status);
    setSelectedButton(button);
  };

  const filteredNotifications = data.filter((notification) => {
    if (currentStatus === "All") return true;
    return notification.status === currentStatus;
  });

  return (
    <div id="NotificationPanel">
      <div className="background" onClick={hideNotification}></div>
      <div className="panel">
        <div>
          <h1>Notification</h1>
          <h2>Make all as read</h2>
        </div>
        <div className="buttons">
          <button
            className={selectedButton === "All" ? "clicked" : "unclicked"}
            onClick={() => handleButtonClick("All", "button1")}
          >
            &nbsp;&nbsp;All&nbsp;&nbsp;
          </button>
          <button
            className={selectedButton === "Unread" ? "clicked" : "unclicked"}
            onClick={() => handleButtonClick("Unread", "button2")}
          >
            Unread
          </button>
          <button
            className={selectedButton === "Read" ? "clicked" : "unclicked"}
            onClick={() => handleButtonClick("Read", "button3")}
          >
            Read
          </button>
        </div>
        <div className="notificationList">
          {filteredNotifications.map((notification, index) => (
            <Notification key={index} data={notification} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
