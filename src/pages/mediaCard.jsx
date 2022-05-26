import React from "react";
import { useParams } from "react-router-dom";
import css from "../styles/mediaPage.module.css";
import { Link } from "react-router-dom";

function MediaCard(props) {
  const data = props;

  const list = Object.values(data);
  const newList = list[0];

  console.log("NewList", newList);

  //find media based on mediaId

  
  const element = {};
  element.name = "None Found";
  element.img = "";
  if (Object.keys(newList).length === 0) {
    newList.push(element);
  }

  function displayCards(list) {
    for (var i = 0; i < list.length; i++) {
      return (
        <div>
          <Link key={newList[i].mediaId} to={"/" + newList[i].mediaId}>
            <div>
              <h2>{newList[i].name}</h2>
              <img
                className={css.coverImage}
                alt={newList.name}
                src={newList[i].img}
              />
              <span> {newList[i].creator}</span>
            </div>
          </Link>
        </div>
      );
    }
  }

  return (
    displayCards(newList)
  );
}

export default MediaCard;
