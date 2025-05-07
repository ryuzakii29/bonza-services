<template>
  <header class="bg-white border-b shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold">
        <img src="~/assets/transparent-header.png" alt="MyApp Logo" class="h-8 w-auto" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex gap-6 text-sm font-medium">
        <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-blue-600">Contact</NuxtLink>
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
import { ref } from 'vue'
const open = ref(false)
</script>
