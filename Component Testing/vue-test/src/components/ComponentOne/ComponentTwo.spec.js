import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import sinon from 'sinon';
import MyComponent from '@/components/MyComponent.vue';

describe('MyComponent', () => {
    it('renders the correct age and group', () => {
        const wrapper = shallowMount(MyComponent);

        expect(wrapper.find('p').text()).to.include('My age is 0.');
        expect(wrapper.find('p').text()).to.include('I am minor.');

        // Simulate the click event on the "Born" button
        wrapper.find('[data-qa-id="born-btn"]').trigger('click');

        expect(wrapper.find('p').text()).to.include('My age is 0.');
        expect(wrapper.find('p').text()).to.include('I am minor.');

        // Simulate the click event on the "Grow" button
        wrapper.find('[data-qa-id="grow-btn"]').trigger('click');

        expect(wrapper.find('p').text()).to.include('My age is 1.');
        expect(wrapper.find('p').text()).to.include('I am minor.');

        // Simulate the click event on the "Die" button
        wrapper.find('[data-qa-id="die-btn"]').trigger('click');

        expect(wrapper.find('p').text()).to.include('My age is null.');
        expect(wrapper.find('p').text()).to.include('I am minor.');
    });

    it('updates the group when the age becomes 18', () => {
        const wrapper = shallowMount(MyComponent);

        // Stub the computed property "group"
        const groupStub = sinon.stub(wrapper.vm, 'group').get(() => 'minor');

        // Update the age to 18
        wrapper.vm.age = 18;

        // Assert that the computed property "group" is updated
        expect(wrapper.find('p').text()).to.include('I am adult.');

        // Restore the stubbed computed property
        groupStub.restore();
    });
});
