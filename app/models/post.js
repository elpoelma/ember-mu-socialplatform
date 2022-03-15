import Model, { attr, belongsTo  } from '@ember-data/model';

export default class PostModel extends Model {
  
  @attr('string') headline;
  @attr('string') articlebody;
  @attr('string') thumbnailurl;
  @belongsTo('account') author;
  @attr('date', {
    defaultValue() { return new Date(); }
  }) datecreated;


  get dateString(){
    return this.datecreated.toDateString();
  }
}
