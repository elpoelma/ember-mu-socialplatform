import MuLoginComponent from 'ember-mu-login/components/mu-login';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MyMuLoginComponent extends MuLoginComponent {
  @service session: any;

  @action
  async login(e): Promise<void> {
    e.preventDefault();
    await super.login(e);
    if (!this.errorMessage) {
      UIkit.modal('#modal-authentication').hide();
    }
  }
}
