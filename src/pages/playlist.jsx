import React, { useState, useEffect } from "react";
import css from "../styles/watchlist.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import PlaylistItems from "./playlistItems.jsx"

export default function Playlist(props) {
  const { currentUserId, users, playlist} = props;
  const { userId } = useParams();
  console.log(playlist);

  function getUser(users) {
    return users.find((user) => user.id === userId);
  }

  function getWatchlistItems(user) {
    return playlist.filter((list) => list.userId === user);
  }

  const user = getUser(users);
  const watchlistItems = getWatchlistItems(user.id);
  

  return (
    <div className={css.content}>
      <h2 className={css.title}>{user.id}'s Playlist</h2>
      <div className={css.watchlistItem}>
        {watchlistItems.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
      .map(item=>
          <PlaylistItems key={item.id}
            item = {item}/> )}
      </div>
    </div>
  );
}
