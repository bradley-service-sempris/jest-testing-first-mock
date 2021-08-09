import React from 'react';
import { shallow } from 'enzyme';
import TestComponent from '../../src/pages/testFunctions/TestComponent';

describe('/testFunctions/TestComponent.js', () => {
	it('should render a component', () => {
		const wrapper = shallow(<TestComponent />);
		const myButton = wrapper.find('button');

		expect(myButton.length).toBe(1);
		expect(myButton.text()).toBe('Add One');

		expect(wrapper.find('input').length).toBe(1);
		expect(wrapper.find('div').length).toBe(1);
	});
});
