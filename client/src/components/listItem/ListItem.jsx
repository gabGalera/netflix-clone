import './listItem.scss';
import React, { useState } from 'react';
import {
  Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined,
} from '@material-ui/icons';
import trailer from '../../videos/GameOfThronesOfficialTrailer.mp4';

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Tjj3ylZ81ZVhaCHOHesA1yfDO73HUMcTog&usqp=CAU"
        alt="Game of Thrones logo"
      />
      {isHovered && (
        <>
          <video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            src={trailer}
            autoPlay
            loop
          />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sint dolor totam. Repudiandae quas veniam ea voluptatibus iste molestiae corporis nostrum alias ad amet, quis eum aspernatur blanditiis exercitationem porro!
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
