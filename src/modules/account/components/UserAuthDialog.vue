<script setup lang="ts">
import UserAuthForm from './UserAuthForm.vue'
</script>

<template>
  <div data-testid="block-account-actions" class="space-x-4">
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> Sign Up </Button>
      </DialogTrigger>
      <DialogContent class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <DialogHeader>
          <DialogTitle class="text-2xl font-semibold tracking-tight">
            Create an account
          </DialogTitle>
          <DialogDescription class="text-sm text-muted-foreground">
            Enter your email below to create your account
          </DialogDescription>
        </DialogHeader>
        <UserAuthForm />
        <p class="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <a href="/terms" class="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>
          and
          <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger as-child>
        <Button> Sign In </Button>
      </DialogTrigger>
      <DialogContent class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <DialogHeader>
          <DialogTitle class="text-2xl font-semibold tracking-tight"> Sign In </DialogTitle>
        </DialogHeader>
        <UserAuthForm :is-sign-in="true" />
      </DialogContent>
    </Dialog>
  </div>
</template>
