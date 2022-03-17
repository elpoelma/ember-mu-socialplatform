import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | notification', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      content: {
        post: {
          headline: 'Headline',
          id: 'test-id',
          author: {
            formattedNickname: 'nickname',
          },
        },
      },
    });

    await render(hbs`<Notification @content={{this.content}}>`);

    assert.dom('div.uk-card .uk-card-title').hasText('Headline');
    assert.dom('div.uk-card p').containsText('nickname');
    assert.dom('div.uk-card .uk-card-footer a').hasText('Read More');
  });
});
