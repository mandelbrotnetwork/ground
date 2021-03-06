const handle = require('../nextApp').handle;

// Add your own services here.
// If the path is not been added here
// it will be passed to next.js
const feathersServices = {
  'users': true,
  'init': true
};

const isFeathersService = path => feathersServices[path] === true;

module.exports = function(options = {}) {
  return function next(req, res, next) {
    return isFeathersService(req.path.split('/')[1]) ? next() : handle(req, res);
  };
};
