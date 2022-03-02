import Route from '@ember/routing/route';

export default class PostRoute extends Route {

    model(){
        return this.store.findAll('post');
    }
}
