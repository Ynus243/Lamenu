<template>
  <div class="md:grid grid-cols-2 gap-5 items-center mb-[20px] mt-[20px] ">

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div class="border border-gray-300 p-4  bg-custom-gradient rounded-[32px] text-white">
        <div class="flex items-center text-white">
        <img src="/src/assets/img/10.png" alt="Icon" class="  md:w-10 md:h-10 mr-2 inline-block">
        <p class=" text-[20px] md:text-[25px]  m-0">{{$t('h1')}} </p>
      </div>
      <div>
        <p class=" text-[20px] md:text-[25px]   text-white m-0">{{$t('h1q')}}</p>
      </div>
        <p class="text-lg  mb-[70px]">{{$t('le12')}}</p>
        <p class="text-[20px] ">{{$t('le13')}}</p>
      </div>
      <div class="border border-gray-300 p-4   bg-white rounded-[32px]  ">
        <img src="/src/assets/img/infor.png" alt="Settings Icon" class="w-10 h-10 mr-4 mb-[40px]">
        <h2 class="text-lg font-semibold mb-2">{{$t('h2')}}</h2>
        <p class="text-sm text-gray-600">{{$t('p5')}}</p>
      </div>
      <div class="border border-gray-300 p-4   bg-white rounded-[32px]  ">
        <img src="/src/assets/img/seting.png" alt="Settings Icon" class="w-10 h-10 mr-4 mb-[40px]">
        <h2 class="text-lg font-semibold mb-2">{{$t('h3')}}</h2>
        <p class="text-sm text-gray-600">{{$t('p6')}}</p>
      </div>
      <div class="border border-gray-300 p-4   bg-white rounded-[32px]  ">
        <img src="/src/assets/img/users2.png" alt="Settings Icon" class="w-10 h-10 mr-4 mb-[40px]">
        <h2 class="text-lg font-semibold mb-2">{{$t('h4')}}</h2>
        <p class="text-sm text-gray-600">{{$t('p7')}}</p>
      </div>
    </div>

    <div class="mt-5">
      <img class=" w-[710px]  " src="/src/assets/img/comm2.png" alt="Computer Image">
    </div>
  </div>
</template>

<script>
export default {
}
</script>
