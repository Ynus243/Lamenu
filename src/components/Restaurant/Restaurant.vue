<template>
  <main class="p-10 mb-[20px] bg-custom-gradient rounded-[56px] max-md:px-5">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <section class="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <h1
            class="text-lg md:text-6xl font-medium text-white max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            {{$t('title')}}
          </h1>
          <p class="mt-6 text-[16px] md:text-2xl font-medium leading-9 text-white max-md:max-w-full">
            {{$t('p')}}
          </p>
          <a href="#"
            class="flex gap-2 justify-center w-full md:w-auto self-start px-10 py-4 mt-32 text-sm md:text-xl font-medium  text-white bg-customOrange shadow-lg rounded-[46px] max-md:px-5 max-md:mt-10">
            <img loading="lazy" src="/src/assets/img/import.svg" alt="" class="shrink-0 my-auto w-5 aspect-square" />
            <span>{{$t('button')}}</span>
          </a>
           <div class="flex-row-reverse  md:flex"></div>
          <div class="mt-14 max-w-full w-[405px] max-md:mt-10">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <div class=" flex-col w-[31%] max-md:ml-0 max-md:w-full hidden xl:block">
                <img loading="lazy" src="/src/assets/img/qr-code.png" alt="QR code for app download"
                  class="shrink-0 max-w-full aspect-square w-[118px] max-md:mt-6" />
              </div>
              <div class="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow max-md:mt-6">
                  <h2 class=" text-lg md:text-2xl font-medium leading-7 text-white">
                    {{$t('download')}}
                  </h2>
                  <p class="mt-2 text-lg leading-7 text-stone-300">
                    {{$t('camera')}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full ">
        
        <img loading="lazy"
          src="/src/assets/img/group.png"
          alt="Restaurant automation illustration" class="grow w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
      </section>
      
    </div>
  </main>
</template>