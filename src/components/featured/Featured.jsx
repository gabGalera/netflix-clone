import './featured.scss';
import React from 'react';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';

const Featured = () => {
  return(
    <div className='featured'>
      <img
        width='100%'
        src="https://wallpaperaccess.com/full/3084028.jpg" 
        alt="Profile" 
      />
      <div className="info">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TBBT_logo.svg/485px-TBBT_logo.svg.png" 
          alt="" />
        <span className='desc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odio ea sequi ullam. Nulla quasi non eligendi incidunt necessitatibus velit. Est dolorem nemo, earum exercitationem dicta quod quae error aliquam!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured;
