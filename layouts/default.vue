<template>
    <div>
        <Header />
        <main class="px-4 py-6">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue'
</script>