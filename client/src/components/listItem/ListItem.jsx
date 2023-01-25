import './listItem.scss';
import React, { useState, useEffect } from 'react';
import {
  Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined,
} from '@material-ui/icons';
import axios from 'axios';
import PropTypes from 'prop-types';

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        console.log(item);
        const res = await axios.get(`movies/find/${item}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc0NmI5YmQ4ZTE0Nzg4MzZlYzQyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDY2MDIzMCwiZXhwIjoxNjc1MDkyMjMwfQ.YabgLgt7vrEd30FdTgUSBw2CoqyQkM6k8kb0YFA5cxg',
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt="Game of Thrones logo"
      />
      {isHovered && (
        <>
          <iframe
            width="100%"
            height="140px"
            src={movie.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">
                +
                {movie.limit}
              </span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}

ListItem.defaultProps = {
  item: '',
};

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string,
};

export default ListItem;
