import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/nav/Board.css";
import arrowleft from "../../assets/images/nav/arrow_left.png";
import likeIcon from "../../assets/images/nav/like_icon.png";
import commentIcon from "../../assets/images/nav/comment_icon.png";
import pen from "../../assets/images/nav/pencil.png";

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    // 서버에서 게시글 목록을 가져오는 함수
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://3.93.236.79:8080/post", {
          withCredentials: false,
          mode: 'no-cors' // no-cors 모드 설정
        }); // 서버 API URL 설정
        setPosts(response.data.postlist); // 서버에서 받아온 데이터 설정
      } catch (error) {
        console.error("게시글을 불러오는 중 오류 발생:", error);
      }
    };

    // 함수 호출
    fetchPosts();
  }, []);

  // 현재 페이지의 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 변경 함수
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

  // 게시글 클릭 시 상세 페이지로 이동
  const handlePostClick = (oauthId, postId) => {
    navigate(`/post/${oauthId}/${postId}`);
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <img src={arrowleft} alt="뒤로가기" className="board-arrow-left" onClick={() => navigate(-1)} />
        <p>게시판</p>
      </div>
      <div className="board-content-container">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div
              className="board-content"
              key={post.id}
              onClick={() => handlePostClick(post.oauthId, post.id)}
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
      {/* 글쓰기 버튼 추가 */}
      <Link className="write-button" to="/post/new">
        <img src={pen} alt="pen" className="pen-img" />
        <p className="write-text">글쓰기</p>
      </Link>
    </div>
  );
};

export default Board;
