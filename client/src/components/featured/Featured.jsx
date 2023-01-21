import './featured.scss';
import React from 'react';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';

function Featured({ type }) {
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
        src="https://wallpaperaccess.com/full/17520.jpg"
        alt="Profile"
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TBBT_logo.svg/485px-TBBT_logo.svg.png"
          alt=""
        />
        <span className="desc">
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
  );
}

export default Featured;
