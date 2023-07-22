import { mount } from '@vue/test-utils';
import Message from '../../src/components/Message.vue';


describe("Message.vue", () => {
    it("render props.msg when passed: ", () => {
        const wrapper = mount(Message, { props: { msg: "I am Simba."} })
        expect(wrapper.text()).toBe("I am Simba.")
    })
    it("render props.msg when passed: ", () => {
        const wrapper = mount(Message, { props: { msg: "I am Simba."} })
        expect(wrapper.text()).toContain("I am Simba.")
    })
})

