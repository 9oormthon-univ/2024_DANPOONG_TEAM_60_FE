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
                <label htmlFor="title" className="write-label">제목</label>
                <input type="text" id="title" className="write-input" placeholder="제목을 입력하세요"/>
                
                <label htmlFor="content" className="write-label">내용</label>
                <textarea id="content" className="write-textarea" placeholder="내용을 입력하세요"></textarea>
            </div>
            <button className="write-submit-btn">올리기</button>
        </div>
    );
};

export default BoardWrite;
