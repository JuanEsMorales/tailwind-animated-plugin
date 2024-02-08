import { generatePluginCss } from './utils.js'
import { describe, it, expect } from 'vitest'

describe('tailwindcss-animations plugin', async () => {
  it('use a custom animation-delay', async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-delay-[777ms]">hello</div>'
    })
    expect(css).toMatch('.animate-delay-\\[777ms\\]{animation-delay:777ms}')
  })
  it('use a custom animation-duration', async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-duration-[777ms]">hello</div>'
    })
    expect(css).toMatch('.animate-duration-\\[777ms\\]{animation-duration:777ms}')
  })
  it('use a predefined animation-delay', async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-delay-100">hello</div>'
    })
    expect(css).toMatch('.animate-delay-100{animation-delay:100ms}')
  })
  it('use a predefined animation-duration', async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-duration-100">hello</div>'
    })
    expect(css).toMatch('.animate-duration-100{animation-duration:100ms}')
  })
  it('use a timing function animation', async () => {
    const css = await generatePluginCss({
      content: '<div class="animate-ease">hello</div>'
    })
    expect(css).toMatch('.animate-ease{animation-timing-function:ease}')
  })
})
