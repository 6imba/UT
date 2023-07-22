import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import ComponentOne from './ComponentOne.vue';

describe('MyComponent', () => {
    it('renders the correct age and group', () => {
        const wrapper = shallowMount(ComponentOne);

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

});
