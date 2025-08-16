import React from 'react'

const NowPlaying = ({ track, setNowPlaying }) => {
    if (!track) return null

    return (
        <div className="now-playing-container">
            <h1>Now Playing</h1>
            <p><strong>Title:</strong> {track.title}</p>
            <p><strong>Artist:</strong> {track.artist}</p>

            <button onClick={() => {
                setNowPlaying(null)
            }}> Stop </button>
        </div>
    )
}

export default NowPlaying
