import { action } from '@ember/object';
import Component from '@glimmer/component';

interface Args {
  onCancel: any;
}

export default class FormsPostComponent extends Component<Args> {
  @action
  cancel() {
    if (this.args.onCancel) {
      this.args.onCancel();
    }
  }
}
