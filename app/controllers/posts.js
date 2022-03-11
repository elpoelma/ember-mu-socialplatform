import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class PostsController extends Controller {

    @service store;
    @service session;
    @action
    removePost(post, event){
        event.preventDefault();
        post.destroyRecord();
    }

}
