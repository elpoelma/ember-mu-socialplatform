import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('posts');
  this.route('users');
  this.route('my-profile');
  this.route('post', { path: '/posts/:post_id' });
});
