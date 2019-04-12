import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {

  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  }

  render() {

    const { id, capital, flag, name, population } = this.props.country;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={ flag } alt="" />
          <span className="close-btn" onClick={ () => removeTour(id) }>
            <i className="fa fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{ name }</h3>
          <h4>{ capital }</h4>
          <h5>
            More information...
            <span onClick={ this.handleInfo }>
              <i className="fa fa-caret-square-down" />
            </span>
          </h5>
          { this.state.showInfo && <p>Number of inhabitnats: { population }</p> }
        </div>
      </article>
    );

  }

}

export default Tour;