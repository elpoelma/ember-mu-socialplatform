import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostRoute extends Route {
  @service store!: Store;

  model(params: { post_id: string | number }) {
    return this.store.findRecord('post', params.post_id);
  }
}
