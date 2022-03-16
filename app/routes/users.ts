import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import Service, { inject as service } from '@ember/service';

export default class UsersRoute extends Route {
  @service
  store!: Store;

  model() {
    return this.store.findAll('person');
  }
}
