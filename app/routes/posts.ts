import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import Service, { inject as service } from '@ember/service';
import AccountService from 'frontend/services/account';
import SessionService from 'frontend/services/session';

export default class PostsRoute extends Route {
  @service
  account!: AccountService;
  @service
  store!: Store;
  @service
  session!: SessionService;

  model() {
    if (this.session.isAuthenticated && this.account.userAccount) {
      return this.account.userAccount.get('owner');
    } else {
      return this.store.findAll('post');
    }
  }
}
