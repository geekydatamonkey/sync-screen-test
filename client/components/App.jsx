import React from 'react';

const App = React.createClass({

  componentDidMount() {
    this.autoAdvanceSlide();
  },

  getInitialState() {
    return {
      active: 0,
      slides: [
        {_id: 0},
        {_id: 1},
        {_id: 2},
        {_id: 3},
        {_id: 4},
        {_id: 5}
      ],
      duration: 1000,
    };
  },

  getSlideClasses(currentSlideId) {
    if (currentSlideId === this.state.active) {
      return 'active';
    }
  },

  autoAdvanceSlide() {
    const nextId = (this.state.active + 1) % (this.state.slides.length);
    this.setState({
      active: nextId,
    });
    setTimeout(this.autoAdvanceSlide, this.state.duration);
  },

  renderSlides() {
    return this.state.slides.map((slide) => {
      return (
        <li key={slide._id} className={this.getSlideClasses(slide._id)}>
          {slide._id}
        </li>
      );
    });
  },

  render() {
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
  },
});

export default App;
