import test from 'ava';
import add from 'unplugin-starter-core';

test('core', t => {
  t.is(add(1, 1), 2);
});
