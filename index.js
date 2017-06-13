/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-plyr',
  contentFor: function(type) {
    if (type === 'body') {
      // Load SVG icons for video player.
      return "<script>" +
             "(function(d, p){" +
                 "var a = new XMLHttpRequest()," +
                     "b = d.body;" +
                 "a.open('GET', p, true);" +
                 "a.send();" +
                 "a.onload = function() {" +
                     "var c = d.createElement('div');" +
                     "c.setAttribute('hidden', '');" +
                     "c.innerHTML = a.responseText;" +
                     "b.insertBefore(c, b.childNodes[0]);" +
                 "};" +
             "})(document, 'sprites/sprite.svg');" +
             "</script>";
    }
  },
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/plyr/dist/plyr.css');
    app.import(app.bowerDirectory + '/plyr/dist/sprite.svg', { destDir: 'sprites' });
  },
  isDevelopingAddon: function() {
    return true;
  }
};
