import React from 'react';
import css from '../styles/MediaThumbnail.module.css';
import publicUrl from '../utils/publicUrl';

function MediaThumbnail(props) {
  return (
    <div className={css.square}>
      <div className={css.content}>
        <img className={css.image} src={publicUrl(props.filtered.img)} alt="Media Thumbnail"/>
      </div>
    </div>
  );
}

export default MediaThumbnail;