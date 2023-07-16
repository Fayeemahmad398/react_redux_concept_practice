import React from "react";
import SongList from "./Components/Songslist.js";
import SongDetails from "./Components/SongsDetails.js";

function App() {
  return (
    <div>
      <SongList />
      <div>
        <h1>SongDetails given below</h1>
        <SongDetails />
      </div>
    </div>
  );
}

export default App;
