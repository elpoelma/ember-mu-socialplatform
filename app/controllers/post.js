import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PostController extends Controller {
  @service store;
  @service account;
  @service session;

  @tracked editing;

  @tracked updatedHeadline;
  @tracked updatedBody;

  @action
  async updatePost(e) {
    e.preventDefault();
    console.log(this.updatedHeadline)
    this.model.headline = this.updatedHeadline;
    this.model.articlebody = this.updatedBody;
    await this.model.save();
    this.toggleEdit()
  }

  @action
  toggleEdit() {
    this.editing = !this.editing;
    this.updatedHeadline = this.model.headline;
    this.updatedBody = this.model.articlebody;
  }
}
