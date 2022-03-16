import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AccountModel extends Model {
  @attr('string')
  nickname!: string;
  @belongsTo('person', { inverse: 'account' }) owner: any;
  @hasMany('post', { inverse: 'author' }) posts: any;

  get formattedNickname() {
    return '@' + this.nickname;
  }
}
