import './watch.scss'
import React from 'react'
import trailer from '../../videos/GameOfThronesOfficialTrailer.mp4'
import { ArrowBackOutlined } from '@material-ui/icons'

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src={ trailer }
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  )
}

export default Watch
