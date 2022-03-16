import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('onSubmit', () => {});

    this.set('onCancel', () => {});

    await render(
      hbs`<Forms::Post @onSubmit={{this.onSubmit}} @onCancel={{this.onCancel}}/>`
    );

    assert.expect(0);
  });
});
