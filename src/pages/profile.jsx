import React, {useState} from "react";
import css from "../styles/profile.module.css";
import { Link, useParams } from "react-router-dom";

//icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//pages
import MediaThumbnail from "./mediaThumbnail.jsx";
import ProfileThumbnail from "./profileThumbnail.jsx";
import friendsList from "./friendsList.jsx";
import publicUrl from '../utils/publicUrl';

function getArraysIntersection(a1, a2) {
  const filteredArray = a1.filter((value) => a2.includes(value));
  return filteredArray;
}

function deleteKey(key) {
  if (this.hasKey(key)) {
    delete this.container[key];
    return true;
  }
  return false;
}

export default function Profile(props) {
  const { currentUserId, users, media } = props;
  //useParams
  const { mediaId, userId } = useParams();
  
  //setting count for yourTop to render the different objects
  const [count, setCount] = useState(0);


  console.log("media", media);
  console.log("CurrentUserId", currentUserId);

  const currentUser = users.find((user) => user.id === userId);

  var services = currentUser.services;
  console.log("SERVICES", services);

  //recommended (copied from home)
  const recommended = "Breaking Bad";
  function isRecommended(recommended) {
    return media.name === recommended;
  }
  const filtered = media.find((a) => a.name === recommended);
  console.log("FILTERED", filtered);

  const myFavorites = [
    "Better Call Saul",
    "Revisionist History",
    "Stronger",
    "Midnight Train to Memphis",
    "First Class",
  ];

  var musicId = currentUser.top[0].music;
  console.log(currentUser.top[0].music);
  const [{ tvshow, music }] = currentUser.top;
  console.log("TVSHOW", tvshow);
  console.log("MUSIC", music);

  const topSong = media.find((a) => a.mediaId === music);
  const topTvShow = media.find((a) => a.mediaId === tvshow);

  var title;
  if (count === 0) {
    title = "Song";
  }
  else if (count === 1){
    title = "Tv Show"
  }
  else if (count === 2){
    title = "Movie"
  }
  else if (count === 3){
    title = "Podcast"
  }
  
  var info;
  if (count === 0) {
    info = topSong;
  }
  else if (count === 1){
    info = topTvShow
  }
  else if (count === 2){
    
  }
  else if (count === 3){
    
  }

  

  console.log("USERS",currentUser.top[0].tvshow[1]);

  const filteredMedia = media.filter((a) => a.mediaId === tvshow);
  console.log("FILTEREDMEDIA", filteredMedia);
  
  const [fav1,fav2,fav3,fav4] = currentUser.highest_rated;
  
  
  const filteredMyLikes1 = media.find((a) => a.mediaId === fav1);
  const filteredMyLikes2 = media.find((a) => a.mediaId === fav2);
  const filteredMyLikes3 = media.find((a) => a.mediaId === fav3);
  const filteredMyLikes4 = media.find((a) => a.mediaId === fav4);

  return (
    <>
      <div className={css.content}>
     <div className={css.titleCard}>
        <div className={css.profile}>
            <ul className={css.profileHeading}>
              <li>
                <img id={css.profileImg} src={publicUrl(currentUser.profile_picture)} />
              </li>
              <li>
                <h2 className={css.userName}>{currentUser.name}</h2>
              </li>
            </ul>
            <div className={css.list} id="platform">
              {imgloop(services)}
            </div>
            <div className={css.friendNumber}>
              <span>friends</span>
            </div>
          </div>
        
        </div>
        
          {/*<div className={css.Platforms}>
            <div className={css.list} id="platform">
              {imgloop(services)}
            </div>
          </div>*/}
          {/*<div className={css.buttonList}>
            <Link to="/friendsList">
              <button className={css.button}>Friends</button>
            </Link>
            <Link to={"/watchlist/" + currentUser.id}>
              <button className={css.button}>Watchlist</button>
            </Link>
          </div>*/}
        <div className={css.yourTop}>
          <h3> {userId}'s Top {title}: </h3>
          <ul className={css.type}>
              <li id={css.mediaName}>{info.name}</li>
              <li> {info.type}</li>
            </ul>
          {(count === 0) ? 
            <Link
                  key={topSong.mediaId}
                  to={"/" + topSong.mediaId}
                >
          <div className={css.image_container}>
            <MediaThumbnail
              className={css.tiles}
              filtered={topSong}
            />
            
          </div>
          </Link> : null}
          {(count === 1) ? 
            <Link
                  key={topTvShow.mediaId}
                  to={"/" + topTvShow.mediaId}
                >
          <div className={css.image_container}>
            <MediaThumbnail
              className={css.tiles}
              filtered={topTvShow}
            />
          </div>
          </Link> : null}
          {(count === 2) ? 
          <div className={css.image_container}>
            <MediaThumbnail
              className={css.tiles}
              filtered={topSong}
            />
          </div> : null}
          {(count === 3) ? 
          <div className={css.image_container}>
            <MediaThumbnail
              className={css.tiles}
              filtered={topSong}
            />
          </div> : null}
          <div className={css.buttonBar}>
          {(count !== 0) ? 
            <h2 className = {css.leftButton} onClick={() => setCount(count-1)}> {"<"} </h2>
          : <h2 style={{marginRight: "13.5px"}}></h2>}
          {(count !== 3) ?
            <h2 className = {css.rightButton} onClick={() => setCount(count+1)}> {">"} </h2>
          : null}
          </div>
        </div>
        <div className={css.highestRated}>
          <h2>{userId}'s Highest Rated:</h2>
          <table className={css.friendsLikes}>
            <tr>
              <td className={css.mediaTile}>
                <Link
                  key={filteredMyLikes1.mediaId}
                  to={"/" + filteredMyLikes1.mediaId}
                >
                  <div className={css.image_container}>
                    <ProfileThumbnail
                      className={css.tiles}
                      filtered={filteredMyLikes1}
                    />
                  </div>
                </Link>
              </td>
              <td className={css.mediaTile}>
                <Link
                  key={filteredMyLikes2.mediaId}
                  to={"/" + filteredMyLikes2.mediaId}
                >
                  <div className={css.image_container}>
                    <ProfileThumbnail
                      className={css.tiles}
                      filtered={filteredMyLikes2}
                    />
                  </div>
                </Link>
              </td>
            </tr>
            <tr>
              <td className={css.mediaTile}>
                <Link
                  key={filteredMyLikes3.mediaId}
                  to={"/" + filteredMyLikes3.mediaId}
                >
                  <div className={css.image_container}>
                    <ProfileThumbnail
                      className={css.tiles}
                      filtered={filteredMyLikes3}
                    />
                  </div>
                </Link>
              </td>
              <td className={css.mediaTile}>
                <Link
                  key={filteredMyLikes4.mediaId}
                  to={"/" + filteredMyLikes4.mediaId}
                >
                  <div className={css.image_container}>
                    <ProfileThumbnail
                      className={css.tiles}
                      filtered={filteredMyLikes4}
                    />
                  </div>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

function imgloop(platforms) {
  const servicesList = {
    Netflix:
      "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
    Spotify:
      "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/spotify.svg?v=1650431133225",
    HBO_Max:
      "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hbo-max.svg?v=1650432274304",
    Disney:
      "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/disney-plus.svg?v=1650430972463",
    Hulu: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hulu.svg?v=1650431318864",
    Apple_Podcasts:
      "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/podcasts.svg?v=1650432242979",
    Apple_Music:
      "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/music.svg?v=1650431143121",
  };

  var keys = Object.keys(servicesList);

  var commonPlats = getArraysIntersection(platforms, keys);

  console.log("COMMON PLATFORMS", commonPlats);

  const res = Object.fromEntries(
    Object.entries(servicesList).filter(([key]) => platforms.includes(key))
  );

  console.log("RES", res);
  var values = Object.values(res);

  const children = values.map((val) => (
    <img className={css.platformImg} src={val} />
  ));
  console.log("CHILDREN", children);

  const container = React.createElement("ul", {}, [
    React.createElement("li", {}, children[0]),
    React.createElement("li", {}, children[1]),
    React.createElement("li", {}, children[2]),
    React.createElement("li", { className: "fourth" }, children[3]),
    React.createElement("li", { className: "fifth" }, children[4]),
    React.createElement("li", { className: "sixth" }, children[5]),
    React.createElement("li", { className: "seventh" }, children[6]),
    React.createElement("li", { className: "eigth" }, children[7]),
  ]);

  console.log(children[0]);

  return container;
}
