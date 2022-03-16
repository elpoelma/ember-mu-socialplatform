import { inject as service } from '@ember/service';
import BaseSessionService from 'ember-simple-auth/services/session';
import AccountService from './account';

export default class SessionService extends BaseSessionService {
  @service
  account!: AccountService;

  async handleAuthentication() {
    super.handleAuthentication(...arguments);
    try {
      await this.account.load();
    } catch (err) {
      await this.session.invalidate();
    }
  }
}
