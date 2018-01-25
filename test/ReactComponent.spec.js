import React from 'react';

// Starting with shallow:
// Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren’t indirectly asserting on behavior of child components.
//
// mount, also known as full-rendering, gives you a bit more:
//
// Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs, or may require the full lifecycle in order to fully test the component (i.e., componentDidMount etc.)
//
// And finally render, which refers to static rendering:
//
// Enzyme’s render function is used to render react components to static HTML and analyze the resulting HTML structure.

describe('a passing test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
});

// Example syntax:
describe('Whatever', () => {
  it('when something is written in the text input, the function "handleChangeOption" is called', () => {
    let fakeHandleChangeOption = spy()
    wrapper.setProps({ handleChangeOption: fakeHandleChangeOption })
    wrapper.find('#new-option-input').simulate('change', {target: {value: 'Marco' }})
    expect(fakeHandleChangeOption.called).to.be.equal(true)
  });

  const optionObject = { _placeholder: 'Marco' }
  const wrapper = shallow(<NewQuizOption option= { optionObject }/>);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('includes whatever is passed as name in props as value in input field', () => {
    wrapper.setProps({name: 'quiz name'})
    expect(wrapper.find('#quiz-name-input').props().value).to.be.equal('quiz name')
  });
});
