import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";


const TrackList = () => {
    const [tracks, setTracks] = useState([])

    console.log("Backend URL:", import.meta.env.VITE_BACK_END_SERVER_URL)


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
            {
                tracks.length
                    ?
                    tracks.map((track, index) => {
                        console.log(track)
                        return (
                            <>
                                <p>{track.title} - {track.artist}</p>

                                <TrackDeleteBtn trackId={track._id} getAllTracks={getAllTracks} />

                            </>

                        )

                    })
                    :
                    <ClipLoader
                        color='#338867'
                    />

            }
        </div>
    )
}

export default TrackList


