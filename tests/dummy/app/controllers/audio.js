import Ember from 'ember';

const { Logger } = Ember;

export default Ember.Controller.extend({
  audioPlyr: null,
  audioOptions: {
    controls: [ 'play', 'volume', 'restart', 'time', 'mute' ]
  },
  actions: {
    playPauseAudio() {
      const audioPlyr = this.get('audioPlyr');
      audioPlyr.togglePlay();
    },
    playingAudio() {
      Logger.debug('playingAudio !!');
    },
    suspendAudio() {
      Logger.debug('suspendAudio !!');
    }
  }
});
