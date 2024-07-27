<template>
    <div class="justify-center items-center p-[16px] md:px-[100px]">
      <h1 class="text-center text-[24px] md:text-[40px] mb-[40px] font-[700]">Bizning narx navolarimiz</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-[24px] md:gap-[32px]">
        <div v-for="(plan, index) in plans" :key="index" :class="`flex flex-col rounded-[40px] items-center bg-white p-[24px] ${plan.additionalClass}`">
          <h2 class="font-[600] text-[16px]">{{ plan.title }}</h2>
          <p class="text-gray-500 font-[500]">
            <span class="font-[500] text-[32px] text-black">{{ plan.price }}</span> / USD месяц
          </p>
          <p class="text-gray-500 font-[400]">{{ plan.branches }}</p>
          <button
            class="py-[16px] px-[80px] rounded-[46px] bg-customOrange font-[500] text-[13px] text-white mt-[24px] shadow-customOrangeShadow">
            Tarifni sotib oling
          </button>
          <button @click="toggleContent(index)"
            class="py-[16px] px-[80px] rounded-[46px] font-[500] text-[13px] border border-solid mt-[24px] md:hidden">
            Ko’proq ko’rish
          </button>
          <ul :class="{'block': plan.showContent, 'hidden md:block': !plan.showContent}" class="mt-[24px] flex flex-col gap-y-[16px] md:gap-y-[20px]">
            <li class="font-[400] text-[14px] flex gap-2 items-start" v-for="(item, itemIndex) in plan.content" :key="itemIndex">
              <img src="/src/assets/img/tick-circle (1).svg" alt="">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        plans: [
          {
            title: "Standart",
            price: "199$",
            branches: "До 2 филиалов",
            content: [
              'Интеграция с POS (iiko, Jowi, Poster)',
              'Call center',
              'Вебсайт для клиентов',
              'Telegram WEB app для клиентов',
              'Принятие Online заказов и их обработка',
              'Интеграция с телефонией (диспетчерская)',
              'Интеграция с платежными платформами (Click, Payme, Uzum)',
              'Интеграции с агрегаторами: Yandex Eats, Express24',
              'Отдел логистики: Приложение для курьера (Android/iOS), Управление курьерами, Отслеживание доставки',
              'Интеграция с система Yandex Delivery',
              'Аналитика: Инструменты для анализа данных',
              'Техническая поддержка ( 09:00-18:00 )'
            ],
            showContent: false,
            additionalClass: ""
          },
          {
            title: "Pro",
            price: "299$",
            branches: "До 3 филиалов",
            content: [
              'Интеграция с POS (iiko, Jowi, Poster)',
              'Call center',
              'Вебсайт для клиентов',
              'Telegram WEB app для клиентов',
              'Принятие Online заказов и их обработка',
              'Интеграция с телефонией (диспетчерская)',
              'Интеграция с платежными платформами (Click, Payme, Uzum)',
              'Интеграции с агрегаторами: Yandex Eats, Express24',
              'Отдел логистики: Приложение для курьера (Android/iOS), Управление курьерами, Отслеживание доставки',
              'Интеграция с система Yandex Delivery',
              'Экран заказов для филиала',
              'Экран повара',
              'Аналитика: Инструменты для анализа данных',
              'Техническая поддержка ( 09:00-18:00 )'
            ],
            showContent: false,
            additionalClass: "bg-customBackground border-[2px] border-solid border-customOrange"
          },
          {
            title: "Max",
            price: "499$",
            branches: "До 5 филиалов",
            content: [
              'Интеграция с POS (iiko, Jowi, Poster)',
              'Call center',
              'Вебсайт для клиентов',
              'Telegram WEB app для клиентов',
              'Принятие Online заказов и их обработка',
              'Интеграция с телефонией (диспетчерская)',
              'Интеграция с платежными платформами (Click, Payme, Uzum)',
              'Интеграции с агрегаторами: Yandex Eats, Express24',
              'Отдел логистики: Приложение для курьера (Android/iOS), Управление курьерами, Отслеживание доставки',
              'Интеграция с система Yandex Delivery',
              'Экран заказов для филиала',
              'Экран повара',
              'Аналитика: Инструменты для анализа данных',
              'Техническая поддержка ( 09:00-18:00 )',
              'Техническая поддержка 24/7',
              'Telegram Courier bot'
            ],
            showContent: false,
            additionalClass: ""
          },
          {
            title: "Enterprise",
            price: "Договорная",
            branches: "",
            content: [
              'Интеграция с POS (iiko, Jowi, Poster)',
              'Call center',
              'Вебсайт для клиентов',
              'Telegram WEB app для клиентов',
              'Принятие Online заказов и их обработка',
              'Интеграция с телефонией (диспетчерская)',
              'Интеграция с платежными платформами (Click, Payme, Uzum)',
              'Интеграции с агрегаторами: Yandex Eats, Express24',
              'Отдел логистики: Приложение для курьера (Android/iOS), Управление курьерами, Отслеживание доставки',
              'Интеграция с система Yandex Delivery',
              'Экран заказов для филиала',
              'Экран повара',
              'Аналитика: Инструменты для анализа данных',
              'Техническая поддержка ( 09:00-18:00 )',
              'Техническая поддержка 24/7',
              'Telegram Courier bot',
              'Приложения для клиента (Android/iOS)'
            ],
            showContent: false,
            additionalClass: ""
          }
        ]
      };
    },
    methods: {
      toggleContent(index) {
        this.plans[index].showContent = !this.plans[index].showContent;
      }
    }
  };
  </script>
  
  <style scoped>
  .bg-customOrange {
    background-color: #FFA500; 
  }
  .shadow-customOrangeShadow {
    box-shadow: 0px 4px 6px rgba(255, 165, 0, 0.3);
  }
  </style>
  