const app = require('../../server/app');

describe('\'init\' service', () => {
  it('registered the service', () => {
    const service = app.service('init');
    expect(service).toBeTruthy();
  });
});
