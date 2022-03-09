import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
    @service account;
    @service session;
    async model(){
        let result = Ember.A();
        if(this.session.isAuthenticated && this.account.userAccount){
            let following = await this.account.userAccount.owner.get('follows');
            let accounts = await Promise.all(following.getEach('account'));
            let postsList = await Promise.all(accounts.getEach('posts'))
            postsList.forEach(posts => {
                result.pushObjects(posts.toArray())
            })
            console.log(result);
            // return this.store.findAll('post');
        } else {
            result = this.store.findAll('post');
            console.log(result);
        }

        return result;
    }
}
