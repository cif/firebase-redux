import test from 'ava';
import React from 'react';
import { spy } from 'sinon';
import $ from 'teaspoon';
import { Counter } from './counter';

const mockProps = props => ({
  ...{
    onClick: spy(),
    count: 10
  },
  ...props
});


test('render two buttons and span containing the count', (t) => {
  const props = mockProps();
  const $Counter = $(<Counter {...props} />)
    .shallowRender();
  const $buttons = $Counter.find('button');
  const $span = $Counter.first('span');

  t.is($buttons.length, 2, 'missing two rendered buttons');
  t.is($span.text(), props.count.toString(), 'missing count props in the span tag');
});

test('call onClick prop with increment and decremented count value', (t) => {
  const props = mockProps();
  const $Counter = $(<Counter {...props} />)
    .shallowRender();

  $Counter.first('button[data-test=inc]')
    .trigger('click');

  t.truthy(
    props.onClick.calledWith($Counter.props('count') + 1),
    'onclick func with increment count not called or called incorrectly'
  );

  $Counter.first('button[data-test=dec]')
    .trigger('click');

  t.truthy(
    props.onClick.calledWith($Counter.props('count') - 1),
    'onclick func with decrement count not called or called incorrectly'
  );
});
