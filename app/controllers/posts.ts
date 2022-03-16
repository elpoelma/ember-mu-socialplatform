import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import SessionService from 'frontend/services/session';
import PostModel from 'frontend/models/post';
export default class PostsController extends Controller {
  @service
  store!: Store;
  @service
  session!: SessionService;

  @action
  removePost(post: PostModel, event: Event) {
    event.preventDefault();
    post.destroyRecord();
  }
}
