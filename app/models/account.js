import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AccountModel extends Model {
    @attr('string') nickname;
    @belongsTo('person', {inverse: 'account'}) owner;
    @hasMany('post', {inverse: 'author'}) posts;

    get formattedNickname(){
        return '@' + this.nickname;
    }
}
