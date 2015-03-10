import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Component.extend({
  tagName:    'div',
  classNames: 'player',
  // Formats
  mp4:        "",
  webm:       "",
  captions:   "",
  poster:     "",
  mp3:        "",
  ogg:        "",

  setupPlyr: function() {
    plyr.setup();
  }.on('didInsertElement'),

  teardownPlyr: function() {
    this.get('ember-plyr').destroy();
  }.on('willDestroyElement'),
});


