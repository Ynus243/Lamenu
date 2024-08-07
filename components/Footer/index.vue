<template>
    <div class="bg-white p-[16px] md:py-[40px] md:px-[100px]">
      <div class="justify-between flex">
        <img src="/src/assets/img/logo.svg" alt="" class="w-[100px] md:w-auto">
        <button @click="makeCall" class="font-[500] text-[18px] md:text-[24px]">+998 78 113 15 51</button>
      </div>
      <div class="border border-solid my-[24px]"></div>
      <div class="grid grid-cols-1">
        <div class="md:flex justify-between">
          <router-link target="_blank" to="/privacy" class="mb-[12px] text-[14px] md:text-[20px] font-[400] text-gray-600">Privacy policy Terms of conditions</router-link>
          <div class="flex gap-[40px] font-[500]">
            <a href="https://www.instagram.com/lamenu.uz/" target="_blank"> <p class="flex items-center gap-2">
              <img src="/src/assets/img/insta.svg" alt="" class="p-2 rounded-[30px] bg-gray-200">Instagram
            </p></a>
           <a href="https://web.telegram.org/a/#-1002022789620" target="_blank"> <p class="flex items-center gap-2">
              <img src="/src/assets/img/telegram.svg" alt="" class="p-2 rounded-[30px] bg-gray-200">Telegram
            </p></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  methods: {
    makeCall() {
      window.location.href = "tel:+998781131531"; 
    }
  }
}
</script>
  

