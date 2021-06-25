const reducer = (state, action) => {
  console.log({state, action})
  if (action.mode) {
    console.log(action.mode)
    state.mode = action.mode
  }
  return state
};

export default reducer;