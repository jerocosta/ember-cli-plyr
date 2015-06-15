import Ember from 'ember';
// import config from '../config/environment';

const { computed, Logger, on } = Ember;

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
  options:    null,
  plyrObject: null,

  setupPlyr: on('didInsertElement', function() {
    const options = this.get('options');
    if (options !== null) {
      plyr.setup(options);
    } else {
      plyr.setup();
    }
    this.set('plyrObject', this.element.plyr);
    Logger.debug('plyrObject ? ', this.get('plyrObject'));
  }),

  teardownPlyr: on('willDestroyElement', function() {
    this.get('ember-plyr').destroy();
  })
});
