import presidentDataReducer from './presidentDataReducer'

describe('presidentDataReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = presidentDataReducer(undefined, [])

    expect(result).toEqual(expected)
  })

  it('returns the correct state', () => {
    const mockPresidents = [{
      number: 2,
      president: "John Adams",
      birth_year: 1735,
      death_year: 1826,
      took_office: "1797-03-04",
      left_office: "1801-03-04",
      party: "Democratic"
    }];

    const action = {
      type: 'ADD_PRESIDENT_DATA',
      payload: {
        presidentData: mockPresidents
      }
    }

    const expectedState = mockPresidents;

    expect(presidentDataReducer(undefined, action)).toEqual(expectedState);
  });
})