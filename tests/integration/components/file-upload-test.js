import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | file-upload', function (hooks) {
  setupRenderingTest(hooks);

  test('File-upload component displays an input with type file and accepts image filetypes', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('onFileSelect', (file) => {});

    await render(hbs`<FileUpload @onFileSelect={{this.onFileSelect}}/>`);

    assert
      .dom('input')
      .hasAttribute('type', 'file')
      .hasAttribute('accept', 'image/png, image/jpeg');
  });
});
