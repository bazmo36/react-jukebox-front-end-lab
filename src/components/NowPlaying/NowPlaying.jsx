import React from 'react'

const NowPlaying = ({track}) => {
      if (!track) return null

  return (
    <div>
      <h1>Now Playing</h1>
      <p>Title: {track.title}</p>
      <p>Artist: {track.artist}</p>
    </div>
  )
}

export default NowPlaying
