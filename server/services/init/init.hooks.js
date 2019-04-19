

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [async (context) => {
      if (context.id === 'state'){
        const users = await context.app.service('users').find()
        if (users.total === 0){
          context.result.state = 'init'
        } else {
          context.result.state = 'login'
        }
      }
    }],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
