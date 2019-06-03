import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPresidentData } from '../actions';
import './App.css';
import PresidentsContainer from '../components/PresidentsContainer/PresidentsContainer';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasErrored: false,
      filter: 'All'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/presidents')
      .then(res => res.json())
      .then(data => {
        this.props.addPresidentData(data)
        this.setState({isLoading: false, hasErrored: false})
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          hasErrored: true
        })
        console.log(err)
      })
  }

  getFilterOptions = () => {
    let parties = [];
    this.props.presidentData.forEach(pres => {
      if (!parties.includes(pres.party)) {
        parties.push(pres.party)
      }
    })
    return parties.map(party => <option value={party} key={party}>{party}</option>)
  }

  handleChange = e => {
    this.setState({filter: e.target.value})
  }

  render() {
    const options = this.getFilterOptions();
    let page;
    const data = this.state.filter === 'All' ? this.props.presidentData
      : this.props.presidentData.filter(i => i.party === this.state.filter);

    if (this.state.isLoading) {
      page = "Loading..."
    } else if (this.state.hasErrored) {
      page = "Error loading page."
    } else {
      page = (
        <div className="App">
          <header className="App-header">
            <h1>Presidents and Assholes</h1>
            <select defaultValue="All" onChange={this.handleChange}>
              <option value="All">All</option>
              {options}
            </select>
          </header>
          <PresidentsContainer data={data}/>
        </div>
      );
    }

    return page;
  }
}

export const mapStateToProps = state => ({
  presidentData: state.presidentData
})

export const mapDispatchToProps = dispatch => ({
  addPresidentData: data => dispatch(addPresidentData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
