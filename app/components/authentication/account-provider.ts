import { service } from '@ember/service';
import Component from '@glimmer/component';
import AccountService from 'frontend/services/account';
import SessionService from 'frontend/services/session';

interface AuthenticationAccountProviderArgs {}

export default class AuthenticationAccountProvider extends Component<AuthenticationAccountProviderArgs> {
  @service account!: AccountService;
  @service session!: SessionService;
}
