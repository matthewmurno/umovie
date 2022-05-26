import React, { useState, useEffect } from "react";
import css from "../styles/mediaPage.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//import friendsList from "./friendsList.jsx";
//import Reviews from "./reviews.jsx";
import publicUrl from '../utils/publicUrl';

function Media(props) {
  const { mediaId } = useParams();
  const {
    media,
    currentUserId,
    users,
    addWatchlistItem,
    removeWatchlistItem,
    watchlist, 
    reviews,
  } = props;
  const [review, setReview] = useState("");
  const [leaveReview, setLeaveReview] = useState(false);
  //find media based on mediaId
  const filtered = media.find((a) => a.mediaId === mediaId);

  const title = filtered.name;
  const artist = filtered.creator;
  const image = filtered.img;

  var currentUser = currentUserId;
  var userList = users;

  console.log("CURRENT USER", currentUser);
  console.log("users", userList);
  console.log("MEDIUM", filtered);
  console.log("stored reviews", reviews);


  let filteredReviews = reviews.filter((a) => a.mediaId === mediaId);
  console.log(filteredReviews);

  function reviewCounts(mediaId) {
    let reviewCounter = reviews.filter((a) => a.mediaId === mediaId);
      return {
        count: reviewCounter.length,
      };
  }

  let reviewCount = reviewCounts(mediaId);
  console.log(reviewCount);

  /*var review1 = filteredReviews[0];
  var review2 = filteredReviews[1];
  var review3 = filteredReviews[2];

  if (reviewCount < 3) {
    review3 = "";
  }*/

  console.log("REVIEWS", filteredReviews);

  var filt = Object.values(filteredReviews);
  console.log(filt);
  var arr = [];

  for (var i = 0; i < filt.length; i++) {
    arr.push(filt[i].userId);
  }

  console.log("arr", arr);
  console.log("USERS", users);

  var img_list = [];
  var friend_list = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < users.length; j++) {
      if (arr[i] === users[j].id) {
        img_list.push(users[j].profile_picture);
        friend_list.push(users[j].id);
      }
    }
  }
  console.log(img_list);

  const platform = filtered.location_image.map((a) => <img src={publicUrl(a)} />);
  console.log(filtered.location_image.map((a) => a));

  function getUser(users) {
    return users.find((user) => user.id === currentUserId);
  }

  function getWatchlistItems(user) {
    return watchlist.filter((list) => list.userId === user);
  }

  function filteredWatchlistItems(mediaId) {
    if (watchlistItems.find((list) => list.mediaId === mediaId) === undefined) {
      return false;
    } else {
      return watchlistItems.find((list) => list.mediaId === mediaId);
    }
  }

  const user = getUser(users);
  const watchlistItems = getWatchlistItems(user.id);
  const filterWatchlistItems = filteredWatchlistItems(mediaId);

  function handleAddToWatchlist() {
    return addWatchlistItem(
      title,
      filtered.type,
      [filtered.location_image.map((a) => a)],
      filtered.mediaId
    );
  }
  function handleRemoveFromWatchlist() {
    return removeWatchlistItem(user.id, filtered.mediaId);
  }
  console.log(user.id, filtered.mediaId);
  console.log(watchlist.filter((list) => list.userId === user.id));
  console.log(watchlistItems.filter((list) => list.mediaId === mediaId));
  console.log(filterWatchlistItems);
  console.log(
    filterWatchlistItems.mediaId === mediaId &&
      filterWatchlistItems.userId === user.id
  );
  function handleSubmitReview(event){
    props.addReview(mediaId, review); 
    setReview(''); 
    setLeaveReview(false);
    event.preventDefault(); 
  }

  /*function handleSubmitComment(event) {
    handleSubmitComment.addEventListener("click", function (event) {
      event.preventDefault();
    });
    console.log(comment);
    props.onComment(props.user, comment);
    setComment("");
    setLeaveComment(false);
    event.preventDefault();
    console.log("refresh prevented.");
  }*/
console.log("COMMENT", review);
  
  return (
    <div className={css.content}>
      <div className={css.header}>
        <div className={css.media}>
          <h1>{title}</h1>
          <ul className={css.type}>
            <li id={css.mediaName}>By: {artist}</li>
            <li id={css.mediaType}> {filtered.type}</li>
          </ul>
        </div>
        <img className={css.mediaImage} src={publicUrl(image)} />
      </div>
      <ul className={css.platformRatings}>
        <li className={css.platforms}>
          {(filtered.mediaType === "Podcast") |
          (filtered.mediaType === "Music") ? (
            <h3> Listen on: </h3>
          ) : (
            <h3> Watch on: </h3>
          )}
          <div className={css.platform}>{platform}</div>
        </li>
      </ul>
      <div>
        <ul className={css.review_watchlist}>
          <li>
            <button
              className={css.button}
              onClick={(enter) => setLeaveReview(!leaveReview)}
            >
              Leave a Review
            </button>
          </li>
          <li>
            {filterWatchlistItems.mediaId === mediaId &&
            filterWatchlistItems.userId === user.id ? (
              <button
                className={css.button}
                onClick={handleRemoveFromWatchlist}
              >
                Remove from Watchlist
              </button>
            ) : (
              <button className={css.button} onClick={handleAddToWatchlist}>
                Add to Watchlist
              </button>
            )}
          </li>
        </ul>
      </div>
      <div className={css.friends}>
        <h2> Friends </h2>
        <ul className={css.friendIcons}>
          <li>
            {friend_list[0] !== undefined ?
            <Link to={"/profile/" + friend_list[0]}>
              <img src={img_list[0]}></img>
            </Link> : null}
          </li>
          <li>
             {friend_list[1] !== undefined ?
            <Link to={"/profile/" + friend_list[1]}>
              <img src={img_list[1]}></img>
            </Link> : null}
          </li>
            <li>
            {friend_list[2] !== undefined ? 
            <Link to={"/profile/" + friend_list[2]}>
              <img src={img_list[2]}></img>
            </Link> : null}
          </li>
        </ul>
      </div>
      <div className={css.reviewContainer}>
        <h2> Reviews </h2>
        <div className={css.reviewList}>
          {filteredReviews.map((review) => (
            <div className={css.postComment}>
              <Link to={"/profile/" + review.user}>
                <span className={css.userId}>{review.user}</span>
              </Link>
              <span> {review.text}</span>
            </div>
          ))}
        </div>
        {leaveReview && 
          <form className={css.makeComment} onSubmit={handleSubmitReview}>
            <input
              type="text"
              placeholder="Enter a review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>
        }
      </div>
    </div>
  );
}

export default Media;
