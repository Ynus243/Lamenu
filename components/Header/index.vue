<template>
    <div class="px-[16px] md:px-[100px] items-center mt-[25px]">
        <div class="justify-between flex">
            <img src="/src/assets/img/logo.svg" alt="" class="md:w-auto w-[100px]">
            <button class=" text-[18px] md:text-[24px] font-[500]" @click="makeCall">+998 78 113 15 51</button>
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

<style></style>

