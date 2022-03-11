import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
    @service account;
    @service session;
    async model(){
        let result = Ember.A();
        if(this.session.isAuthenticated && this.account.userAccount){
            let owner = await this.account.userAccount.owner;

           let person = await this.store.findRecord('person', owner.id, {
                include: "follows,follows.account,follows.account.posts"
            })
            person.follows.forEach(async following => {
                let posts = await following.account.get("posts");
                result.pushObjects(posts.toArray());
            })
        } else {
            result = this.store.findAll('post');
        }

        return result;
    }
}
