const users = require('./users/users.service.js');
const init = require('./init/init.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(init);
};
