import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class MyProfileController extends Controller {
  @service session;
  @service account;
}
