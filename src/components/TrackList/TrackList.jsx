import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import TrackDeleteBtn from './TrackDeleteBtn';
import TrackEditBtn from './TrackEditBtn';
import TrackPlayBtn from './TrackPlayBtn';


const TrackList = ({ setEditTrack, setFormIsShown, getAllTracks, tracks, setNowPlaying }) => {

    return (
        <div className="track-list-container">
            <h2>Track List</h2>
            <ol className="track-flex">
                {
                    tracks.length
                        ?
                        tracks.map(track => {
                            return (
                                <div key={track._id}  className="track-card">
                                    <p>{track.title} by <span>{track.artist}</span></p>
                                     
                                     <div className="button-group">
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


