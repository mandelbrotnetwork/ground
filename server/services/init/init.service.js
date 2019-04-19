// Initializes the `init` service on path `/init`
const createService = require('./init.class.js');
const hooks = require('./init.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/init', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('init');

  service.hooks(hooks);
};
