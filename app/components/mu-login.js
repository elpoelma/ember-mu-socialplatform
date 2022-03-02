import MuLoginComponent from 'ember-mu-login/components/mu-login';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { warn } from '@ember/debug';
export default class MyMuLoginComponent extends MuLoginComponent {

    @action
  async login(e) {
    super.login(e);

    UIkit.modal("#modal-login").hide();
  }
}
