import './listItem.scss';
import React from "react";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

const listItem = () => {
  return(
    <div className="listItem" >
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Tjj3ylZ81ZVhaCHOHesA1yfDO73HUMcTog&usqp=CAU" 
        alt="Game of Thrones logo"
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className='limit'>+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis quam nostrum fugit recusandae facere, minus hic voluptatum totam veritatis repellendus exercitationem saepe dolores soluta delectus pariatur perspiciatis! Soluta, aliquid.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  )
}

export default listItem;
