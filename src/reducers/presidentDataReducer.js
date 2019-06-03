const presidentDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRESIDENT_DATA':
      return action.payload.presidentData
    default:
      return state;
  }
}

export default presidentDataReducer;