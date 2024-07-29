<template>
    <div class="justify-center items-center p-[16px] md:px-[100px]">
      <h1 class="text-center text-[24px] md:text-[40px] mb-[40px] font-[700]">Bizning narx navolarimiz</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-[24px]">
        <div v-for="(plan, index) in plans" :key="index" class="flex flex-col rounded-[40px] items-center bg-white p-[24px] h-full">
          <h2 class="font-[600] text-[16px]">{{ plan.title }}</h2>
          <p class="text-gray-500 font-[500]">
            <span class="font-[500] text-[32px] text-black">{{ plan.price }}</span>
            <span v-if="plan.price !== 'Договорная'"> / USD месяц</span>
          </p>
          <p class="text-gray-500 font-[400]">{{ plan.description }}</p>
          <div :class="{ 'mt-4': index !== plans.length - 1, 'mt-[39px]': index === plans.length - 1 }" class="flex flex-col items-center w-full">
            <button
              :class="{
                'bg-customOrange': index !== plans.length - 1,
                'bg-custom-gradient ': index === plans.length - 1,
                'w-full': true
              }"
              @click="scrollTo('section1')"  class="py-[16px] px-[80px] rounded-[46px] font-[500] text-[13px] text-white shadow-customOrangeShadow mb-4">
              Tarifni sotib oling
            </button>
            <button
              @click="toggleContent(index)"
              class="py-[16px] px-[80px] rounded-[46px] md:hidden block font-[500] text-[13px] border border-solid">
              Ko’proq ko’rish
            </button>
          </div>
          <transition name="slide-fade">
            <ul v-show="plan.showContent || isLargeScreen" class="mt-[24px] flex flex-col gap-y-4 flex-grow">
              <li v-for="(item, itemIndex) in plan.features" :key="itemIndex" class="font-[400] text-[14px] flex gap-2 items-start">
                <img src="/src/assets/img/tick-circle (1).svg" alt="">{{ item }}
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  export default {
    data() {
      return {
        isLargeScreen: window.innerWidth >= 768,
        plans: [
          {
            title: "Standart",
            price: "199$",
            description: "До 2 филиалов",
            showContent: false,
            features: [
              "Интеграция с POS (iiko, Jowi, Poster)",
              "Call center",
              "Вебсайт для клиентов",
              "Telegram WEB app для клиентов",
              "Принятие Online заказов и их обработка",
              "Интеграция с телефонией (диспетчерская)",
              "Интеграция с платежными платформами (Click, Payme, Uzum)",
              "Интеграции с агрегаторами: Yandex Eats, Express24",
              "Отдел логистики: Приложение для курьера (Android/iOS), Управление курьерами, Отслеживание доставки",
              "Интеграция с система Yandex Delivery",
              "Аналитика: Инструменты для анализа данных",
              "Техническая поддержка ( 09:00-18:00 )"
            ]
          },
          {
            title: "Pro",
            price: "299$",
            description: "До 3 филиалов",
            showContent: false,
            features: [
              "Интеграция с POS (iiko, Jowi, Poster)",
              "Call center",
              "Вебсайт для клиентов",
              "Telegram WEB app для клиентов",
              "Принятие Online заказов и их обработка",
              "Интеграция с телефонией (диспетчерская)",
              "Интеграция с платежными платформами (Click, Payme, Uzum)",
              "Интеграции с агрегаторами: Yandex Eats, Express24",
              "Отдел логистики: Приложение для курьера (Android/iOS), Управление курьерами, Отслеживание доставки",
              "Интеграция с система Yandex Delivery",
              "Экран заказов для филиала",
              "Экран повара",
              "Аналитика: Инструменты для анализа данных",
              "Техническая поддержка ( 09:00-18:00 )"
            ]
          },
          {
            title: "Max",
            price: "499$",
            description: "До 5 филиалов",
            showContent: false,
            features: [
              "Интеграция с POS (iiko, Jowi, Poster)",
              "Call center",
              "Вебсайт для клиентов",
              "Telegram WEB app для клиентов",
              "Принятие Online заказов и их обработка",
              "Интеграция с телефонией (диспетчерская)",
              "Интеграция с платежными платформами (Click, Payme, Uzum)",
              "Интеграции с агрегаторами: Yandex Eats, Express24",
              "Отдел логистики: Приложение для курьера (Android/iOS), Управление курьерами, Отслеживание доставки",
              "Интеграция с система Yandex Delivery",
              "Экран заказов для филиала",
              "Экран повара",
              "Аналитика: Инструменты для анализа данных",
              "Техническая поддержка ( 09:00-18:00 )",
              "Принятие Online заказов и их обработка",
              "Техническая поддержка 24/7",
              "Telegram Courier bot"
            ]
          },
          {
            title: "Standart",
            price: "Договорная",
            description: "",
            showContent: false,
            features: [
              "Интеграция с POS (iiko, Jowi, Poster)",
              "Call center",
              "Вебсайт для клиентов",
              "Telegram WEB app для клиентов",
              "Принятие Online заказов и их обработка",
              "Интеграция с телефонией (диспетчерская)",
              "Интеграция с платежными платформами (Click, Payme, Uzum)",
              "Интеграции с агрегаторами: Yandex Eats, Express24",
              "Отдел логистики: Приложение для курьера (Android/iOS), Управление курьерами, Отслеживание доставки",
              "Интеграция с система Yandex Delivery",
              "Экран заказов для филиала",
              "Экран повара",
              "Аналитика: Инструменты для анализа данных",
              "Техническая поддержка ( 09:00-18:00 )",
              "Техническая поддержка 24/7",
              "Telegram Courier bot",
              "Приложения для клиента (Android/iOS)"
            ]
          }
        ]
      };
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize(); 
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.isLargeScreen = window.innerWidth >= 768;
      },
      toggleContent(index) {
        this.plans[index].showContent = !this.plans[index].showContent;
      },
      scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    }
  };
  </script>
  
  <style scoped>
  .align-middle {
    align-self: center;
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.5s ease;
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(10px);
  }
  </style>
  
  