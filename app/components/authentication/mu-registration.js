import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MuRegistrationComponent extends Component {
  @service session;
  @tracked name;
  @tracked nickname;
  @tracked password;
  @tracked passwordConfirm;

  @action
  async register(e) {
    e.preventDefault();
    const result = await fetch('/accounts', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      }),
      body: JSON.stringify({
        data: {
          type: 'accounts',
          attributes: {
            name: this.name,
            nickname: this.nickname,
            password: this.password,
            'password-confirmation': this.passwordConfirm,
          },
        },
      }),
    });
    if (result.ok) {
      await this.session.authenticate('authenticator:mu-semtech', {
        nickname: this.nickname,
        password: this.password,
      });
    } else {
      throw result;
    }
    UIkit.modal('#modal-authentication').hide();
  }
}
