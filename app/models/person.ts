import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string')
  name!: string;
  @belongsTo('account') account: any;
  @hasMany('person') follows: any;
  @hasMany('person', { inverse: 'follows' }) followers: any;

  get nameInitial() {
    if (this.name) {
      return this.name[0];
    }
    return undefined
  }
}
