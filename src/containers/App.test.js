import test from 'ava';
import React from 'react';
import $ from 'teaspoon';
import { noCallThru } from 'proxyquire';
import { jsdom } from 'jsdom';

const doc = jsdom('<!doctype html><html><body></body></html>');
global.window = doc.defaultView;
global.document = doc;

const proxyquireStrict = noCallThru();
const Counter = () => <div />;

const App = proxyquireStrict('./App', {
  '../components/Counter': Counter
}).App;

const mockProps = props => ({
  ...{
    updateCounter: () => null,
    count: 10
  },
  ...props
});

test('should render the counter component and pass correct props', (t) => {
  const props = mockProps();
  const $counter = $(<App {...props} />)
    .render(true)
    .find(Counter);

  t.is($counter.length, 1, 'counter component not rendered');
  t.is($counter.props('count'), props.count, 'count property not passed');
  t.is($counter.props('onClick'), props.updateCounter, 'onClick property not passed');
});
