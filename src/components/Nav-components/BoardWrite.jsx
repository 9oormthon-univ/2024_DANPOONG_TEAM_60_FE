import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/nav/BoardWrite.css";
import arrowleft from "../../assets/images/nav/arrow_left.png";

const BoardWrite = () => {
  const navigate = useNavigate();

  // 입력값 상태 관리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 로컬 스토리지에 게시물 저장 함수
  const savePostToLocalStorage = () => {
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPost = {
      id: existingPosts.length + 1, // 새로운 게시물 ID
      oauthId: "guest", // 작성자 ID (예: guest)
      title,
      content,
      viewCount: 0,
      commentCount: 0,
    };

    // 새 게시물을 배열 맨 앞에 추가
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  // 게시물 저장 및 이동 처리
  const handlePostSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    savePostToLocalStorage();
    navigate("/board"); // 게시판 페이지로 이동
  };

  return (
    <div className="write-container">
      <div className="write-header">
        <img
          src={arrowleft}
          alt="뒤로가기"
          className="header-left"
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1); // 히스토리 스택이 있는 경우 뒤로가기
            } else {
              navigate("/Main"); // 히스토리 스택이 없는 경우 기본 경로로 이동
            }
          }}
        />
        <h2>글 쓰기</h2>
      </div>
      <div className="write-content">
        <input
          type="text"
          id="title"
          className="write-input"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="content"
          className="write-textarea"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="write-submit-btn" onClick={handlePostSubmit}>
        <p>올리기</p>
      </button>
    </div>
  );
};

export default BoardWrite;
