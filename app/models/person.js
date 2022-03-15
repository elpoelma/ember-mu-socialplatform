import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string') name;
  @belongsTo('account') account;
  @hasMany('person') follows;
  @hasMany('person', { inverse: 'follows' }) followers;

  get nameInitial() {
    if (this.name) {
      return this.name[0];
    }
  }
}
