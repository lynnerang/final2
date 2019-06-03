export const addPresidentData = presidentData => {
  return {
    type: 'ADD_PRESIDENT_DATA',
    payload: {
      presidentData
    }
  }
}

export const setLoading = bool => {
  return {
    type: 'SET_LOADING',
    bool
  }
}

export const setErrored = bool => {
  return {
    type: 'SET_ERRORED',
    bool
  }
}
