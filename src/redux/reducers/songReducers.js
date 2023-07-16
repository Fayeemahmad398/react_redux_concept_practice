const Initial_Value = [];

const songReducers = (state = Initial_Value, actions) => {
  // console.log(state);
  switch (actions.type) {
    case "SELECTS_SONG":
      return [...state, actions.payload];
    default:
      return state;
  }
};
export default songReducers;
