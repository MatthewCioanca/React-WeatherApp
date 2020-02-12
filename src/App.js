import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchCity from './Components/SeachCity'
import Weather from './Components/Weather'
import { Spring } from 'react-spring/renderprops'
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchCity: '',
      weatherData: {},
      weatherResult: false,
    }
  }


  connectWeatherAPI = async (event) => {
    const that = this
    event.preventDefault()
    const current = fetch(`http://api.weatherstack.com/current?access_key=52031ab2ead4898e6fd5d95eb8c5d81a&query=${this.state.searchCity}`)
    const forecast = fetch(`http://api.weatherstack.com/forecast?access_key=52031ab2ead4898e6fd5d95eb8c5d81a&query=${this.state.searchCity}&forecast_days=7&hourly=1`)

    Promise.all([current, forecast])
      .then(response => Promise.all(response.map(r => r.json())))
      .then(([curr, fore]) =>{
        console.log(curr)
        console.log(fore)
      })

  }



  handleSearchChange = (event) => {
    this.setState({ searchCity: event.target.value })
  }

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -50 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props}>
            <SearchCity connectWeatherAPI={this.connectWeatherAPI} handleChange={this.handleSearchChange} />
            {this.state.weatherResult ? <Weather weatherData={this.state.weatherData} /> : null}
          </div>
        )}
      </Spring>

    );
  }
}

export default App;
