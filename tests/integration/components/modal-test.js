import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modal', function (hooks) {
  setupRenderingTest(hooks);

  test('The modal component accepts an id, title and content block', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(
      hbs`<Modal @modal-id="test-id" @modal-title="Test Title"><p>Content</p></Modal>`
    );

    assert.dom('div').hasAttribute('id', 'test-id');

    assert.dom('div div.uk-modal-dialog.uk-modal-body p').hasText('Content');

    assert
      .dom('div div.uk-modal-dialog.uk-modal-body h2.uk-modal-title')
      .hasText('Test Title');
  });
});
