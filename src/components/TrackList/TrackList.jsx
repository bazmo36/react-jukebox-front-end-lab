import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import TrackDeleteBtn from './TrackDeleteBtn';
import TrackEditBtn from './TrackEditBtn';
import TrackPlayBtn from './TrackPlayBtn';


const TrackList = ({ setEditTrack, setFormIsShown, getAllTracks, tracks, setNowPlaying }) => {

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

                                    <TrackPlayBtn
                                        track={track}
                                        setNowPlaying={setNowPlaying}
                                    />

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


