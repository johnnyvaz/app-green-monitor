import { mount } from '@vue/test-utils'
import Footer from "~/components/Footer";

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.vm).toBeTruthy()
  })
})
