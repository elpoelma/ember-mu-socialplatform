import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

interface FormInputArgs {
  inputType: string;
}

export default class FormInput extends Component<FormInputArgs> {
  get inputType() {
    return this.args.inputType || 'text';
  }

  get inputId() {
    return guidFor(this);
  }
}
