import { useState, useEffect } from "react";
import axios from "axios";
import TrackForm from "./components/TrackForm/TrackForm";
import TrackList from "./components/TrackList/TrackList";
import NowPlaying from "./components/NowPlaying/NowPlaying";


const App = () => {

  const [formIsShown, setFormIsShown] = useState(false)
  const [editTrack, setEditTrack] = useState(null)
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




  const handleShowFromClick = () => {
    setEditTrack(null)
    setFormIsShown(true)

  }


  return (
    <>
      <h1>Welcom To The Tracks App!</h1>
      {!formIsShown && (
        <button onClick={handleShowFromClick}>Add New Track</button>
      )}


      {
        formIsShown ?
          (
            <TrackForm
              setFormIsShown={setFormIsShown}
              editTrack={editTrack}
              setEditTrack={setEditTrack}
              getAllTracks={getAllTracks}
            />
          )
          :
          (
            <TrackList
              setFormIsShown={setFormIsShown}
              setEditTrack={setEditTrack}
              tracks={tracks}
              getAllTracks={getAllTracks}
            />
          )
      }

    </>
  )
};

export default App;