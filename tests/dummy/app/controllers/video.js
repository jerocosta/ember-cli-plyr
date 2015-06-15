import Ember from 'ember';

const { Logger } = Ember;

export default Ember.Controller.extend({
  videoPlyr: null,
  videoOptions: {
    controls: ["restart", "rewind", "play", "fast-forward", "current-time", "duration", "mute", "volume", "captions", "fullscreen"]
  },
  actions: {
    playPauseVideo() {
      const videoPlyr = this.get('videoPlyr');
      videoPlyr.togglePlay();
    },
    playingVideo() {
      Logger.debug('playingVideo !!');
    },
    suspendVideo() {
      Logger.debug('suspendVideo !!');
    }
  }
});
