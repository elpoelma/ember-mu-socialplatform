import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');

  const inflector = Inflector.inflector;

  inflector.irregular('person', 'people')
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
