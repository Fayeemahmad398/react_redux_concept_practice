import {SELECTS_SONG} from "./actionTypes";

const Selects_song = (song) => {
  return {
    type: SELECTS_SONG,
    payload: song,
  };
};
export default Selects_song;


