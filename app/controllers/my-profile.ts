import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import AccountService from 'frontend/services/account';
import SessionService from 'frontend/services/session';

export default class MyProfileController extends Controller {
  @service
  session!: SessionService;
  @service
  account!: AccountService;
}
