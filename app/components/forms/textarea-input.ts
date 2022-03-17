import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

interface FormsTextareaInputArgs {
  inputType: string;
  rows: number;
}

export default class FormsTextareaInput extends Component<FormsTextareaInputArgs> {
  get inputType() {
    return this.args.inputType || 'text';
  }

  get rows() {
    return this.args.rows || 5;
  }

  get inputId() {
    return guidFor(this);
  }
}
