import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Child from '@/components/First/Child.vue'

// describe('Child.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).to.include(msg)
//   })
// })

describe('First/Child.vue', () => {
  it('Child component exist', () => {
    const wrapper = shallowMount(Child)
    expect(wrapper.exists()).to.be.equal(true)
  })
  it('data change when click child component button.', () => {
    const wrapper = shallowMount(Child)
    const childButton = wrapper.find('[data-qa-id="child-button"]')
    childButton.trigger('click')
    expect(wrapper.vm.data1).to.be.equal(true)
  })
})
