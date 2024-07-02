<template>
  <section class="p-16 mt-[20px] rounded-[56px] max-md:px-5 bg-custom-gradient">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div class="flex flex-col justify-between self-stretch my-auto text-xl font-medium text-white max-md:mt-10 ">
          <div class="flex items-center text-white">
        <img src="/src/assets/img/5.png" alt="Icon" class=" w-7 md:w-10 h-7 mb-[15px] md:h-10 mr-2 inline-block">
        <p class=" text-[27px] md:text-[50px]  mb-6"> {{$t('title5')}} </p>
      </div>
      <div>
        <p class=" text-[27px] md:text-[50px]   text-white m-0">{{$t('titleq5')}}</p>
      </div>
          <div class="flex gap-2 self-start mt-40  text-[16px] md:text-2xl  whitespace-nowrap max-md:mt-10">
            <img loading="lazy" src="/src/assets/img/truck.svg" alt="" class="shrink-0 my-auto w-6 aspect-square" />
            <h2>{{$t('kur')}}</h2>
          </div>
          <p class="mt-2  text-[16px] md:text-2xl text-zinc-100 max-md:max-w-full">
            {{$t('p10')}}
          </p>
          <a href="#"
            class="flex gap-2 justify-center w-full md:w-auto self-start px-10 py-4 mt-10 bg-customOrange border border-customOrange border-solid shadow-sm leading-[150%] rounded-[46px] max-md:px-5">
            <img loading="lazy" src="/src/assets/img/call.png" alt="" class="shrink-0 my-auto w-5 aspect-square" />
            <span>{{$t('button')}}</span>
          </a>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="/src/assets/img/Mackbook2.png" alt="Tizim kuryerlari illustration"
          class="grow w-full rounded-3xl aspect-[1.3] max-md:mt-10 max-md:max-w-full" />
      </div>
    </div>
  </section>
</template>