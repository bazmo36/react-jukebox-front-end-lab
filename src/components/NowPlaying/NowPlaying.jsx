import React from 'react'

const NowPlaying = ({ track, setNowPlaying }) => {
    if (!track) return null

    return (
        <div>
            <h1>Now Playing</h1>
            <p>Title: {track.title}</p>
            <p>Artist: {track.artist}</p>

            <button onClick={() => {
                setNowPlaying(null)
            }}> Stop </button>
        </div>
    )
}

export default NowPlaying
