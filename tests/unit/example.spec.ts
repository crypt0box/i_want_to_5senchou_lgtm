import { shallowMount } from '@vue/test-utils'
import DisplayQiitaTrend from '@/components/DisplayQiitaTrend.vue'

describe('DisplayQiitaTrend.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(DisplayQiitaTrend, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
