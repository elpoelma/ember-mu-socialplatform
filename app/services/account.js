import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AccountService extends Service {
  @service session;
  @service store;

  async load() {
    let accountId =
      this.session.data.authenticated.relationships.account.data.id;

    if (accountId) {
      let account = await this.store.findRecord('account', accountId, {
        include: 'owner',
      });
      this.set('userAccount', account);
    }
  }
}
