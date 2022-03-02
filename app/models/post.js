import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') headline;
  @attr('string') articlebody;
  @attr('string') thumbnailurl;
}
