<template>
    <div>
        <Header />
        <main class="dark:bg-gray-600 dark:text-white px-4 py-6">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue'
</script>