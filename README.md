# Ember CLI Rework

_Currently under development._

Use [Rework CSS](https://github.com/reworkcss/) in your Ember app.

## Installation

```
npm i --save-dev ember-cli-rework
```

## Usage

This addon will, by default, look for `app/styles/app.css` and compile it
into `dist/assets/your-app-name.css`. However, you will have tell the addon
which plugins to use.

```javascript
var vars = require('rework-vars');
var customMedia = require('custom-media');

var app = EmberApp({
  reworkPlugins: [vars(), customMedia()]
});
```

A more involved plugin example:

```javascript
var vars = require('rework-vars');
var classPrefix = require('rework-class-prefix');
var flexGrid = require('rework-flex-grid');
var colors = require('rework-colors')

var app = EmberApp({
  reworkOptions: {
  reworkPlugins[
    vars(),
    classPrefix('em-'),
    flexGrid({
      columns: 12,
      classNames: {
        grid: 'g',
        row: 'r',
        col: 'c'
      }
    }),
    colors()
  ]
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
