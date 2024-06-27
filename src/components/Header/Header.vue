<template>
  <div class="mx-auto px-[40px] justify-between flex-wrap">
    <header class="flex flex-wrap items-center justify-between py-2">
      <div>
        <img src="/src/assets/img/logo.png" alt="Logo" class="h-10">
      </div>
      <div class="flex items-center gap-12 md:hidden">
        <button @click="toggleMenuVisibility" class="text-gray-700 focus:outline-none">
          <div class="relative">
            <div class="h-0.5 w-6 bg-gray-700 my-1 rounded transition-transform duration-300"
              :class="{ 'rotate-45 translate-y-2': isMenuVisible }"></div>
            <div class="h-0.5 w-6 bg-gray-700 my-1 rounded transition-opacity duration-300"
              :class="{ 'opacity-0': isMenuVisible }"></div>
            <div class="h-0.5 w-6 bg-gray-700 my-1 rounded transition-transform duration-300"
              :class="{ '-rotate-45 -translate-y-2': isMenuVisible }"></div>
          </div>
        </button>
      </div>
      <div class="hidden md:flex items-center gap-12">
        <div class="relative">
          <button @click="toggleLanguageDropdown"
            class="flex items-center gap-2 bg-white p-2 rounded-[46px] focus:outline-none">
            <img :src="flagSrc" alt="Flag" class="h-6 w-6 rounded-full">
            {{ selectedLanguage }}
            <span class="ml-1">
              <svg :class="{ 'rotate-180': languageDropdownOpen }" class="h-4 w-4 transition-transform"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div v-if="languageDropdownOpen" class="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-32">
            <ul class="rounded-lg overflow-hidden">
              <li @click="selectLanguage('Uzb', '/src/assets/img/uzb-flag.png')"
                class="flex items-center gap-2 px-4 py-2 cursor-pointer">
                <img src="/src/assets/img/uzb-flag.png" alt="Uzbekistan flag" class="h-6 w-6 rounded-full">
                Uzb
              </li>
              <li @click="selectLanguage('Rus', '/src/assets/img/ru.png')"
                class="flex items-center gap-2 px-4 py-2 cursor-pointer">
                <img src="/src/assets/img/ru.png" alt="Russia flag" class="h-6 w-6 rounded-full">
                Rus
              </li>
              <li @click="selectLanguage('Eng', '/src/assets/img/en.png')"
                class="flex items-center gap-2 px-4 py-2 cursor-pointer">
                <img src="/src/assets/img/en.png" alt="English flag" class="h-6 w-6 rounded-full">
                Eng
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center gap-2 bg-white p-2 rounded-[46px]">
          <img src="/src/assets/img/doc.svg" alt="Document icon" class="h-4">
          <button class="text-gray-700 focus:outline-none">Ilovani yuklab oling</button>
        </div>
        <div>
          <p class="text-orange-500 font-bold text-2xl leading-none">
            <span class="text-lg text-gray-700">+998</span>
            99 864 25 31
          </p>
        </div>
      </div>
    </header>
    <transition name="slide-fade">
      <div v-if="isMenuVisible"
        class="fixed inset-0 z-50 flex flex-col bg-white p-4 transition-transform duration-300 transform">
        <div class="flex justify-between items-center">
          <img src="/src/assets/img/logo.png" alt="Logo" class="h-10">
          <button @click="toggleMenuVisibility" class="text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul class="mt-4 space-y-4 text-gray-700 flex-grow flex flex-col items-center justify-center">
          <li>Asosiy</li>
          <li>Tezkor menyu</li>
          <li>Operatorlar</li>
          <li>Franshiza</li>
          <li>Oshxona</li>
          <li>Integratsiya</li>
          <li>Kuryerlar</li>
        </ul>
        <div class="mt-6 flex flex-col items-center space-y-4">
          <div class="flex space-x-4">
            <div @click="selectLanguage('Uzb', '/src/assets/img/uzb-flag.png')"
              class="flex items-center cursor-pointer">
              <img src="/src/assets/img/uzb-flag.png" alt="Uzbekistan flag" class="h-6 w-6 rounded-full">
              <span :class="{ 'font-bold': selectedLanguage === 'Uzb', 'font-normal': selectedLanguage !== 'Uzb' }"
                class="ml-2">Uzb</span>
            </div>
            <div @click="selectLanguage('Rus', '/src/assets/img/ru.png')" class="flex items-center cursor-pointer">
              <img src="/src/assets/img/ru.png" alt="Russia flag" class="h-6 w-6 rounded-full">
              <span :class="{ 'font-bold': selectedLanguage === 'Rus', 'font-normal': selectedLanguage !== 'Rus' }"
                class="ml-2">Rus</span>
            </div>
            <div @click="selectLanguage('Eng', '/src/assets/img/en.png')" class="flex items-center cursor-pointer">
              <img src="/src/assets/img/en.png" alt="English flag" class="h-6 w-6 rounded-full">
              <span :class="{ 'font-bold': selectedLanguage === 'Eng', 'font-normal': selectedLanguage !== 'Eng' }"
                class="ml-2">Eng</span>
            </div>
          </div>
          <button class="bg-white text-gray-700 border border-gray-700 rounded-full py-2 px-4 flex items-center">
            <img src="/src/assets/img/import.svg" alt="Download icon" class="h-4 mr-2">
            Ilovani yuklab oling
          </button>
          <button class="bg-orange-500 text-white rounded-[30px] py-2 px-4 flex items-center  ">
            <img src="/src/assets/img/call.png" alt="Call icon" class="h-4 mr-2">
            Biz bilan bog‘lanish
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      languageDropdownOpen: false,
      selectedLanguage: 'Uzb',
      flagSrc: "/src/assets/img/uzb-flag.png",
      isMenuVisible: false,
    };
  },
  methods: {
    toggleLanguageDropdown() {
      this.languageDropdownOpen = !this.languageDropdownOpen;
    },
    selectLanguage(language, flag) {
      this.selectedLanguage = language;
      this.flagSrc = flag;
      this.languageDropdownOpen = false;
    },
    toggleMenuVisibility() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  opacity: 0;
  transform: translatey(-100%);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translatey(-100%);
}
</style>
