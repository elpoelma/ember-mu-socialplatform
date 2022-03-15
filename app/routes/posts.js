import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {

    @service account;
    @service session;

    model(){
        if(this.session.isAuthenticated && this.account.userAccount){
            return this.account.userAccount.get('owner');
        } else {
            return this.store.findAll('post');
        }
    }
}
