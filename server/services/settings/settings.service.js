// Initializes the `settings` service on path `/settings`
const createService = require('feathers-memory');
const hooks = require('./settings.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/settings', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('settings');

  service.hooks(hooks);
};
