<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/shared/components/ui/navigation-menu'
import UserAuthDialog from './UserAuthDialog.vue'
import UserDropdownActions from './UserDropdownActions.vue'

const { user } = storeToRefs(useUserStore())
</script>

<template>
  <header class="flex justify-between w-full py-4 px-32">
    <div class="flex items-center">
      <a href="/">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/80998640?s=200&v=4"
            alt="@techmely"
          />
          <AvatarFallback>Techmely</AvatarFallback>
        </Avatar>
      </a>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/posts" :class="navigationMenuTriggerStyle()">
              Articles
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/partnerships" :class="navigationMenuTriggerStyle()">
              Partnership
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <UserDropdownActions v-if="user" />
    <UserAuthDialog v-else />
  </header>
</template>
