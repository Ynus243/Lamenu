<template>
    <section class="p-4 md:pl-[100px] relative">
        <div class="flex gap-5 relative max-md:flex-col h-full">
            <div>
                <h1 class="text-[32px] md:text-[72px] mt-[32px] leading-[35px] md:leading-[80px] md:mt-[70px] font-[700]">
                    <transition name="slide-fade" mode="out-in">
                        <span :key="currentWordIndex">{{ currentWord }}</span>
                    </transition>
                    <br> uchun to'liq yetkazib <br>
                    berish platformasi
                </h1>
                <button class="text-[14px] md:text-[16px] md:w-auto w-full font-[500] bg-customOrange mt-[40px] shadow-customOrangeShadow rounded-[46px] py-[16px] px-[40px] text-white">
                    Demo versiyasini olish
                </button>
                <p class="text-customGray text-[14px] mt-[16px] font-[400]">5 kun ichida to’liq ishga tushirib beramiz</p>
            </div>
        </div>
        <img src="/src/assets/img/Computer.svg" alt="" class="absolute md:bottom-[-50px] right-0 w-full  md:w-[900px]" />
      
    </section>
</template>

<script>
export default {
    name: 'DemoSection',
    data() {
        return {
            words: ['Barlar', 'Cafelar', 'Restaranlar'],
            currentWordIndex: 0,
        };
    },
    computed: {
        currentWord() {
            return this.words[this.currentWordIndex];
        },
    },
    mounted() {
        this.startWordRotation();
    },
    methods: {
        startWordRotation() {
            setInterval(() => {
                this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            }, 2000);
        },
    },
};
</script>

<style scoped>
section {
    position: relative;
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
    transform: translateY(20px);
    opacity: 0;
}
</style>