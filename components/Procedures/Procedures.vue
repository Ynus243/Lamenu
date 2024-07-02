<template>
  <main class="p-[40px] bg-custom-gradient rounded-[56px] max-md:px-5 mt-[20px] mb-[20px]">
    <div class="flex md:flex-row flex-row-reverse gap-5 max-md:flex-col max-md:gap-0">
      <section class="flex flex-col max-md:ml-0">
        <div class="flex flex-col grow justify-center px-14 l max-md:px-5 max-md:mt-10 l">
          <div class="flex flex-col justify-center px-14 py-0.5 max-md:px-5">
            <figure class="flex flex-col justify-center items-start py-16">
              <img loading="lazy" src="/src/assets/img/Macbook.png" alt="Kitchen management platform illustration"
                class="w-[600px]" />
            </figure>
          </div>
        </div>
      </section>
      <section class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div class="flex flex-col self-stretch my-auto font-medium text-white max-md:mt-10 max-md:max-w-full">
          <div class="flex items-center text-white">
        <img src="/src/assets/img/3.png" alt="Icon" class=" w-7 h-7 md:w-10 md:h-10 mr-2 inline-block">
        <p class=" text-[27px] md:text-[50px]  m-0">{{$t('title4')}}</p>
      </div>
      <div>
        <p class=" text-[27px] md:text-[50px]   text-white m-0">{{$t('titleq4')}}</p>
      </div>
          <div class="flex gap-2 self-start mt-36 text-[14px] md:text-2xl leading-8 max-md:mt-10">
            <img loading="lazy" src="/src/assets/img/setting-3.png" alt="" class="shrink-0 my-auto w-6 aspect-square" />
            {{$t('menu2')}}
          </div>
          <p class="mt-2 text-[14px] md:text-xl leading-8 text-slate-50 max-md:max-w-full">
            {{$t('p8')}}
          </p>
        </div>
      </section>
    </div>
  </main>
</template>