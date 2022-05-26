import React, { useState } from "react";
import SearchList from "./searchList";
import { useParams } from "react-router-dom";
import css from "../styles/home.module.css";
import { Link } from "react-router-dom";
import MediaThumbnail from "./mediaThumbnail.jsx";

export default function Search(props) {
  console.log("props", props);

  const { mediaId } = useParams();
  const { medium } = props;

  console.log({ medium });

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredMedia = medium.filter((media) => {
    return (
      media.name.toLowerCase().includes(searchField.toLowerCase()) ||
      media.creator.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  console.log("FilteredMedia[0]", filteredMedia[0]);

  const handleChange = (e) => {
    console.log("searched", e.target.value);
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return <SearchList mediaList={filteredMedia} />;
    }
  }

  const med0 = medium[0];
  const med1 = medium[1];
  const med2 = medium[2];
  const med3 = medium[3];
  const med4 = medium[4];
  const med5 = medium[5];
  const med6 = medium[6];
  const med7 = medium[7];

  console.log(med0);

  return (
    <div>
      <div>
        <h2>Search for Media</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Media..."
          onChange={handleChange}
        />
      </div>
      {searchList(filteredMedia)}
      <div>
        <h3> Popular in the Community: </h3>
        <div className={css.cards}>
          <div className={css.card}>
            <Link key={med0.mediaId} to={"/" + med0.mediaId}>
              <div className={css.image_container}>
                <MediaThumbnail className={css.tiles} filtered={med0} />
              </div>
            </Link>
          </div>
          <div className={css.card}>
            <Link key={med1.mediaId} to={"/" + med1.mediaId}>
              <div className={css.image_container}>
                <MediaThumbnail className={css.tiles} filtered={med1} />
              </div>
            </Link>
          </div>
          <div className={css.card}>
            <Link key={med2.mediaId} to={"/" + med2.mediaId}>
              <div className={css.image_container}>
                <MediaThumbnail className={css.tiles} filtered={med2} />
              </div>
            </Link>
          </div>
          <div className={css.card}>
            <Link key={med3.mediaId} to={"/" + med3.mediaId}>
              <div className={css.image_container}>
                <MediaThumbnail className={css.tiles} filtered={med3} />
              </div>
            </Link>
          </div>
          <div className={css.card}>
            <Link key={med4.mediaId} to={"/" + med4.mediaId}>
              <div className={css.image_container}>
                <MediaThumbnail className={css.tiles} filtered={med4} />
              </div>
            </Link>
          </div>
          <div className={css.card}>
            <Link key={med5.mediaId} to={"/" + med5.mediaId}>
              <div className={css.image_container}>
                <MediaThumbnail className={css.tiles} filtered={med5} />
              </div>
            </Link>
          </div>
          <div className={css.card}>
            <Link key={med6.mediaId} to={"/" + med6.mediaId}>
              <div className={css.image_container}>
                <MediaThumbnail className={css.tiles} filtered={med6} />
              </div>
            </Link>
          </div>
           <div className={css.card}>
            <Link key={med7.mediaId} to={"/" + med7.mediaId}>
              <div className={css.image_container}>
                <MediaThumbnail className={css.tiles} filtered={med7} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
