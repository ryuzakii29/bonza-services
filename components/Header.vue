<template>
  <header class="dark:bg-gray-700 bg-white border-b shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold">
        <img src="~/assets/transparent-header.png" alt="MyApp Logo" class="h-8 w-auto dark:bg-gray-300 rounded" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex gap-6 text-sm font-medium">
        <NuxtLink to="/" class="hover:text-blue-600 dark:text-white">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600 dark:text-white">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-blue-600 dark:text-white">Contact</NuxtLink>
        <button @click="dark.toggle()" class="text-sm px-2 py-1 rounded">
          {{ dark.isDark ? '☀️' : '🌙' }}
        </button>
      </nav>

      <!-- Mobile toggle button -->
      <button @click="open = !open" class="md:hidden text-xl">
        <span v-if="!open">☰</span>
        <span v-else>✖</span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="md:hidden bg-white px-4 pb-4">
      <NuxtLink to="/" class="block py-2">Home</NuxtLink>
      <NuxtLink to="/about" class="block py-2">About</NuxtLink>
      <NuxtLink to="/contact" class="block py-2">Contact</NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDarkStore } from '@/stores/dark'

const open = ref(false)
const dark = useDarkStore()

onMounted(() => {
  dark.init
})
</script>
