import React from "react";
import "../../assets/css/nav/Board.css";
import likeIcon from "../../assets/images/nav/like_icon.png"; // 좋아요 아이콘 이미지
import commentIcon from "../../assets/images/nav/comment_icon.png"; // 댓글 아이콘 이미지

const Board = () => {
  const posts = [
    { id: 1, title: "단풍톤", text: "단풍단풍단풍단풍단풍", likes: 12, comments: 12 },
    { id: 2, title: "단풍톤", text: "단풍단풍단풍단풍단풍", likes: 12, comments: 12 },
    { id: 3, title: "단풍톤", text: "단풍단풍단풍단풍단풍", likes: 12, comments: 12 },
    { id: 4, title: "단풍톤", text: "단풍단풍단풍단풍단풍", likes: 12, comments: 12 },
  ];

  return (
    <div className="board-container">
      <div className="board-header">
        <h2>게시판</h2>
      </div>
      {posts.map((post) => (
        <div className="board-content" key={post.id}>
          <div className="board-content-title">{post.title}</div>
          <div className="board-content-text">{post.text}</div>
          <div className="reaction">
            <div className="reaction-item">
              <img src={likeIcon} alt="like" className="reaction-icon" />
              <p>{post.likes}</p>
            </div>
            <div className="reaction-item">
              <img src={commentIcon} alt="comment" className="reaction-icon" />
              <p>{post.comments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;