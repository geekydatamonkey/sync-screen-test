import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Slides } from '../../both/collections.js';

class App extends Component {

  constructor(props) {
    super(props);
  }

  getSlideClasses(slide) {
    if (slide.isActive) {
      return 'active';
    }
  }

  renderSlides() {
    return this.props.slides.map((slide) => {
      console.log(slide);
      return (
        <li key={slide._id} className={this.getSlideClasses(slide)}>
          {slide._id}
        </li>
      );
    });
  }

  render() {
    console.log
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <main>
          <ul>
            { this.renderSlides() }
          </ul>
        </main>
      </div>
    );
  }
}

App.propTypes = {
 slides: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    slides: Slides.find({}).fetch(),
  };
}, App);
