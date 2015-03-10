# ember-cli-plyr

This `ember-cli` addon is the fastest way to add the Plyr.js HTML5 media component to your Ember projects.

[![Image of Plyr](https://cdn.plyr.io/static/plyr.png?1)](http://plyr.io)

##Installation

```sh
ember addon:install ember-cli-plyr
```

##Usage

####Video
```handlebars
{{video-plyr 
  mp4="//cdn.selz.com/plyr/1.0/movie.mp4" 
  webm="//cdn.selz.com/plyr/1.0/movie.webm" 
  poster="//cdn.selz.com/plyr/1.0/poster.jpg" 
  captions="//cdn.selz.com/plyr/1.0/movie_captions_en.vtt"
}}

```
####Audio
```handlebars
{{audio-plyr 
  mp3="//cdn.selz.com/plyr/1.0/logistics-96-sample.mp3"
  ogg="//cdn.selz.com/plyr/1.0/logistics-96-sample.ogg"
}}

```

-
#### Credits
- [The original js component.](https://github.com/Selz/plyr)


#### Copyright and License
[The MIT license](license.md).