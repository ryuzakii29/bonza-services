<template>
    <div class="grid grid-cols-1 mx-auto py-8 justify-items-center">
        <img class="dark:bg-gray-300 rounded" src="~/assets/transparent-header.png" alt="bnz-logo" />
        <p class="text-md my-4">
            Discover our diverse portfolio of businesses, each offering unique services and
            experiences.
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-8">

        <div class="text-center" v-for="bz in biz">
            <NuxtLink :to="`/${bz.url}`">
                <img :src="`${apiBase}/${bz.img}`" :alt="bz.name"
                    class="w-full h-48 object-contain rounded sm:object-cover xl:object-contain" />
                <p class="mt-2 text-xl font-bold">{{ bz.name }}</p>
                <p class="text-sm">{{ bz.description }}</p>
            </NuxtLink>
        </div>

    </div>

</template>

<script setup>
const biz = await fetchBusiness();
const apiBase = useRuntimeConfig().public.apiBase;
</script>