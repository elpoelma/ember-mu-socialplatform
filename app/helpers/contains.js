import { helper } from '@ember/component/helper';

export default helper(function contains([list, id]) {
  return list.isAny('id', id);
});
