import Route from '@ember/routing/route';

export default class PersonRoute extends Route {

    model(){
        return this.store.findAll('person');
    }
}
