import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AccountService from 'frontend/services/account';
import SessionService from 'frontend/services/session';

export default class ApplicationRoute extends Route {
  @service
  session!: SessionService;
  @service
  account!: AccountService;
  @service
  store!: Store;
  beforeModel() {
    return this._loadLoggedInAccount();
  }

  async _loadLoggedInAccount() {
    try {
      await this.account.load();
    } catch (err) {
      await this.session.invalidate();
    }
  }
}
