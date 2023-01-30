import './featured.scss';
import React, { useState, useEffect } from 'react';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Featured({ type }) {
  const [content, setContent] = useState({});
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc0NmI5YmQ4ZTE0Nzg4MzZlYzQyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTA5NjAzMywiZXhwIjoxNjc1NTI4MDMzfQ.HJc9js0fgO2xM0RooLhoGgz10OVE8qXO_kW3S0GvsJo',
          },
        });
        setContent(res.data[0]);
        setMovie(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{ type === 'movies' ? 'Movies' : 'Series' }</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">
          <Link to={{ pathname: '/watch', movie }} style={{ textDecoration: 'none' }}>
            <button type="button" className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button type="button" className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Featured.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Featured;
