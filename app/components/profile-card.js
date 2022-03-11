import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProfileCardComponent extends Component {

    @service store;
    @service account;
    @service session;
    @action
    async follow(person, event){
        event.preventDefault();
        if(this.session.isAuthenticated && this.account.userAccount){
            let loggedInPerson = await this.account.userAccount.owner;
            let following = await loggedInPerson.follows;
            following.pushObject(await person);
            loggedInPerson.save();
        }
    }

    @action
    async unfollow(person, event){
        event.preventDefault();
        if(this.session.isAuthenticated && this.account.userAccount){
            let loggedInPerson = await this.account.userAccount.owner;
            let following = await loggedInPerson.follows;
            following.removeObject(await person);
            loggedInPerson.save();
        }
    }

    


}
