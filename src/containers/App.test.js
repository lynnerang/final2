import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { addPresidentData } from '../actions'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App', () => {
  let mockPresidentData;

  beforeEach(() => {
    mockPresidentData = [{
      number: 2,
      president: "John Adams",
      birth_year: 1735,
      death_year: 1826,
      took_office: "1797-03-04",
      left_office: "1801-03-04",
      party: "Democratic"
    }];
  })
  
  describe('mapStateToProps', () => {
    it('should return an object with the president data array', () => {
      const mockState = {
        presidentData: mockPresidentData,
        fakeProp: 'hi'
      }
      
      const expected = {
        presidentData: mockPresidentData
      }
      
      const mappedProps = mapStateToProps(mockState)
      
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addPresidentData action', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = addPresidentData(mockPresidentData);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addPresidentData(mockPresidentData);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
  
})