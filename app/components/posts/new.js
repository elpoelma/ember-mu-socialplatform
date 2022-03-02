import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NewPostComponent extends Component {
    @tracked headline;
    @tracked body;
    @service store;

    @action
    createPost(event){
        event.preventDefault();

        const post = this.store.createRecord('post', {
            headline: this.headline,
            articlebody: this.body
        });
        post.save();
        this.headline = '';
        this.body = '';
        UIkit.modal("#modal-example").hide()
        
    }
}
