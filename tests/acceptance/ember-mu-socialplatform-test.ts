import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember mu socialplatform', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('visiting /users', async function (assert) {
    await visit('/users');

    assert.equal(currentURL(), '/users');

    assert.dom('h1').hasText('Users');
  });

  test('visting /posts', async function (assert) {
    await visit('/posts');

    assert.equal(currentURL(), '/posts');

    assert.dom('h1').hasText('Posts');
  });
});
