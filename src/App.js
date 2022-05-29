import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faHouse,
    faMagnifyingGlass,
    faComments,
    faUser,
    faComment,
    faGear,
    faMusic,
    faTv,


} from "@fortawesome/free-solid-svg-icons";

//initial store
import initialStore from "./utils/newInitialStore.js";

//pages
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Header from "./pages/header.jsx";
import Navbar from "./pages/navbar.jsx";
import Media from "./pages/mediaPage.jsx";
import Search from "./pages/search.jsx";
import FriendsList from "./pages/friendsList.jsx";
import Watchlist from "./pages/watchlist.jsx";
import Playlist from "./pages/playlist.jsx";

//style
import css from "./styles/app.module.css";

export default function App() {
    library.add(faHouse, faMagnifyingGlass, faComments, faUser, faTv, faGear, faMusic);

    const [currentUserId, setCurrentUserId] = useState(
        initialStore.currentUserId
    );
    const [users, setUsers] = useState(initialStore.users);
    const [friends, setFriends] = useState(initialStore.friends);
    const [tvshows, setTvShows] = useState(initialStore.tvshows);
    const [movies, setMovies] = useState(initialStore.movies);
    const [podcasts, setPodcasts] = useState(initialStore.podcasts);
    const [music, setMusic] = useState(initialStore.music);
    const [reviews, setReviews] = useState(initialStore.reviews);
    const [watchlist, setWatchlist] = useState(initialStore.watchlist);
    const [playlist, setPlaylist] = useState(initialStore.playlist);

    //concatting all the media types into one variable to sort
    const media = tvshows.concat(movies).concat(podcasts).concat(music);

    //function to add items to the watchlist
    function addWatchlistItem(name, type, location_image, mediaId) {
        const watchlistItem = {
            name,
            type,
            location_image,
            mediaId,
            datetime: new Date().toISOString(),
            userId: currentUserId,
        };
        setWatchlist(watchlist.concat(watchlistItem));
    }

    //function to remove item from the watchlist
    function removeWatchlistItem(userId, mediaId) {
        setWatchlist(
            watchlist.filter((a) => !(a.userId === userId && a.mediaId === mediaId))
        );
    }

     //function to add items to the playlist (music or podcasts)
     function addPlaylistItem(name, type, location_image, mediaId) {
        const playlistItem = {
            name,
            type,
            location_image,
            mediaId,
            datetime: new Date().toISOString(),
            userId: currentUserId,
        };
        setPlaylist(playlist.concat(playlistItem));
    }

    //function to remove item from the playlist
    function removePlaylistItem(userId, mediaId) {
        setPlaylist(
            playlist.filter((a) => !(a.userId === userId && a.mediaId === mediaId))
        );
    }

    function addReview(mediaId, text) {
        const review = {
        user: currentUserId,
        mediaId,
        text,
        };
        setReviews(reviews.concat(review));
    }

    function addFriend(userId, friendId){
        const friend = {
        userId,
        friendId
        };
        console.log(friend);
        setFriends(friends.concat(friend));
    }

    function removeFriends(userId, friendId){
        setFriends(friends.filter(friend=>!(friend.userId===userId && friend.friendId===friendId)));
    }




    return ( 
            < >
                <Router basename={process.env.PUBLIC_URL}>
                    <div className = { css.container } >
                        <Header currentUserId = { currentUserId }/>
                        <main >
                            <Routes >
                                <Route path = "/"
                                element = { <
                                    Home
                                    currentUserId = { currentUserId }
                                    media = { media }
                                    users = { users }
                                    friends = { friends }
                                    />
                                }
                                />

                                <Route path = "/:mediaId"
                                element = { <
                                    Media
                                    currentUserId = { currentUserId }
                                    media = { media }
                                    users = { users }
                                    addWatchlistItem = { addWatchlistItem }
                                    removeWatchlistItem = { removeWatchlistItem }
                                    addReview = {addReview}
                                    watchlist = { watchlist }
                                    reviews = {reviews}
                                    addPlaylistItem = { addPlaylistItem }
                                    removePlaylistItem = { removePlaylistItem }
                                    playlist = { playlist }
                                    />
                                }
                                /> 

                                <Route path = "search"
                                element = { < Search media = { media }
                                    />} />

                                <Route
                                path = "profile/:userId"
                                element = { <
                                    Profile
                                    currentUserId = { currentUserId }
                                    users = { users }
                                    media = { media }
                                    />
                                }
                                />

                                <Route
                                path = "friendsList"
                                element = { <
                                    FriendsList currentUserId = { currentUserId }
                                    users = { users }
                                    />
                                }
                                /> 
                                
                                <Route
                                path = "watchlist/:userId"
                                element = { < Watchlist users = { users }
                                    watchlist = { watchlist }
                                    />} />

                                <Route
                                path = "playlist/:userId"
                                element = { < Playlist users = { users }
                                    playlist = { playlist }
                                    />} />    

                                </Routes >  
                            </main > 
                        <Navbar currentUserId = { currentUserId }/>
                        </div>  
                    </Router > 
                </>
                );
            }