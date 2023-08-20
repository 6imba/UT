// import { expect } from 'chai'
import { mount,shallowMount } from '@vue/test-utils'
import Parent from '@/components/Second/Parent.vue'

// describe.only('Second/Parent.vue mount', () => {
//   it('data change when click parent component button.', () => {
//     const wrapper = mount(Parent)
//     const parentButton = wrapper.find('[data-qa-id="parent-button"]')
//     const checktEventTriger = parentButton.trigger('click')
//     console.log(checktEventTriger, 'mount...................')
//     // expect(wrapper.vm.data2).to.be.equal(true)
//   })
// })

describe.only('Second/Parent.vue mount', () => {
  it('data change when click parent component button.', async () => {
    const wrapper = mount(Parent)
    const parentButton = wrapper.find('[data-qa-id="parent-button"]')
    const checktEventTriger = await parentButton.trigger('click')
    console.log(checktEventTriger, 'mount...................')
    // expect(wrapper.vm.data2).to.be.equal(true)
  })
})

describe.only('Second/Parent.vue shallowMount', () => {
  it.only('data change when click parent component button.', async () => {
    const wrapper = shallowMount(Parent)
    const parentButton = wrapper.find('[data-qa-id="parent-button"]')
    const checktEventTriger = await parentButton.trigger('click')
    console.log(checktEventTriger, 'shallowMount.....................')
    // expect(wrapper.vm.data2).to.be.equal(true)
  })
})

// describe.only('Second/Parent.vue mount', () => {
//   it('data change when click parent component button.', async () => {
//     const wrapper = mount(Parent)
//     const parentButton = wrapper.find('[data-qa-id="parent-button"]')
//     const checktEventTriger = await parentButton.trigger('parentClicked')
//     console.log(checktEventTriger, 'mount...................')
//     // expect(wrapper.vm.data2).to.be.equal(true)
//   })
// })

// describe.only('Second/Parent.vue shallowMount', () => {
//   it.only('data change when click parent component button.', async () => {
//     const wrapper = shallowMount(Parent)
//     const parentButton = wrapper.find('[data-qa-id="parent-button"]')
//     const checktEventTriger = await parentButton.trigger('parentClicked')
//     console.log(checktEventTriger, 'shallowMount.....................')
//     // expect(wrapper.vm.data2).to.be.equal(true)
//   })
// })

// describe.only('Second/Parent.vue mount', () => {
//   it('data change when click parent component button.', async () => {
//     const wrapper = mount(Parent)
//     const parentButton = wrapper.find('[data-qa-id="parent-button"]')
//     const checktEventTriger = await parentButton.trigger('apple')
//     console.log(checktEventTriger, 'mount...................')
//     // expect(wrapper.vm.data2).to.be.equal(true)
//   })
// })

// describe.only('Second/Parent.vue shallowMount', () => {
//   it.only('data change when click parent component button.', async () => {
//     const wrapper = shallowMount(Parent)
//     const parentButton = wrapper.find('[data-qa-id="parent-button"]')
//     const checktEventTriger = await parentButton.trigger('apple')
//     console.log(checktEventTriger, 'shallowMount.....................')
//     // expect(wrapper.vm.data2).to.be.equal(true)
//   })
// })