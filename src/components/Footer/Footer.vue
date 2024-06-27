<template>
  <div class="bg-white">
    <div class="px-4">
      <header class="flex items-center justify-between h-20 border-b border-gray-200">
        <div class="logo flex items-center">
          <img src="/src/assets/img/logo.png" alt="Logo" class="h-10 hidden xl:block">
        </div>
        <ul class="flex flex-wrap gap-5 text-lg ">
          <li>Tezkor menyu</li>
          <li>Operatorlar</li>
          <li>Franshiza</li>
          <li>Oshxona</li>
          <li>Integratsiya</li>
          <li>Kuryerlar</li>
        </ul>
      </header>

      <footer class="block mt-4">
        <div class="footer-content flex flex-col justify-between py-4 px-5 space-y-2">
          <div class="contact-info flex flex-col items-start md:flex-row md:justify-between md:items-center">
            <p class="text-gray-600 font-halvar font-medium text-18px line-height-custom">+998 <span
                class="text-orange-500 text-24px">99 864 25 31</span></p>
            <div class=" flex space-x-4 gap-40px text-20px text-black-600 mt-2 ">
              <a href="#" class="flex items-center space-x-2">
                <img src="/src/assets/img/insta.svg" alt="Instagram" class="h-5 insta-icon">
                <span class="insta-text">Instagram</span>
              </a>
              <a href="#" class="flex items-center space-x-2">
                <img src="/src/assets/img/telega.svg" alt="Telegram" class="h-5 telega-icon">
                <span class="telega-text">Telegram</span>
              </a>
            </div>
          </div>

          <div class="policies flex flex-col md:flex-row md:justify-between items-start">
            <p class="text-black-600 text-24px">Powered by <a href="#" class="text-orange-500">Mimsoft</a></p>
            <div class="policy-links flex space-x-4 mt-2 sm:mt-0">
              <a href="#" class="text-gray-600 hover-underline">Privacy policy</a>
              <a href="#" class="text-gray-600 hover-underline">Terms of conditions</a>
            </div>
            <p class="text-black-600 text-24px">Designed by <a href="#" class="text-orange-500">Mazmoon</a></p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>