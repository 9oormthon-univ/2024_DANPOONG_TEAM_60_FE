import React from "react";
import alarm from "../../assets/images/nav/alarm_img.png";
import "../../assets/css/nav/Alarm.css"

const Alarm = () => {
    return(
        <div className="alarm-container">
            <div className="alarm-header">

            </div>
            <img src={alarm} alt="alarm" className="alarm-image"/>
            <button className="alarm-btn">
                카카오톡으로 알림받기
            </button>
            <div className="alarm-info">앱으로 들어가지 않아도</div>
            <div className="alarm-info">카카오톡으로 함께가치의 알림을 받을 수 있어요.</div>
        </div>
    )
}

export default Alarm;