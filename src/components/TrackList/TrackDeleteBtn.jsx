import React from "react";
import { deleteTrack } from "../../services/trackService";

const TrackDeleteBtn = ({TrackId, getAllTracks}) => {
    console.log(TrackId)
    const handleDelete = async () => {
       await deleteTrack(TrackId)
       getAllTracks()
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default TrackDeleteBtn