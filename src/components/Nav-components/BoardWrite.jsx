import React from "react";
import "../../assets/css/nav/BoardWrite.css";
import arrowleft from "../../assets/images/nav/arrow_left.png";

const BoardWrite = () => {
    return (
        <div className="write-container">
            <div className="write-header">
                <img src={arrowleft} alt="뒤로가기" className="header-left"/>
                <h2>글 쓰기</h2>
            </div>
            <div className="write-content">
                <input type="text" id="title" className="write-input" placeholder="제목"/>
                
                <textarea id="content" className="write-textarea" placeholder="내용"></textarea>
            </div>
            <button className="write-submit-btn"><p>올리기</p></button>
        </div>
    );
};

export default BoardWrite;