import Model from '@ember-data/model';

export default class UserModel extends Model {
    @attr('string') name;
    @attr('string') nickname;
}
