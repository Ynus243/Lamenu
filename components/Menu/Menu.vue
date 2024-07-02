<template>
  <div class="flex flex-col justify-center rounded-[56px]">
    <header class="flex justify-center items-center px-16 w-full bg-white rounded-[56px] max-md:px-5 max-md:max-w-full">
      <div class="w-full max-w-[1632px] max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <section class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div class="flex items-center font-medium text-black">
        <img src="/src/assets/img/1.png" alt="Icon" class="w-10 h-10 mr-2 inline-block">
        <p class=" text-[30px] md:text-[40px]  m-0">{{$t('menu')}}</p>
      </div>
      <div>
        <p class=" text-[30px] md:text-[40px] font-medium  m-0">{{$t('menuq1')}}</p>
      </div>
              <div class="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
                <div class="flex gap-2 self-start text-2xl font-medium leading-8 whitespace-nowrap text-zinc-900">
                  <img loading="lazy" src="/src/assets/img/el.png" alt="" class="shrink-0 my-auto w-6 aspect-square" />
                  <h2>{{$t('menus')}}</h2>
                </div>
                <p class="mt-4 text-[14px] md:text-xl  text-zinc-600 max-md:max-w-full">
                  {{$t('p2')}}
                </p>
              </div>
            </div>
          </section>
          <section class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full  mb-[10px] mt-[10px]">
            <img loading="lazy" src="/src/assets/img/xz.png" alt="Integratsiayalgan tezkor menyular illustration" class="grow w-full   max-md:mt-10 max-md:max-w-full" />
          </section>
        </div>
      </div>
    </header>
  </div>
</template>