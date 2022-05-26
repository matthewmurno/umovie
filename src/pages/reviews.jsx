import React, { useState } from "react";
import reviewList from "./searchList";
import { useParams } from "react-router-dom";
import css from "/src/styles/reviews.module.css";
import { Link } from "react-router-dom";
import MediaThumbnail from "./mediaThumbnail.jsx";


export default function reviews(props){
  const mediaId = useParams();
  const { medium, currentUserId, users } = props;
  
  console.log("MEDIUM", medium);
  console.log("currentUser", currentUserId);
  console.log("users", users);
  
  return(
    <div className = {css.commentBox}>
      <div className = {css.commentList}>
        <div className = {css.commentForm}>
        </div>
      </div>
    </div>
  );
  
}
