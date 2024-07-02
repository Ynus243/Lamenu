<template>
  <main class="px-20 py-6 bg-white rounded-[56px] max-md:px-5">
    <section class="flex gap-5 max-md:flex-col max-md:gap-0">
      <div class="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
          <div class="flex items-center text-black">
        <img src="/src/assets/img/4.png" alt="Icon" class="w-10 h-10 mr-2 inline-block">
        <p class=" text-[30px] md:text-[35px]  m-0">{{$t('title5')}}</p>
      </div>
      <div>
        <p class=" text-[30px] md:text-[35px]   text-black m-0">{{$t('titleq5')}}</p>
      </div>
          <div class="flex flex-col  mt-64 max-md:mt-10 max-md:max-w-full">
            <nav
              class="flex gap-5 md:gap-3 pr-20 text-2xl font-medium leading-8 text-zinc-900 max-md:flex-wrap max-md:pr-5">
              <div class="flex gap-3 w-full md:w-auto">
                <div
                  class="flex gap-2 whitespace-nowrap text-zinc-900 border md:border-none rounded-[16px] w-full md:w-1/2 border-solid p-4 px-[32px] items-center justify-center">
                  <img loading="lazy" src="/src/assets/img/appstore.png" class="shrink-0 my-auto w-6 aspect-square"
                    alt="" />
                  <span>IOS</span>
                </div>
                <div
                  class="flex gap-2 whitespace-nowrap border md:border-none w-full md:w-1/2 rounded-[16px] border-solid p-4 items-center justify-center">
                  <img loading="lazy" src="/src/assets/img/playmarket.png" class="shrink-0 my-auto w-6 aspect-square"
                    alt="" />
                  <span>Android</span>
                </div>
              </div>
              <div
                class="flex gap-2 border md:border-none border-solid rounded-[16px] w-full md:w-auto items-center justify-center p-4">
                <img loading="lazy" src="/src/assets/img/telegram.png" class="shrink-0 my-auto w-6 aspect-square"
                  alt="" />
                <span>Telegram</span>
              </div>
            </nav>
            <p class="mt-10 text-xl leading-8 text-zinc-600 max-md:max-w-full">
              {{$t('p9')}}
            </p>
          </div>
        </div>
      </div>
        <div
          class="flex grow justify-center items-center px-16 py-2.5 w-full   max-md:px-5 max-md:mt-10 max-md:max-w-full rounded-2xl ">
          <img loading="lazy" src="/src/assets/img/mobile3.png" class="max-md:w-full h-[480px] hidden md:block  w-[540px]"
            alt="Application interface preview" />

            <img loading="lazy" src="/src/assets/img/adopt.png" class="block md:hidden"
            alt="Application interface preview" />
        </div>
    </section>
  </main>
</template>

<style>

</style>