import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
    @service account;
    @service session;
    async model(){
        let result;
        if(this.session.isAuthenticated && this.account.userAccount){
            let following = await this.account.userAccount.owner.get('follows').getEach('account');
            let followingAccounts = await following.getEach('account');
            console.log(followingAccounts);
            let posts = await following.getEach('posts');
            console.log(posts)
            result = posts;
        } else {
            result = await this.store.findAll('post');
        }

        return result;
    }
}
