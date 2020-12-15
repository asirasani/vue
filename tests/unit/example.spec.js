

import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders passed', () => {
    const msg = 'new message'
    const wrapper = 'new message'
    expect(wrapper.text()).toMatch(msg)
  })
})