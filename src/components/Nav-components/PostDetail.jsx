import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../assets/css/nav/PostDetail.css";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts.find((p) => p.id === Number(postId)); // 게시글 찾기

  if (!post) {
    return (
      <div className="post-detail-container">
        <p>게시글을 찾을 수 없습니다.</p>
        <button onClick={() => navigate(-1)}>목록</button>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <div className="post-detail-title">{post.title}</div>
      <div className="post-detail-content">
        <p>{post.content}</p>
      </div>
      <div className="post-detail-back" onClick={() => navigate(-1)}>
        목록
      </div>
    </div>
  );
};

export default PostDetail;
