import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Store from '@ember-data/store';
import AccountService from 'frontend/services/account';
import SessionService from 'frontend/services/session';

export default class PostController extends Controller {
  @service
  store!: Store;
  @service
  account!: AccountService;
  @service
  session!: SessionService;

  @tracked
  editing: boolean = false;

  @tracked updatedHeadline: string = '';
  @tracked updatedBody: string = '';

  @action
  async updatePost(e) {
    e.preventDefault();
    console.log(this.updatedHeadline);
    this.model.headline = this.updatedHeadline;
    this.model.articlebody = this.updatedBody;
    await this.model.save();
    this.toggleEdit();
  }

  @action
  toggleEdit() {
    this.editing = !this.editing;
    this.updatedHeadline = this.model.headline;
    this.updatedBody = this.model.articlebody;
  }
}
