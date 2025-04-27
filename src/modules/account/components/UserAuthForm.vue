<script setup lang="ts">
import { cn } from '@/shared/helpers/className'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { useSignIn } from '../composables/useSignIn'
import { useSignUp } from '../composables/useSignUp'

const props = withDefaults(
  defineProps<{
    isSignIn: boolean
  }>(),
  { isSignIn: false }
)

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const form = useForm({
  validationSchema: toTypedSchema(schema)
})

const { mutate: mutateSignUp, isPending: isPendingSignUp } = useSignUp()
const { mutate: mutateSignIn, isPending: isPendingSignIn } = useSignIn()
const isLoading = isPendingSignIn || isPendingSignUp

async function onSubmit(value: any) {
  if (props.isSignIn) {
    mutateSignIn(value)
  } else {
    mutateSignUp(value)
  }
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <AutoForm
      :schema="schema"
      :form="form"
      :field-config="{
        email: {
          label: 'Email',
          inputProps: {
            type: 'email',
            placeholder: 'Enter your email',
            autocapitalize: 'none',
            autocomplete: 'off',
            autocorrect: 'off',
            disabled: isLoading
          }
        },
        password: {
          label: 'Your secure password',
          inputProps: {
            type: 'password',
            placeholder: '••••••••',
            autocomplete: 'off'
          }
        }
      }"
      class="space-y-4"
      @submit="onSubmit"
    >
      <Button :disabled="isLoading" type="submit" class="w-full">
        <iconify-icon v-if="isLoading" icon="svg-spinners:blocks-wave" class="mr-2 h-4 w-4" />
        {{ isSignIn ? 'Sign In' : 'Sign Up' }} with Email
      </Button>
    </AutoForm>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
      </div>
    </div>
    <Button variant="outline" type="button">
      <iconify-icon icon="octicon:mark-github-24" class="mr-2 h-4 w-4" />
      GitHub
    </Button>
  </div>
</template>
