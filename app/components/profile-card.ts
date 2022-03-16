import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import AccountService from 'frontend/services/account';
import SessionService from 'frontend/services/session';
import Store from '@ember-data/store';

export default class ProfileCardComponent extends Component {
  @service
  store!: Store;
  @service
  account!: AccountService;
  @service
  session!: SessionService;

  @action
  async follow(person: any, event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.session.isAuthenticated && this.account.userAccount) {
      let loggedInPerson = await this.account.userAccount.owner;
      let following = await loggedInPerson.follows;
      following.pushObject(await person);
      loggedInPerson.save();
    }
  }

  @action
  async unfollow(person: any, event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.session.isAuthenticated && this.account.userAccount) {
      let loggedInPerson = await this.account.userAccount.owner;
      let following = await loggedInPerson.follows;
      following.removeObject(await person);
      loggedInPerson.save();
    }
  }
}
