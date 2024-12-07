import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/nav/Board.css";
import arrowleft from "../../assets/images/nav/arrow_left.png";
import likeIcon from "../../assets/images/nav/like_icon.png";
import commentIcon from "../../assets/images/nav/comment_icon.png";
import pen from "../../assets/images/nav/pencil.png";

const Board = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="board-container">
      <div className="write-header">
        <img
          src={arrowleft}
          alt="뒤로가기"
          className="board-arrow-left"
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
        />
        <p>게시판</p>
      </div>
      <div className="board-content-container">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div
              className="board-content"
              key={post.id}
              onClick={() => handlePostClick(post.id)} // 게시글 클릭 시 상세 페이지로 이동
            >
              <div className="board-content-title">{post.title}</div>
              <div className="board-content-text">{post.content}</div>
              <div className="reaction">
                <div className="reaction-item">
                  <img src={likeIcon} alt="like" className="reaction-icon" />
                  <p>{post.viewCount}</p>
                </div>
                <div className="reaction-item">
                  <img src={commentIcon} alt="comment" className="reaction-icon" />
                  <p>{post.commentCount}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>게시글이 없습니다.</p>
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          이전
        </button>
        <span>
          {currentPage} / {Math.ceil(posts.length / postsPerPage)}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(posts.length / postsPerPage)}>
          다음
        </button>
      </div>
      <Link className="write-button" to="/boardwrite">
        <img src={pen} alt="pen" className="pen-img" />
        <p className="write-text">글쓰기</p>
      </Link>
    </div>
  );
};

export default Board;
