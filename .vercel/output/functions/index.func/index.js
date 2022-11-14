const config = require('config');

module.exports = (req, res) => {
  const greeting = config.get('hello');

  res.setHeader('Content-Type', 'text/plain');
  res.end('hello ' + greeting);
};
