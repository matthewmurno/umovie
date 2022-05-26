import * as React from "react";
import css from "../styles/home.module.css";
import { Link, useParams } from "react-router-dom";

//pages
import MediaThumbnail from "./mediaThumbnail.jsx";

export default function Home(props) {
  const { currentUserId, media, users, friends } = props;

  //useParams
  const { mediaId } = useParams();

  //recommended
  const recommended = "Space Jam";

  const random = media[Math.floor(Math.random() * media.length)];
  const filtered = media.find((a) => a.name === random.name);

  //finding the current user
  const currentUser = users.find((user) => user.id === currentUserId);

  //finding friends
  function findFriends(user, friends) {
    let userFriends = friends.filter((friend) => friend.userId === user.id);
      return {
        self: userFriends.some((friend) => friend.userId === user.id),
        count: userFriends.length,
      };
  }
  const currentUserFriends = findFriends(currentUser, friends)
  
  
  /*const [friend1, friend2] = currentUserFriends;
  console.log(friend1);
  console.log(friend2);
  const friend1Info = users.find((user) => user.id === friend1);
  const friend2Info = users.find((user) => user.id === friend2);
  console.log(friend1Info.top);

  const [{ music: Friend1music, tvshow: Friend1tvshow }] = friend1Info.top;
  const [{ music: Friend2music, tvshow: Friend2tvshow }] = friend2Info.top;

  const filteredFriendsLikes1 = media.find((a) => a.mediaId === Friend1music);
  const filteredFriendsLikes2 = media.find((a) => a.mediaId === Friend2music);
  const filteredFriendsLikes3 = media.find((a) => a.mediaId === Friend1tvshow);
  const filteredFriendsLikes4 = media.find((a) => a.mediaId === Friend2tvshow);*/

  return (
    <>
      <div className={css.content}>
        <h2 className={css.title}>Home</h2>
        <div className={css.recommended}>
          <h3 className={css.recommend}>Recommended for {currentUserId}:</h3>
          <div className={css.media}>
            <ul className={css.type}>
              <li id={css.mediaName}>{filtered.name}</li>
              <li> {filtered.type}</li>
            </ul>
            <Link key={filtered.mediaId} to={"/" + filtered.mediaId}>
              <div className={css.image_container1}>
                <MediaThumbnail className={css.original} filtered={filtered} />
              </div>
            </Link>
          </div>
        </div>
        {/*<div className={css.yourFriendsLike}>
          <h3>Your Friends Like: </h3>

          <table className={css.friendsLikes}>
            <tr>
              <td className={css.mediaTile}>
                <Link
                  key={filteredFriendsLikes1.mediaId}
                  to={"/" + filteredFriendsLikes1.mediaId}
                >
                  <div className={css.image_container}>
                    <MediaThumbnail
                      className={css.tiles}
                      filtered={filteredFriendsLikes1}
                    />
                  </div>
                </Link>
              </td>
              <td className={css.mediaTile}>
                <Link
                  key={filteredFriendsLikes2.mediaId}
                  to={"/" + filteredFriendsLikes2.mediaId}
                >
                  <div className={css.image_container}>
                    <MediaThumbnail
                      className={css.tiles}
                      filtered={filteredFriendsLikes2}
                    />
                  </div>
                </Link>
              </td>
            </tr>
            <tr>
              <td className={css.mediaTile}>
                <Link
                  key={filteredFriendsLikes3.mediaId}
                  to={"/" + filteredFriendsLikes3.mediaId}
                >
                  <div className={css.image_container}>
                    <MediaThumbnail
                      className={css.tiles}
                      filtered={filteredFriendsLikes3}
                    />
                  </div>
                </Link>
              </td>
              <td className={css.mediaTile}>
                <Link
                  key={filteredFriendsLikes4.mediaId}
                  to={"/" + filteredFriendsLikes4.mediaId}
                >
                  <div className={css.image_container}>
                    <MediaThumbnail
                      className={css.tiles}
                      filtered={filteredFriendsLikes4}
                    />
                  </div>
                </Link>
              </td>
            </tr>
          </table>
        </div>*/}
      </div>
    </>
  );
}
