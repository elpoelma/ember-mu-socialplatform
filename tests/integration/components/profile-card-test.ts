import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Store from '@ember-data/store';

module('Integration | Component | profile-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let store: Store = this.owner.lookup('service:store');

    let account = store.createRecord('account', {
      nickname: 'john200',
    });

    let person = store.createRecord('person', {
      name: 'John Doe',
      account: account,
    });

    this.set('account', account);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ProfileCard @account={{this.account}}/>`);

    assert.dom('.uk-card').exists();

    assert.dom('.uk-card-title').hasText(person.name);

    assert.dom('.uk-card-body h5').hasText(account.formattedNickname);
  });
});
