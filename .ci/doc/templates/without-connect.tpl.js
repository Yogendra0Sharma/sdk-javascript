// Loads the Kuzzle SDK module and the websocket protocol
const {
  Kuzzle,
  WebSocket
} = require('kuzzle-sdk');

// Instantiates a Kuzzle client
const
  kuzzle = new Kuzzle(
    new WebSocket('kuzzle', { autoReconnect: false })
  );

// Adds a listener to detect any connection problems
kuzzle.on('networkError', error => {
  console.error(`Network Error: ${error.message}`);
});

(async () => {
  [snippet-code] finally {
    kuzzle.disconnect();
  }
})();
