import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProfileCardComponent extends Component {
  @service store: any;
  @service account: { userAccount: { owner: any; }; };
  @service session: { isAuthenticated: any; };

  @action
  async follow(person: any, event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (this.session.isAuthenticated && this.account.userAccount) {
      let loggedInPerson = await this.account.userAccount.owner;
      let following = await loggedInPerson.follows;
      following.pushObject(await person);
      loggedInPerson.save();
    }
  }

  @action
  async unfollow(person: any, event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (this.session.isAuthenticated && this.account.userAccount) {
      let loggedInPerson = await this.account.userAccount.owner;
      let following = await loggedInPerson.follows;
      following.removeObject(await person);
      loggedInPerson.save();
    }
  }
}
