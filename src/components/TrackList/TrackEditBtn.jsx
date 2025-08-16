import React from "react";


const TrackEditBtn = ({track, setEditTrack, setFormIsShown}) => {
    const handleEdit = async () => {
       await setEditTrack(track)
       setFormIsShown(true)
    }
    return (
        <button onClick={handleEdit}>Edit</button>
    )
}

export default TrackEditBtn