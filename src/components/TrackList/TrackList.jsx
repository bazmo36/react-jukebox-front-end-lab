import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import TrackDeleteBtn from './TrackDeleteBtn';


const TrackList = () => {
    const [tracks, setTracks] = useState([])

    const getAllTracks = async () => {
        const url = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`
        const response = await axios.get(url)
        console.log(response)
        setTracks(response.data)
    }

    useEffect(() => {
        getAllTracks()
    }, [])

    return (
        <div>
            <ol>
            {
                tracks.length
                    ?
                    tracks.map(track => {
                        return (
                            <div key={track._id}>
                                <p>{track.title} - {track.artist}</p>

                                <TrackDeleteBtn trackId={track._id} getAllTracks={getAllTracks} />

                            </div>

                        )

                    })
                    :
                    <ClipLoader
                        color='#338867'
                    />

            }
            </ol>
        </div>
    )
}

export default TrackList


