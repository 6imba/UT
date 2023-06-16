import chai from 'chai';
import {
    mount, shallowMount, createLocalVue, RouterLinkStub,
} from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import sinonChai from 'sinon-chai';

const createSandbox = () => sinon.createSandbox();
const { expect } = chai;
// const localVue = createLocalVue();
// const createStore = (opts) => new Vuex.Store(opts);
const createStoreVue = () => {
    return createLocalVue().use(Vuex);
};
const createShallowMounted = (component, shallowMountOptions) => {
    shallowMount(component, { ...shallowMountOptions });
};

chai.use(sinonChai);
// localVue.use(Vuex);

export default {
    expect,
    createSandbox,
    // localVue,
    RouterLinkStub,
    // createStore,
    createLocalVue,
    createStoreVue,
    createMounted: mount,
    createShallowMounted,
};
