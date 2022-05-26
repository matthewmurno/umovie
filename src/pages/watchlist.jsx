import React, { useState, useEffect } from "react";
import css from "../styles/watchlist.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import WatchlistItems from "./watchlistItems.jsx"

export default function Watchlist(props) {
  const { currentUserId, users, watchlist, addWatchlistItem } = props;
  const { userId } = useParams();
  console.log(watchlist);

  function getUser(users) {
    return users.find((user) => user.id === userId);
  }

  function getWatchlistItems(user) {
    return watchlist.filter((list) => list.userId === user);
  }

  const user = getUser(users);
  const watchlistItems = getWatchlistItems(user.id);
  

  return (
    <div className={css.content}>
      <h2 className={css.title}>{user.id}'s Watchlist</h2>
      <div className={css.watchlistItem}>
        {watchlistItems.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
      .map(item=>
          <WatchlistItems key={item.id}
            item = {item}/> )}
      </div>
    </div>
  );
}
