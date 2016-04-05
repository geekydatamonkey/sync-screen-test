import { Meteor } from 'meteor/meteor';
import { Slides } from '../both/collections';

function initializeSlides() {
  for (let i = 0; i < 6; i++) {
    const slide = {
      slideNumber: i,
      text: `Slide ${i}`,
      isActive: false,
    };
    Slides.insert(slide);
  }
}

let activeSlide = 0;

function autoUpdateSlide() {
  activeSlide = (activeSlide + 1) % Slides.find().count();

  // turn off any active slide
  Slides.update(
    { isActive: true},
    { $set: { isActive: false }}
  );

  // activate new slide
  Slides.update(
    { slideNumber: activeSlide },
    { $set: { isActive: true }}
  );

  // set a timer to update after 1000ms
  Meteor.setTimeout(autoUpdateSlide, 1000);
  console.log(activeSlide);
}

Meteor.startup(() => {
  // Slides.remove({});
  if (Slides.find().count() === 0) {
    initializeSlides();
  }
  autoUpdateSlide();
});
