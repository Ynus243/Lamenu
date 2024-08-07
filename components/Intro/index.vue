<template>
    <section class="p-4 xx:pl-[100px] relative">
        <div class="flex gap-5 relative max-xx:flex-col h-full">
            <div>
                <h1 class="text-[32px] md:text-[72px] mt-[32px] leading-[35px] md:leading-[80px] xx:mt-[70px] font-Ubuntu">
                    <transition name="slide-fade" mode="out-in">
                        <span :key="currentWordIndex">{{ currentWord }}</span>
                    </transition>
                    <br> uchun to'liq yetkazib <br>
                    berish platformasi
                </h1>
                <button @click="scrollTo('section1')" class="text-[14px] md:text-[16px] xx:w-auto w-full font-[500] bg-customOrange mt-[40px] shadow-customOrangeShadow rounded-[46px] py-[16px] px-[40px] text-white">
                    Demo versiyasini olish
                </button>
                <p class="text-customGray text-[14px] mt-[16px] font-[400]">5 kun ichida to’liq ishga tushirib beramiz</p>
            </div>
        </div>
        <img src="/src/assets/img/Computer.svg" alt="" class="absolute xx:bottom-[-50px] right-0 w-full xx:block hidden bb:w-[850px] xx:w-[700px]"/>
        <img src="/src/assets/img/Computer.svg" alt="" class=" xx:bottom-[-50px] right-0 xx:hidden block w-full xx:w-[900px]"/>
    </section>
</template>

<script>
export default {
    name: 'DemoSection',
    data() {
        return {
            words: ['Barlar', 'Kafelar', 'Restoranlar'],
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
            }, 1500);
        },
        scrollTo(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
};
</script>

<style scoped>
section {
    position: relative;
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 1s ease;
    position: absolute;
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
.slide-fade-enter-to, .slide-fade-leave {
    transform: translateY(0);
    opacity: 1;
}
</style>
