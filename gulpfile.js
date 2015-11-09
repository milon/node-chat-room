var elixir = require('laravel-elixir');

elixir(function(mix) {
  mix.browserify('ChatRoom.js', 'resources/build', 'resources/js');
});
