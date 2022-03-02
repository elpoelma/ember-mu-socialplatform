import Route from '@ember/routing/route';

export default class PostsRoute extends Route {

    model(){
        return this.store.findAll('post');
    }
}
