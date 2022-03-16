import Store from '@ember-data/store';
import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import SessionService from './session';

export default class AccountService extends Service {
  @service
  session!: SessionService;
  @service
  store!: Store;
  @tracked
  userAccount: any;

  async load() {
    let accountId =
      this.session.data.authenticated.relationships.account.data.id;

    if (accountId) {
      let account = await this.store.findRecord('account', accountId, {
        include: 'owner',
      });
      this.userAccount = account;
    }
  }
}
