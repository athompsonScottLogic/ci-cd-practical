import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import "../src/setupTests";

const getCounter = counterWrapper => counterWrapper.find('.Counter');
const getCountMessage = counterWrapper => getCounter(counterWrapper).find('.Counter-Count');
const getIncrementButton = counterWrapper => getCounter(counterWrapper).find('.Counter-Button.Counter-Increment');

it('renders without crashing', () => {
  shallow(<Counter />);
});

describe('initial state', () => {
  it('renders a default count message, with a count of 0', () => {
    const counter = shallow(<Counter />);

    // TODO: the following expectation is incorrect. The expected result should be: "You clicked 0 times".
    expect(getCountMessage(counter).text()).toBe('You clicked 1 times');
  });

  it('renders a button', () => {
    const counter = shallow(<Counter />);
    expect(getIncrementButton(counter).exists()).toBe(true);
  });

  it('renders a button with text "Increment"', () => {
    const counter = shallow(<Counter />);
    expect(getIncrementButton(counter).text()).toBe('Increment');
  });
});

describe('increasing the count', () => {
  it('increases the count by one when the increment button is clicked once', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 1 times');
  });

  it('increases the count by two when the increment button is clicked twice', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 2 times');
  });

  it('increases the count by five when the increment button is clicked five times', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 5 times');
  });
});