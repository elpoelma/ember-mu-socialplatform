import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class PersonController extends Controller {
    @tracked newName = '';
    @tracked newAge = 0;

    @service store;

    @action
    createPerson(event){
        event.preventDefault()
        const person = this.store.createRecord('person', {
            name: this.newName,
            age: this.newAge
        });
        person.save();
        this.newName = '';
        this.newAge = 0;
    }

    @action
    removePerson(person, event){
        event.preventDefault();
        person.destroyRecord();
    }

}
