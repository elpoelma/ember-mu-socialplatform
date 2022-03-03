import Model, { attr, belongsTo } from '@ember-data/model';

export default class AccountModel extends Model {
    @attr('string') nickname;
    @belongsTo('person') person;
}
