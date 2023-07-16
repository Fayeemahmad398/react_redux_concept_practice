import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Selects_song from "../redux/actions/songs.actions";

const SongsList = () => {
  const songslist = useSelector((state) => {
    return state.songsListReducer;
  });
  // console.log(songslist);

  const dispatch = useDispatch();
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>SongsList</h1>
      {songslist.map((song, index) => {
        return (
          <h3
            key={index}
            style={{ border: "1px solid grey", padding: "20px" }}
            onClick={() => {
              dispatch(Selects_song(song));
            }}
          >
            {song.song}
          </h3>
        );
      })}
    </div>
  );
};
export default SongsList;
