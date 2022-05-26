import * as React from "react";
import css from "../styles/friendsList.module.css";
import { Link, useParams} from "react-router-dom";

//pages
import MediaThumbnail from "./mediaThumbnail.jsx";

export default function FriendsList(props) {
  const { currentUserId, users } = props;

  //useParams
  const { userId } = useParams();
  const userArray = [];
  console.log(users);
  console.log(currentUserId);

  for (var i = 0; i < users.length; i++) {
    userArray.push(users[i].id);
  }

  console.log(userArray);

  function findUser(currentUserId, userArray, users) {
    var x = userArray.indexOf(currentUserId);
    const data = users[x];
    return data;
  }

  const data = findUser(currentUserId, userArray, users);
  console.log(data);
  console.log("users", users);

  var currentUser = users.filter((obj) => {
    return obj.id === currentUserId;
  });

  currentUser = currentUser[0];
  console.log(currentUser);

  var result1 = users.filter((obj) => {
    return obj.id === "Brian";
  });

  var finalResult1 = result1[0];
  console.log(finalResult1);

  var result2 = users.filter((obj) => {
    return obj.id === "Sam";
  });

  var finalResult2 = result2[0];
  console.log(finalResult2);

  var list = [];
  list.push(finalResult1);
  list.push(finalResult2);

  console.log(list[0].top[0]);

  function displayCard1(list) {
    var element1 = React.createElement("div", {}, [
      <Link
        to={{
          pathname: "/profile/" + "Brian" ,
        }}
      >
        <div className={css.friendCard}>
          <h2>{finalResult1.name}</h2>
          <img
            className={css.friendPhoto}
            alt={finalResult1.name}
            src={finalResult1.profile_picture}
          />
        </div>
      </Link>,
    ]);

    return element1;
  }

  function displayCard2(list) {
    var element2 = React.createElement("div", {}, [
      <Link
        to={{
          pathname: "/profile/" + "Sam",
        }}
      >
        <div className={css.friendCard2}>
          <h2>{finalResult2.name}</h2>
          <img
            className={css.friendPhoto2}
            alt={finalResult2.name}
            src={finalResult2.profile_picture}
          />
        </div>
      </Link>,
    ]);

    return element2;
  }

  return (
    <div>
      <div className={css.userInformation}>
        <img className={css.userPhoto} src={currentUser.profile_picture}></img>
        <div className={css.userName}>
          <h2> {currentUser.name}</h2>
        </div>
      </div>
      <h3> Your Friends: </h3>
      <div className={css.friendsCard}>{displayCard1(list)}</div>
      <br></br>
      <div className={css.friendsCard}>{displayCard2(list)}</div>
    </div>
  );
}
