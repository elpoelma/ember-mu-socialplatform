import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Store from '@ember-data/store';
import PostModel from 'frontend/models/post';

module('Integration | Component | post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let store: Store = this.owner.lookup('service:store');

    let post: PostModel = store.createRecord('post', {
      headline: 'test headline',
      articleBody: 'test body',
      thumbnailurl: '/thumbnails/test',
      image: '/images/test',
    });
    this.set('post', post);
    await render(hbs`<Post @post={{this.post}}/>`);

    assert
      .dom('.uk-card-media-left img')
      .hasAttribute('src', post.thumbnailurl);

    assert.dom('.uk-card-body time').hasText(post.dateString);
    assert.dom('.uk-card-body .uk-card-title').hasText(post.headline);
  });
});
