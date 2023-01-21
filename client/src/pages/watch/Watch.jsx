import './watch.scss';
import React from 'react';
import { ArrowBackOutlined } from '@material-ui/icons';
import trailer from '../../videos/GameOfThronesOfficialTrailer.mp4';

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src={trailer}
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}

export default Watch;
