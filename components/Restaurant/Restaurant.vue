<template>
  <main class="p-10 mb-[20px] bg-custom-gradient rounded-[56px] max-md:px-5">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <section class="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <div class="flex items-center">
        <img src="/src/assets/img/Growth.png" alt="Icon" class="w-10 h-10 mr-2 inline-block">
        <p class=" text-[30px] md:text-[45px] text-white m-0">{{$t('title')}}</p>
      </div>
      <div>
        <p class=" text-[30px] md:text-[45px] text-white m-0">{{$t('titleq1')}}</p>
      </div>
          <p
            class="mt-6 text-[16px] md:text-2xl font-medium leading-9 text-white max-md:max-w-full"
          >
            {{ $t("p") }}
          </p>
          <a
            href="#"
            class="flex gap-2 justify-center w-full md:w-auto self-start px-10 py-4 mt-32 text-sm md:text-xl font-medium text-white bg-customOrange shadow-lg rounded-[46px] max-md:px-5 max-md:mt-10"
          >
            <img
              loading="lazy"
              src="/src/assets/img/import.svg"
              alt=""
              class="shrink-0 my-auto w-5 aspect-square"
            />
            <span>{{ $t("button") }}</span>
          </a>
          <div class="flex-row-reverse md:flex"></div>
          <div class="mt-14 max-w-full w-[405px] max-md:mt-10">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <div
                class="flex-col w-[31%] max-md:ml-0 max-md:w-full hidden xl:block"
              >
                <img
                  loading="lazy"
                  src="/src/assets/img/qr-code.png"
                  alt="QR code for app download"
                  class="shrink-0 max-w-full aspect-square w-[118px] max-md:mt-6"
                />
              </div>
              <div class="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow max-md:mt-6">
                  <h2
                    class="text-lg md:text-2xl font-medium leading-7 text-white"
                  >
                    {{ $t("download") }}
                  </h2>
                  <p class="mt-2 text-lg leading-7 text-stone-300">
                    {{ $t("camera") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="md:flex-nowrap flex-wrap flex">
        <div class="flex">
          <div class="p-2">
            <div class="relative mb-6">
              <img
                src="/src/assets/img/credit2.png"
                alt="Istalgan tolov usullar"
                class="w-full h-auto hidden md:block"
              />
              <img
                src="/src/assets/img/mini3.png"
                alt="Istalgan tolov usullar"
                class="block md:hidden"
              />
              <p
                class="absolute inset-0 flex items-end justify-center text-white text-[9px] md:text-[20px] font-bold bg-opacity-50 p-4 rounded"
              >
                {{ $t("le7") }}
              </p>
            </div>
            <div class="relative">
              <img src="/src/assets/img/gg.png" alt="" class="w-full h-auto" />
            </div>
          </div>

          <div class="p-2">
            <img
              src="/src/assets/img/mockup.png"
              alt=""
              class="w-[310px] h-auto"
            />
          </div>
        </div>

        <div class="p-2 gap-2 md:block flex">
          <div class="relative mb-6">
            <img src="/src/assets/img/aa.png" alt="" class="hidden md:block" />
            <img
              src="/src/assets/img/mini2.png"
              alt=""
              class="block md:hidden"
            />
            <p
              class="absolute inset-0 flex items-start justify-center text-white text-[10px] md:text-2xl font-bold bg-opacity-50 p-4 rounded"
            >
              {{ $t("le8") }}
            </p>
          </div>
          <div class="relative">
            <img
              src="/src/assets/img/people2.png"
              alt=""
              class="hidden md:block"
            />
            <img
              src="/src/assets/img/mini.png"
              alt=""
              class="block md:hidden"
            />
            <p
              class="absolute inset-0 flex items-end justify-center mb-4 md:mb-auot text-white text-[10px] md:text-2xl font-bold bg-opacity-50 p-4 rounded"
            >
              {{ $t("le9") }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

 flex 
