import Ember from 'ember';

export default Ember.Controller.extend({
  audioPlyr: null,
  videoPlyr: null,
  actions: {
    playPauseAudio() {
      const audioPlyr = this.get('audioPlyr');
      audioPlyr.togglePlay();
    }
  }
});
