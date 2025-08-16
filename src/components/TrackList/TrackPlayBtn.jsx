import React from "react";

const TrackPlayBtn = ({ track, setNowPlaying }) => {
  const handlePlay = () => {
    setNowPlaying(track)
  }

  return (
    <button onClick={handlePlay}>Play</button>
  )
}

export default TrackPlayBtn
