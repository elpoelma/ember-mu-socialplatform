import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service session;
    @service account;
    @service store;
    beforeModel() {
        return this._loadLoggedInAccount();
    }

    async _loadLoggedInAccount(){
        
        try {
            await this.account.load();
            console.log(this.account.userAccount.nickname)
        } catch(err) {
            await this.session.invalidate();
        }
    }
}
