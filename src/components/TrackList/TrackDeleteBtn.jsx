import React from "react";
import { deleteTrack } from "../../services/trackService";

const TrackDeleteBtn = ({trackId, getAllTracks}) => {
    const handleDelete = async () => {
       await deleteTrack(trackId)
       getAllTracks()
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default TrackDeleteBtn