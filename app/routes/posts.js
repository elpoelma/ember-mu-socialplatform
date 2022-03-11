import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
    @service account;
    @service session;
    async model(){
        let result = Ember.A();
        if(this.session.isAuthenticated && this.account.userAccount){
            let loggedInId = await this.account.userAccount.owner.get('id');
            console.log(loggedInId);
           let person = await this.store.findRecord('person', loggedInId, {
                include: "follows,follows.account,follows.account.posts"
            })

            let following = await person.get('follows');
            following.forEach(async followed => {
                console.log(followed)
                let account = await followed.get('account');
                let posts = await account.get("posts");
                result.pushObjects(posts.toArray());
            })
        } else {
            result = this.store.findAll('post');
        }

        return result;
    }
}
