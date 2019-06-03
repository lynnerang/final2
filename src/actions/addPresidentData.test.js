import * as actions from '../actions'

describe('actions', () => {
  let mockPresData;

  beforeEach(() => {
    mockPresData = {
      number: 2,
      president: "John Adams",
      birth_year: 1735,
      death_year: 1826,
      took_office: "1797-03-04",
      left_office: "1801-03-04",
      party: "Democratic"
    }
  })

  it('should create an action to add president data', () => {
    const mockPresidentArray = [mockPresData]
    const expectedAction = {
      type: 'ADD_PRESIDENT_DATA',
      payload: {
        presidentData: mockPresidentArray
      }
    }
    expect(actions.addPresidentData(mockPresidentArray)).toEqual(expectedAction)
  })
})