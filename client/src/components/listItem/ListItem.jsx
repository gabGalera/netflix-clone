import './listItem.scss';
import React, { useState, useEffect } from 'react';
import {
  Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined,
} from '@material-ui/icons';

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        // const res = await axios
      } catch (err) {
        console.log(err);
      }
    };
  });
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.img}
        alt="Game of Thrones logo"
      />
      {isHovered && (
        <>
          <video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            src={item.trailer}
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
              <span>{item.duration}</span>
              <span className="limit">
                +
                {item.limit}
              </span>
              <span>{item.year}</span>
            </div>
            <div className="desc">
              {item.desc}
            </div>
            <div className="genre">{item.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
