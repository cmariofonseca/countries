import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import './TourList.scss';

import axios from 'axios';

class TourList extends Component {

  state = {
    countries: []
  }

  componentWillMount() {
    this.loadCountries();
  }

  loadCountries() {
    axios.get('https://restcountries.eu/rest/v2/region/americas')
    .then(result => {
      let tempArray = [];
      let i = 0;
      result.data.forEach(country => {
        tempArray.push(Object.assign(country, { id: i }));
        i++;
      });
      this.setState({ countries: tempArray });
      console.log(this.state.countries);
    })
    .catch(error => console.error(error));
  }

  removeTour = id => {
    console.log(id);
    let tempArray = this.state.countries.filter(country => country.id !== id);
    this.setState({ countries: tempArray });
  }

  render() {

    return (
      <section className="tourList">
        {this.state.countries.map(country => {
          return <Tour key={ country.id } country={ country } removeTour={ this.removeTour } />
        })}
      </section>
    );
  }

}

export default TourList;