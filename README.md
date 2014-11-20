# Ember Rework

Use rework CSS with your Ember app.

## Installation

```
npm i --save-dev ember-cli-rework
```

## Usage

This addon will, by default, look for `app/styles/app.css` and compile it
into `dist/assets/your-app-name.css`. However, you will have tell the addon
which plugins to use.

```javascript
var app = EmberApp({
  reworkOptions: {
    basePlugins: {
      reworkNPM: true,
      reworkVars: true,
      reworkCalc: false,
      reworkCustomMedia: true
    }
  }
});
```

By default, this addon comes bundled with the more popular plugins, so you can just
set them to true in order to add them to the rework compilation process. You can also
include an array of custom plugins, too:

```javascript
var classPrefix = require('rework-class-prefix');
var flexGrid = require('rework-flex-grid');
var colors = require('rework-colors')

var app = EmberApp({
  reworkOptions: {
    basePlugins: {
      reworkNPM: true,
      reworkVars: true,
      reworkCustomMedia: true
    },
    customPlugins: [
      classPrefix('my-class-prefix'),
      flexGrid(),
      colors()
    ]
  }
});
```

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
