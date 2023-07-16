import { useSelector } from "react-redux";

const SongDetails = () => {
  const songDetails = useSelector((state) => {
    return state.selectedSong;
  });
  return (
    songDetails &&
    songDetails.map((song) => (
      <div style={{ border: "2px solid black", padding: "5px", margin: "5px" }}>
        <h4>{song.song}</h4>
        <h4>{song.author}</h4>
      </div>
    ))
  );
};
export default SongDetails;
