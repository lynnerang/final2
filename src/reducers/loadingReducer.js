const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.bool
    default:
      return state;
  }
}

export default loadingReducer;