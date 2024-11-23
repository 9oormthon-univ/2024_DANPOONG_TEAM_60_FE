import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/css/nav/ViewBoard.css";
import arrowleft from "../../assets/images/nav/arrow_left.png";
import likeIcon from "../../assets/images/nav/like_icon.png";
import commentIcon from "../../assets/images/nav/comment_icon.png";
import userIcon from "../../assets/images/nav/user_icon.png";

const ViewBoard = () => {
  const { oauthId, postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // 서버에서 게시글과 댓글 가져오기
    const fetchPostAndComments = async () => {
      try {
        const response = await axios.get(
          `http://3.93.236.79:8080/post/${oauthId}/${postId}`,
          { withCredentials: false }
        );
        setPost(response.data.postlist);
        setComments(response.data.comments);
      } catch (error) {
        console.error("게시글을 불러오는 중 오류 발생:", error);
      }
    };

    fetchPostAndComments();
  }, [oauthId, postId]);

  return (
    <div className="viewboard-container">
      <div className="viewboard-header">
        <img src={arrowleft} alt="뒤로가기" className="header-left" onClick={() => window.history.back()} />
        <p>게시판</p>
      </div>
      {post ? (
        <div className="viewboard-content">
          <div className="viewboard-post">
            <div className="post-header">
              <img src={userIcon} alt="user" className="user-icon" />
              <div className="post-info">
                <p className="nickname">{post.nickname || "닉네임"}</p>
                <p className="upload-date">{post.uploadDate || "날짜"}</p>
              </div>
            </div>
            <div className="post-title">{post.title}</div>
            <div className="post-text">{post.content}</div>
            <div className="post-reactions">
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
          <div className="comments-section">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div className="comment" key={comment.id}>
                  <div className="comment-header">
                    <img src={userIcon} alt="user" className="comment-user-icon" />
                    <div className="comment-info">
                      <p className="comment-nickname">{comment.author || "닉네임"}</p>
                      <p className="comment-date">{comment.createDate || "날짜"}</p>
                    </div>
                  </div>
                  <div className="comment-text">{comment.content}</div>
                </div>
              ))
            ) : (
              <p className="no-comments">댓글이 없습니다.</p>
            )}
          </div>
        </div>
      ) : (
        <p>게시글을 불러오는 중입니다...</p>
      )}
    </div>
  );
};

export default ViewBoard;