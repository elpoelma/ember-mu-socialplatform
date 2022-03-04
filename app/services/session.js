import { inject as service } from '@ember/service';
import BaseSessionService from 'ember-simple-auth/services/session'

export default class SessionService extends BaseSessionService {
    @service account;

    async handleAuthentication(){
        super.handleAuthentication(...arguments);
        try {
            await this.account.load();
            console.log(this.account.userAccount.nickname)
        } catch(err) {
            await this.session.invalidate();
        }
        
    }
}
