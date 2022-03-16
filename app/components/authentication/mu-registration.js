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
  @tracked isLoading;
  @tracked errorMessage;


  get forbiddenMessage() {
    return this.args.forbiddenMessage || "You don't have access to this application";
  }

  get failureMessage() {
    return this.args.failureMessage || 'Something went wrong. Please try again later.';
  }

  @action
  async register(e) {
    e.preventDefault();

    try {
      this.isLoading = true;
      let result = await fetch('/accounts', {
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

      if(!result.ok){
        throw result.text;
      }

      // await this.session.authenticate('authenticator:mu-semtech', {
      //   nickname: this.nickname,
      //   password: this.password,
      // });
      UIkit.modal('#modal-authentication').hide();
    } catch(e){
      if (e.errors && e.errors.length && e.errors[0].title) {
        this.errorMessage = e.errors[0].title;
      } else {
        if (e.status == 403)
          this.errorMessage = this.forbiddenMessage;
        else
          this.errorMessage = this.failureMessage;
      }
    } finally {
      this.isLoading = false;
    }
  }
}
