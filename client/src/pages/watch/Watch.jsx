import './watch.scss';
import React from 'react';
import { ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import trailer from '../../videos/GameOfThronesOfficialTrailer.mp4';

function Watch() {
  const location = useLocation();
  console.log(location);
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
