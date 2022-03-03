import MuLoginComponent from 'ember-mu-login/components/mu-login';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MyMuLoginComponent extends MuLoginComponent {
  @service session;
  
  @action
  async login(e) {
    super.login(e);

    UIkit.modal("#modal-login").hide();
  }

  
}
