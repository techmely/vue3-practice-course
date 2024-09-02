<script setup lang="ts">
import { cn } from '@/shared/helpers/className';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { useSignUp } from '../composables/useSignUp';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const form = useForm({
  validationSchema: toTypedSchema(schema),
})

const { mutate, isPending } = useSignUp()

async function onSubmit(value: any) {
  mutate(value)
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <AutoForm :schema="schema" :form="form" :field-config="{
      email: {
        label: 'Email',
        inputProps: {
          type: 'email',
          placeholder: 'Enter your email',
          autocapitalize: 'none',
          autocomplete: 'off',
          autocorrect: 'off',
          disabled: isPending,
        }
      },
      password: {
        label: 'Your secure password',
        inputProps: {
          type: 'password',
          placeholder: '••••••••',
          autocomplete: 'off',
        },
      },
    }" class="space-y-4" @submit="onSubmit">
      <Button :disabled="isPending" type="submit" class="w-full">
        <iconify-icon icon="svg-spinners:blocks-wave" v-if="isPending" class="mr-2 h-4 w-4" />
        Sign In with Email
      </Button>
    </AutoForm>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <Button variant="outline" type="button">
      <iconify-icon icon="octicon:mark-github-24" class="mr-2 h-4 w-4" />
      GitHub
    </Button>
  </div>
</template>