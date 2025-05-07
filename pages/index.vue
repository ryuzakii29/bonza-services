<template>
    <div class="grid grid-cols-1 mx-auto py-8 justify-items-center">
        <img src="~/assets/transparent-header.png" alt="bnz-logo" />
        <p class="text-md text-gray-600 my-4">
            Discover our diverse portfolio of businesses, each offering unique services and
            experiences.
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-8">
        <!-- Tef's Photobooth -->
        <div class="text-center">
            <NuxtLink to="/tefs-photobooth">
                <img src="~/assets/tefs.png" alt="Tef's Photobooth"
                    class="w-full h-48 object-contain rounded sm:object-cover xl:object-contain" />
                <p class="mt-2 text-xl font-bold">Tef's Photobooth & Party Cart</p>
                <p class="text-sm text-gray-600">Capture the fun with 360 video booths, photo booths, party food carts,
                    and entertainers for all occasions.</p>
            </NuxtLink>
        </div>

        <!-- N.B. Rivera Land Surveying -->
        <div class="text-center">
            <NuxtLink to="/nbrivera-land-surveying">
                <img src="~/assets/nbr.jpg" alt="N.B. Rivera Land Surveying"
                    class="w-full h-48 object-contain rounded sm:object-cover xl:object-contain" />
                <p class="mt-2 text-xl font-bold">N.B. Rivera Land Surveying</p>
                <p class="text-sm text-gray-600">Professional engineering and land surveying services for residential,
                    commercial, and development projects.</p>
            </NuxtLink>
        </div>

        <!-- DC Photo Studio -->
        <div class="text-center">
            <NuxtLink to="/dc-photo-studio">
                <img src="~/assets/dcphotostudio.jpg" alt="DC Photo Studio"
                    class="w-full h-48 object-contain rounded sm:object-cover xl:object-contain" />
                <p class="mt-2 text-xl font-bold">DC Photo Studio</p>
                <p class="text-sm text-gray-600">A self-photo studio where you can take professional-quality shots in a
                    cozy, private setting.</p>
            </NuxtLink>
        </div>

        <!-- Lolo Boyong's Kantina -->
        <div class="text-center">
            <NuxtLink to="/lolo-boyongs-kantina">
                <img src="~/assets/loloboyongs.jpg" alt="Lolo Boyong's Kantina"
                    class="w-full h-48 object-contain rounded sm:object-cover xl:object-contain" />
                <p class="mt-2 text-xl font-bold">Lolo Boyong's Kantina</p>
                <p class="text-sm text-gray-600">Home-cooked Filipino meals available for dine-in, takeout, delivery,
                    and full-service catering.</p>
            </NuxtLink>
        </div>
    </div>

</template>

<script setup>

</script>