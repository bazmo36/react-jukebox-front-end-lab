import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import TrackDeleteBtn from './TrackDeleteBtn';
import TrackEditBtn from './TrackEditBtn';


const TrackList = ({ setEditTrack, setFormIsShown, getAllTracks, tracks }) => {
    
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
                                    <TrackEditBtn
                                        track={track}
                                        setEditTrack={setEditTrack}
                                        setFormIsShown={setFormIsShown}
                                    />

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


