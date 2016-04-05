import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Slides } from '../../both/collections.js';

class HomePage extends Component {
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
      return (
        <li key={slide._id} className={this.getSlideClasses(slide)}>
          {slide.text}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Sync Screen Test</h1>
        <main>
          <ul>
            { this.renderSlides() }
          </ul>
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
 slides: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    slides: Slides.find({}).fetch(),
  };
}, HomePage);
