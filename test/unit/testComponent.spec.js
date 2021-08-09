const { shallow } = require('enzyme');
const TestComponent = require('../../src/pages/testFunctions/TestComponent');

describe('/testFunctions/TestComponent.js', () => {
    it('should render a component', () => {
        const wrapper = shallow('/testFunctions/TestComponent.js');
        expect(wrapper.find(TestComponent)).to.have.lengthOf(1);
    })
})