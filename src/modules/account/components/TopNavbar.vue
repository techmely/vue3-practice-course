<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/shared/components/ui/navigation-menu';
import UserAuthDialog from './UserAuthDialog.vue';
import UserDropdownActions from './UserDropdownActions.vue';

const { user } = storeToRefs(useAccountStore())

</script>

<template>
  <header class="flex justify-between w-full py-4">
    <div class="flex items-center">
      <a href="/">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/80998640?s=200&v=4" alt="@techmely" />
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
              Parnership
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <UserDropdownActions v-if="user" />
    <UserAuthDialog v-else />
  </header>
</template>
