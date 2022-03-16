import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostComponent extends Component {
  @service store: any;
  @service account: any;
  @service session: any;

  @action
  async removePost(post: { destroyRecord: () => any; }, event: { preventDefault: () => void; }) {
    event.preventDefault();
    await post.destroyRecord();
  }
}
