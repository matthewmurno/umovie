import React from 'react';
import css from "../styles/search.module.css";
import { Link, useParams } from "react-router-dom";
import MediaCard from './mediaCard.jsx';

function searchList(props) {
  const data = props
  const newList = Object.values(data)
  const filtered = newList.map(data => <MediaCard key={data.name} media={data}/>);
  
  return (
    <div>
      {filtered}      
    </div>
  );
}

export default searchList;