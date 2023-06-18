import { mount, shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const createSandbox = () => sinon.createSandbox();
const { expect } = chai;
const createStoreVue = () => createLocalVue().use(Vuex);
const createShallowMounted = (component, shallowMountOptions) => {
    shallowMount(component, { ...shallowMountOptions });
};

chai.use(sinonChai);

export default {
    expect,
    createSandbox,
    RouterLinkStub,
    createLocalVue,
    createStoreVue,
    createMounted: mount,
    createShallowMounted,
};
