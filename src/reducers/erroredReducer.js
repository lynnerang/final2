const erroredReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_ERRORED':
      return action.bool
    default:
      return state;
  }
}

export default erroredReducer;