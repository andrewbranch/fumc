import AuthenticatedRoute from './authenticated';

export default AuthenticatedRoute.extend({
  model() {
    return this.store.findAll('video-album');
  }
});
