import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostComponent extends Component {

    @service store;
    @action
    removePost(post, event){
        event.preventDefault();
        post.destroyRecord();
    }
}
