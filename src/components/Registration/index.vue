<template>
    <div class="p-[16px] md:p-[100px]">
        <div class="bg-white rounded-[46px] p-[24px] md:py-[80px] md:px-[100px] md:flex">
            <div class="flex flex-col w-full">
                <h1 class="text-[24px] md:text-[40px] font-[700] mb-[40px]">Demo’ni be’pul oling</h1>
                <div class="space-y-4 p-2">
                    <div class="space-y-2">
                        <label for="name" class="text-lg font-medium text-gray-900">Ismingiz</label>
                        <input type="text" id="name" placeholder="Ismingizni kiriting"
                            class="w-full p-2 border border-gray-100 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="space-y-2">
                        <label for="phone" class="text-lg font-medium text-gray-900">Telefon raqam</label>
                        <input type="text" id="phone" placeholder="Telefon raqamingizni kiriting"
                            class="w-full p-2 border border-gray-100 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="space-y-2">
                        <label for="restaurant" class="text-lg font-medium text-gray-900">Restoran yoki kafe nomi</label>
                        <input type="text" id="restaurant" placeholder="Restoran nomini kiriting"
                            class="w-full p-2 border border-gray-100 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="space-y-2">
                        <label for="email" class="text-lg font-medium text-gray-900">Email</label>
                        <input type="email" id="email" placeholder="Elektron pochtangizni kiriting"
                            class="w-full p-2 border border-gray-100 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                </div>
                <div class="flex justify-end mt-4">
                    <button class="bg-customOrange w-full md:w-auto justify-center  shadow-customOrangeShadow flex items-center gap-2 px-6 py-3 rounded-[46px]  text-white font-medium text-[16px]">
                        Jo’natish 
                        <img src="/src/assets/img/Line arrow-right (1).svg" alt="">
                    </button>
                </div>
            </div>
            <img src="/src/assets/img/Big.svg" alt="" class="md:mt-0 mt-[24px]">
        </div>
    </div>
</template>

<script>
// Your script here
</script>
