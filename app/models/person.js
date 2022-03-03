import Model, { attr, belongsTo } from '@ember-data/model';

export default class PersonModel extends Model {
    @attr('string') name;
    @belongsTo('account') account;
}
