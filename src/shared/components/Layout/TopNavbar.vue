<script setup lang="ts">
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';
</script>

<template>
  <header class="flex">
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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/hi.webp" alt="@techmely" />
          <AvatarFallback>Techmely</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem><iconify-icon icon="material-symbols:account-circle-full" class="size-4" /> My Profile
        </DropdownMenuItem>
        <DropdownMenuItem><iconify-icon icon="ooui:articles-ltr" class="size-4" />My Posts</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><iconify-icon icon="octicon:sign-out-24" class="size-4" />Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>
