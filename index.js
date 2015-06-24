/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-plyr',

  included: function(app) {
    this._super.included(app);

    // Load bower assets.
    app.import(app.bowerDirectory + '/plyr/dist/plyr.js');
    app.import(app.bowerDirectory + '/plyr/dist/plyr.css');
    app.import(app.bowerDirectory + '/plyr/dist/sprite.svg', { destDir: 'sprites' });
  },
  contentFor: function(type) {
    if (type === 'body') {
      // Load SVG icons for video player.
      return "<script>" +
              "(function(d,p){" +
                  "var a=new XMLHttpRequest()," +
                      "b=d.body;" +
                  "a.open(\"GET\",p,!0);" +
                  "a.send();" +
                  "a.onload=function(){" +
                      "var c=d.createElement(\"div\");" +
                      "c.style.display=\"none\";" +
                      "c.innerHTML=a.responseText;" +
                      "b.insertBefore(c,b.childNodes[0])" +
                  "}" +
              "})(document,\"sprites/sprite.svg\");" +

              "</script>";
    }
  }
};
