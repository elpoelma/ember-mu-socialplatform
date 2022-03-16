import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string')
  headline!: string;
  @attr('string')
  articlebody!: string;
  @attr('string')
  thumbnailurl!: string;
  @attr('string')
  image!: string;
  @belongsTo('account') author: any;
  @attr('date', {
    defaultValue() {
      return new Date();
    },
  })
  datecreated!: Date;

  get dateString() {
    return this.datecreated.toDateString();
  }
}
