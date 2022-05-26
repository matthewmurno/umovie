import React from 'react';
import css from '../styles/profileThumbnail.module.css';
import publicUrl from '../utils/publicUrl';

export default function profileThumbnail(props) {
  return (
    <div className={css.square}>
      <div className={css.content}>
        <img className={css.image} src={publicUrl(props.filtered.img)} alt="Media Thumbnail"/>
      </div>
    </div>
  );
}