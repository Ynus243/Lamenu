<template>
  <div class="p-[16px] md:p-[100px]">
    <div class="bg-primary rounded-[40px] p-[24px] md:p-[80px] md:flex items-center relative">
      <div class="flex-1">
        <h1 class="text-[24px] md:text-[56px] leading-normal md:leading-[66px] font-[700] mb-[46px]">
          Mutaxsislardan be’pul <br> maslaxat oling
        </h1>
        <button
          @click="makeCall"
          class="py-[16px] px-[40px] flex gap-2 w-full md:w-auto items-center justify-center shadow-customWhiteShadow bg-white rounded-[46px] text-[16px] font-[600]">
          Telegram orqali bog‘lanish
          <img src="/src/assets/img/call (2).svg" alt="" />
        </button>
      </div>
      <img src="/src/assets/img/biglogo.svg" alt="" class="absolute top-[50%] md:block hidden right-[60px]" />
      <img src="/src/assets/img/Lamenubg.svg" alt="" class="md:absolute md:w-auto w-full top-[50%] md:hidden block mt-[56px] right-[60px]" />
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

<style scoped>
.absolute {
  transform: translateY(-50%);
}
</style>
