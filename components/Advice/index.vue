<template>
  <div class="p-[16px] xx:p-[100px]">
    <div class="bg-primary rounded-[40px] py-[24px] xx:py-[40px] px-[24px] xx:px-[40px] xx:flex items-center relative">
      <div class="flex-1">
        <h1 class="text-[24px] xx:text-[40px] md:text-[56px] leading-normal md:leading-[66px] font-Ubuntu mb-[46px]">
          Mutaxsislardan bepul <br> maslaxat oling
        </h1>
        <button
          @click="makeCall"
          class="py-[16px] px-[40px] flex gap-2 w-full xx:w-auto items-center justify-center shadow-customWhiteShadow bg-white rounded-[46px] text-[16px] font-[600]">
          Telegram orqali bog‘lanish
          <img :class="{ 'animate': animate }" src="/src/assets/img/call (2).svg" alt="" />
        </button>
      </div>
      <img src="/src/assets/img/biglogo.svg" alt="" class="biglogo xx:block  hidden right-[60px]" />
      <img src="/src/assets/img/Lamenubg.svg" alt="" class="xx:absolute xx:w-auto w-full top-[50%] xx:hidden block mt-[56px] right-[60px]" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: false,
    };
  },
  methods: {
    makeCall() {
      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 1000); 
      window.location.href = "tel:+998781131531"; 
    }
  }
}
</script>

<style scoped>
@keyframes ring {
  0% { transform: rotate(0); }
  10% { transform: rotate(15deg); }
  20% { transform: rotate(-10deg); }
  30% { transform: rotate(5deg); }
  40% { transform: rotate(-5deg); }
  50% { transform: rotate(3deg); }
  60% { transform: rotate(-3deg); }
  70% { transform: rotate(2deg); }
  80% { transform: rotate(-2deg); }
  90% { transform: rotate(1deg); }
  100% { transform: rotate(0); }
}

.animate {
  animation: ring 1s ease;
}

.biglogo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 460px;
}

.lamenubg {
  position: absolute;
  transform: translateY(-50%);
}
</style>
