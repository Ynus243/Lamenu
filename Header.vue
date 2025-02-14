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
            <img :src="flagSrc" alt="Flag" class="h-4">
            {{ getLanguageName(selectedLanguage) }}
            <span class="ml-1">
              <svg :class="{ 'rotate-180': languageDropdownOpen }" class="h-4 w-4 transition-transform"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div v-if="languageDropdownOpen" class="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-32">
            <ul class="rounded-lg overflow-hidden">
              <li @click="selectLanguage('uz', '/src/assets/img/uzb-flag.png')" class="flex items-center gap-2 px-4 py-2 cursor-pointer">
                <img src="/src/assets/img/uzb-flag.png" alt="Uzb Flag" class="h-4">
                <span>Uzb</span>
              </li>
              <li @click="selectLanguage('ru', '/src/assets/img/ru.png')" class="flex items-center gap-2 px-4 py-2 cursor-pointer">
                <img src="/src/assets/img/ru.png" alt="Rus Flag" class="h-4">
                <span>Rus</span>
              </li>
              <li @click="selectLanguage('en', '/src/assets/img/en.png')" class="flex items-center gap-2 px-4 py-2 cursor-pointer">
                <img src="/src/assets/img/en.png" alt="Eng Flag" class="h-4">
                <span>Eng</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center gap-2 bg-white p-2 rounded-[46px]">
          <img src="/src/assets/img/doc.svg" alt="Document icon" class="h-4">
          <button class="text-gray-700 focus:outline-none">{{$t('button')}}</button>
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
          <li>{{$t('le')}}</li>
          <li>{{$t('le1')}}</li>
          <li>{{$t('le2')}}</li>
          <li>{{$t('le3')}}</li>
          <li>{{$t('le4')}}</li>
          <li>{{$t('le5')}}</li>
          <li>{{$t('le6')}}</li>
        </ul>
        <div class="mt-6 flex flex-col items-center space-y-4">
          <div class="flex space-x-4">
            <div @click="selectLanguage('uz', '/src/assets/img/uzb-flag.png')"
              class="flex items-center cursor-pointer">
              <img src="/src/assets/img/uzb-flag.png" alt="Uzb Flag" class="h-4">
              <span :class="{ 'font-bold': selectedLanguage === 'uz', 'font-normal': selectedLanguage !== 'uz' }">Uzb</span>
            </div>
            <div @click="selectLanguage('ru', '/src/assets/img/ru.png')" class="flex items-center cursor-pointer">
              <img src="/src/assets/img/ru.png" alt="Rus Flag" class="h-4">
              <span :class="{ 'font-bold': selectedLanguage === 'ru', 'font-normal': selectedLanguage !== 'ru' }">Rus</span>
            </div>
            <div @click="selectLanguage('en', '/src/assets/img/en.png')" class="flex items-center cursor-pointer">
              <img src="/src/assets/img/en.png" alt="Eng Flag" class="h-4">
              <span :class="{ 'font-bold': selectedLanguage === 'en', 'font-normal': selectedLanguage !== 'en' }">Eng</span>
            </div>
          </div>
          <button class="bg-white text-gray-700 border border-gray-700 rounded-full py-2 px-4 flex items-center">
            <img src="/src/assets/img/import1.png" alt="Download icon" class="h-4 mr-2">
            {{$t('button')}}
          </button>
          <button class="bg-orange-500 text-white rounded-[30px] py-2 px-4 flex items-center  ">
            <img src="/src/assets/img/call.png" alt="Call icon" class="h-4 mr-2">
            {{$t('button2')}}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { ref, watchEffect } from 'vue';

export default {
  name: 'Header',
  setup() {
    const { t, locale } = useI18n();

    const languageDropdownOpen = ref(false);
    const selectedLanguage = ref('uz');
    const flagSrc = ref("/src/assets/img/uzb-flag.png");
    const isMenuVisible = ref(false);

    function toggleLanguageDropdown() {
      languageDropdownOpen.value = !languageDropdownOpen.value;
    }

    function selectLanguage(language, flag) {
    selectedLanguage.value = language;
    flagSrc.value = flag;
    locale.value = language;
    localStorage.setItem('lang', language);
    languageDropdownOpen.value = false; 
    isMenuVisible.value = false;
  }

    function toggleMenuVisibility() {
      isMenuVisible.value = !isMenuVisible.value;
    }

    function getLanguageName(lang) {
      switch (lang) {
        case 'uz':
          return 'Uzb';
        case 'ru':
          return 'Rus';
        case 'en':
          return 'Eng';
        default:
          return '';
      }
    }

    watchEffect(() => {
      const storedLang = localStorage.getItem('lang');
      if (storedLang) {
        locale.value = storedLang;
        selectedLanguage.value = storedLang;
        switch (storedLang) {
          case 'uz':
            flagSrc.value = "/src/assets/img/uzb-flag.png";
            break;
          case 'ru':
            flagSrc.value = "/src/assets/img/ru.png";
            break;
          case 'en':
            flagSrc.value = "/src/assets/img/en.png";
            break;
        }
      }
    });

    return {
      languageDropdownOpen,
      selectedLanguage,
      flagSrc,
      isMenuVisible,
      toggleLanguageDropdown,
      selectLanguage,
      toggleMenuVisibility,
      getLanguageName,
      t,
      selectLanguage
    };
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
  transform: translateY(-100%);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
