<template>
  <div class="bg-white px-[45px]">
    <div class="">
      <div class="block md:flex items-center border-b pb-10 border-gray-200 justify-between">
        <div class="">
          <img src="/src/assets/img/logo.png" alt="Logo" class="h-10 pt-[13px] mb-[50px] ">
        </div>
        <header class="flex items-center justify-between h-20">
          <ul class="flex flex-wrap gap-5 text-lg">
            <li>{{$t('le1')}}</li>
            <li>{{$t('le2')}}</li>
            <li>{{$t('le3')}}</li>
            <li>{{$t('le4')}}</li>
            <li>{{$t('le5')}}</li>
            <li>{{$t('le6')}}</li>
          </ul>
        </header>
      </div>

      <footer class="block mt-4">
        <div class="footer-content flex flex-col justify-between space-y-2">
          <div class="contact-info flex flex-col items-start md:flex-row md:justify-between md:items-center">
            <p class="text-gray-600 font-halvar font-medium text-18px line-height-custom">+998 <span
                class="text-orange-500 text-[25px] md:text-24px">99 864 25 31</span></p>
            <div class="flex space-x-4 gap-40px text-20px text-black-600 mt-2">
              <a href="#" class="flex items-center space-x-2">
                <div class="bg-gray-200 p-4 rounded-[8px] md:p-1 md:rounded-[30px]"><img src="/src/assets/img/insta.svg"
                    alt="Instagram" class="h-5 insta-icon"></div>
                <span class="insta-text hidden md:block">Instagram</span>
              </a>
              <a href="#" class="flex items-center space-x-2">
                <div class="bg-gray-200 p-4 rounded-[8px] md:p-1 md:rounded-[30px]"><img
                    src="/src/assets/img/telega.svg" alt="Telegram" class="h-5 telega-icon"></div>
                <span class="telega-text hidden md:block">Telegram</span>
              </a>
            </div>
          </div>
          <div class="border-gray-200 border-b pt-4 md:border-none mt-4"></div>

          <div class="policies flex flex-col md:flex-row md:justify-between items-start pt-4">
            <p class="text-black-600 font-semibold text-xl">Powered by <a href="#" class="text-orange-500 font-normal">Mimsoft</a></p>
            <div class="policy-links md:flex space-x-4 mt-2 flex gap-5">
              <a href="#" class="text-gray-300 hover-underline mr-[-18px] md:mr-[0]">Privacy policy</a>
              <a href="#" class="text-gray-300 hover-underline">Terms of conditions</a>
            </div>
            <p class="text-black-600 font-semibold text-xl">Designed by <a href="#" class="text-orange-500">Mazmoon</a></p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
