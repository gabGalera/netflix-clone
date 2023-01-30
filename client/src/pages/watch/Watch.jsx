import './watch.scss';
import React from 'react';
import { ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

function Watch() {
  const location = useLocation();
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <iframe
        title="YouTube video player"
        frameBorder="0"
        src={`${location.movie.video}?autoplay=1`}
        className="video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default Watch;
