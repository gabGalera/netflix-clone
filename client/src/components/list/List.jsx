import './list.scss';
import React, { useState, useRef } from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import ListItem from '../listItem/ListItem';

function List({ list }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > -1) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        {console.log(list)}
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
          {/* <ListItem index={0} /> */}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}

List.defaultProps = {
  list: {
    title: '',
    content: [],
  },
};

List.propTypes = {
  list: PropTypes.shape,
};

export default List;
