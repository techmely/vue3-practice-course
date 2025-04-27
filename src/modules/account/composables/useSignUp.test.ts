import { VueQueryPlugin } from '@tanstack/vue-query'
import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { signUpEmailPassword } from '../services/firebase.service'
import { useSignUp } from './useSignUp'

vi.mock('../services/firebase.service', () => ({
  signUpEmailPassword: vi.fn()
}))

describe('useSignUp', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const createWrapper = (setup: () => void) => {
    return mount(
      defineComponent({
        setup,
        template: '<div></div>'
      }),
      {
        global: {
          plugins: [VueQueryPlugin]
        }
      }
    )
  }

  it('should call signUpEmailPassword with correct params', async () => {
    const mockRequest = {
      email: 'test@example.com',
      password: 'password123'
    }
    const wrapper = createWrapper(() => {
      const signUp = useSignUp()
      signUp.mutateAsync(mockRequest)
    })
    await wrapper.vm.$nextTick()

    expect(signUpEmailPassword).toHaveBeenCalledWith(mockRequest)
  })

  it('should update user store and close auth modal on success', async () => {
    const mockUser = { id: '1', email: 'test@example.com', isEmailVerified: false }
    vi.mocked(signUpEmailPassword).mockResolvedValueOnce(mockUser)

    const userStore = useUserStore()
    const globalStore = useGlobalStore()
    vi.spyOn(userStore, 'updateUser')
    vi.spyOn(globalStore, 'toggleAuthModal')

    const wrapper = createWrapper(() => {
      const signUp = useSignUp()

      signUp.mutateAsync({ email: 'test@example.com', password: 'password123' })
    })
    await wrapper.vm.$nextTick()
    await flushPromises()
    expect(userStore.updateUser).toHaveBeenCalledWith(mockUser)
    expect(globalStore.toggleAuthModal).toHaveBeenCalledWith(false)
  })
})
