import AuthenticatedRoute from './authenticated';

export default AuthenticatedRoute.extend({
  model: function () {
    return this.store.findAll('bulletin', { reload: true, backgroundReload: false });
  }
});
