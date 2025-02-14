<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const left = ref("50%");
const top = ref("50%");
const accepted = ref(false);
const hearts = ref<{ id: number; x: string }[]>([]); // Сердечки
let intervalId: number | null = null;
let heartId = 0;

onMounted(() => {
  setTimeout(() => {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    if (yesButton && noButton) {
      const rect = yesButton.getBoundingClientRect();
      left.value = `${rect.right + 20}px`;
      top.value = `${rect.top}px`;
    }
  }, 0);

  intervalId = setInterval(moveButton, 3000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

// Двигаем кнопку "Нет"
const moveButton = () => {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);

  left.value = `${randomX}px`;
  top.value = `${randomY}px`;
};

// Нажатие на "Да" -> Запускаем сердечки ❤️
const acceptValentine = () => {
  accepted.value = true;
  if (intervalId) clearInterval(intervalId);

  // Запускаем сердечки каждую 0.3 секунды
  const heartInterval = setInterval(() => {
    hearts.value.push({ id: heartId++, x: `${Math.random() * 100}%` });

    // Удаляем сердечки через 5 секунд
    setTimeout(() => {
      hearts.value.shift();
    }, 5000);
  }, 300);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen w-full relative overflow-hidden">
    <template v-if="!accepted">
      <!-- GIF -->
      <img 
        src="https://media4.giphy.com/media/kfRKF0iqA8jyDqq1nH/giphy.gif" 
        alt="Valentine GIF" 
        class="w-40 h-40 mb-4" 
      />

      <p class="text-2xl font-semibold mb-8">Ты будешь моим Валентином?</p>
      
      <div class="flex gap-2 mr-[70px]">
        <button 
          id="yes-button" 
          class="px-4 py-2 flex items-center font-medium bg-[#DB2777] rounded-full text-white"
          @click="acceptValentine"
        >
          Да
        </button>
        <button
          id="no-button"
          class="px-4 py-2 flex items-center bg-gray-300 rounded-full font-medium text-black absolute transition-all duration-300"
          :style="{ left, top }"
          @click="moveButton"
        >
          Нет
        </button>
      </div>
    </template>

    <!-- Если "Да" нажато -->
    <template v-else>
        <div v-for="heart in hearts" :key="heart.id"
      class="absolute text-red-500  text-3xl animate-fall"
      :style="{ left: heart.x }">
      ❤️
    </div>
        <p class="text-3xl font-semibold ml-24 felx flex-wrap text-pink-600 animate-bounce">Я знал, что ты согласишься! ❤️</p>

      <img 
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHM1ZGwzbjBzbDIwcGQ2YnhibzJiMDQ3amdxaWxlNHFwNG16NmNvNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ok3mfHbhzFVQWca9Rt/giphy.gif" 
        alt="Love GIF" 
        class="w-40 h-40 mb-4" 
      />
    </template>

    <!-- Сердечки -->
    
  </div>
</template>

<style>
@keyframes fall {
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

.animate-fall {
  animation: fall 5s linear infinite;
}
</style>


