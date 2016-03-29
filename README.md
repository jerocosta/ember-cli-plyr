# ember-cli-plyr

A simple HTML5, YouTube and Vimeo player for EmberJS.

[![Image of Plyr](https://camo.githubusercontent.com/6e100c68f54de3a9dfbc61e31ce867bc0a57c82d/68747470733a2f2f63646e2e706c79722e696f2f7374617469632f706c79722d76312e352e6a7067)](http://plyr.io)

## Installation

```sh
ember install ember-cli-plyr
```

## Usage

#### Video

```handlebars
{{video-plyr
  mp4="/path/to/video.mp4"
  webm="/path/to/video.webm"
  poster="/path/to/poster.jpg"
  captions="/path/to/captions.vtt"
}}

```

#### Audio

```handlebars
{{audio-plyr
  mp3="/path/to/audio.mp3"
  ogg="/path/to/audio.ogg"
}}

```

#### Youtube

```handlebars
{{youtube-plyr
  video_id="xyxyxyxyxyx"
}}

```

#### Vimeo

```handlebars
{{vimeo-plyr
  video_id="12121212121"
}}

```

-
#### Credits
- [The original js component by @sam_potts.](https://github.com/Selz/plyr)


#### Copyright and License
[The MIT license](license.md).
