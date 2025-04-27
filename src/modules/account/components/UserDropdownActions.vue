<script setup lang="ts">
import { useSignOut } from '../composables/useSignOut'

const signout = useSignOut()
const router = useRouter()

async function handleSignOut() {
  await signout.mutateAsync()
  router.replace('/')
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar>
        <AvatarImage src="/hi.webp" alt="@techmely" />
        <AvatarFallback>Techmely</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem class="cursor-pointer" @click="router.push('/me')">
        <iconify-icon icon="material-symbols:account-circle-full" class="size-4" /> My Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <iconify-icon icon="ooui:articles-ltr" class="size-4" />My Posts
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="handleSignOut">
        <iconify-icon icon="octicon:sign-out-24" class="size-4" />Sign Out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
