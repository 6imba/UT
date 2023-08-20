import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Parent from '@/components/Third/Parent.vue'

describe('Third/Parent.vue', () => {
  it('Child component exist when dataLoading is true.', () => {
    const wrapper = mount(Parent)
    expect(wrapper.vm.dataLoading).to.be.equal(true)
    const childComponent = wrapper.find('[data-qa-id="child-loader"]')
    expect(childComponent.exists()).to.be.equal(true)
  })

  it('dataLoading is false when click parent button.', () => {
    const wrapper = mount(Parent)
    expect(wrapper.vm.dataLoading).to.be.equal(true)
    const parentBtn = wrapper.find('[data-qa-id="parent-button"]')
    parentBtn.trigger('click')
    expect(wrapper.vm.dataLoading).to.be.equal(false)
  })
  
  it('Child component doesnot exist when dataLoading is false.', async () => {
    const wrapper = mount(Parent)
    const parentBtn = wrapper.find('[data-qa-id="parent-button"]')
    await parentBtn.trigger('click')
    expect(wrapper.vm.dataLoading).to.be.equal(false)
    const childComponent = wrapper.find('[data-qa-id="child-loader"]')
    expect(childComponent.exists()).to.be.equal(false)
  })

  // it('Child component doesnot exist when dataLoading is false.', async () => {
  //   const wrapper = mount(Parent)
  //   wrapper.vm.dataLoading = false
  //   expect(wrapper.vm.dataLoading).to.be.equal(false)
  //   const childComponent = wrapper.find('[data-qa-id="child-loader"]')
  //   expect(childComponent.exists()).to.be.equal(false)
  // })

  it('Child component doesnot exist when dataLoading is false.', async () => {
    const wrapper = mount(Parent)
    await wrapper.setData({dataLoading:false})
    expect(wrapper.vm.dataLoading).to.be.equal(false)
    const childComponent = wrapper.find('[data-qa-id="child-loader"]')
    expect(childComponent.exists()).to.be.equal(false)
  })

})
