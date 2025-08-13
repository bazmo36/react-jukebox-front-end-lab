import { useState } from "react";
import TrackForm from "./components/TrackForm/TrackForm";
import TrackList from "./components/TrackList/TrackList";
import NowPlaying from "./components/NowPlaying/NowPlaying";


const App = () => {
 
  const [formIsShown,setFormIsShown] = useState(false)

  const handleShowFromClick = () => {
    console.log('Show form button is clicked')
    setFormIsShown(true)

  }
  

  return (
    <>
      <h1>Welcom To The Tracks App!</h1>
      <button onClick={handleShowFromClick}>Add A Track</button>
     
      {
        formIsShown
        ?
        <TrackForm setFormIsShown={setFormIsShown} />
        :
        <TrackList />
      }
      
    </>
  )
};

export default App;