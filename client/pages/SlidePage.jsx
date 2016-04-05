import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Slides } from '../../both/collections.js'

class SlidePage extends Component {
  constructor(props) {
    super(props);
  }

  getPageClassNames() {
    console.log(this.props.slide);
    const classNames = ['page-slidepage','container'];
    if (!this.props.slide.isActive) {
      classNames.push('is-hidden');
    }
    return classNames.join(' ');
  }

  render() {
    console.log(this.props);
    return (
      <div className={ this.getPageClassNames() }>
        <p>{this.props.slide.text}</p>
      </div>
    );
  }
}

SlidePage.propTypes = {
  params: PropTypes.object.isRequired,
}

export default createContainer(({ params }) => {
  const slideNumber = parseInt(params.slideNumber);
  // why can't I use findOne?
  const slide = Slides.findOne({ slideNumber });
  const isReady = !!slide;

  return {
    isReady,
    slideNumber,
    slide: isReady ? slide : {},
  };
}, SlidePage);
