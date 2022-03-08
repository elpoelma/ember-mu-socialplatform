import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostComponent extends Component {

    @service store;
    @service account;
    @service session;
    @action
    async removePost(post, event){
        event.preventDefault();
        await post.destroyRecord();
    }
}
