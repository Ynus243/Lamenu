<template>
    <div class="px-[16px] xx:px-[100px]">
        <div class="items-center grid grid-cols-1 xx:grid-cols-3">
            <h1 class="text-[24px] md:text-[40px]  col-span-2 font-Ubuntu">
                Mavjud agregatorlardan buyurtmani to’g’ridan to’g’ri kassaga yo’naltirish
            </h1>
            <div class="flex justify-center items-center ">
    <div class="bb:gap-[20px] p-2 mt-[24px] xx:mt-0 justify-center w-[450px] xx:w-auto items-center rounded-[80px] bg-customGrey1 flex">
        <button 
            v-for="(button, index) in buttons" 
            :key="index" 
            :class="{'bg-white': activeButton === index, 'text-customGray': true, 'rounded-[80px] py-2 px-4 text-[16px] font-[500]': true}"
            @click="setActiveButton(index)"
        >
            {{ button }}
        </button>
    </div>
</div>

        </div>

        <section class="p-[24px] xx:p-10 mt-[40px] bg-white rounded-[40px]">
            <div class="flex flex-wrap xx:flex-nowrap gap-5">
                <div>
                    <img src="/src/assets/img/orig 1.svg" />
                    <div class="flex flex-col mt-10">
                        <h1 class="text-[20px]  bb:text-[24px] font-Golos font-[600]">
                            Yandex Eda Delivery integratsiyasi
                        </h1>
                        <p class="mt-4 text-[12px]  bb:text-[16px] leading-4 md:leading-6 text-zinc-600">
                            Ilovamiz, qulay xizmatlarni ta'minlash uchun YandexGO Delivery bilan hamkorlik
                            qiladi! Bu orqali siz yetkazib berish jarayonini toliq YandexGO yetkazib berish
                            hizmatiga topshirasiz
                        </p>
                    </div>
                    <div class="mt-3 xx:mt-[200px]">
                        <div class="grid grid-cols-1 xx:grid-cols-2 gap-5">
                            <div class="grow p-6 rounded-3xl border border-solid bg-slate-50 border-slate-200">
                                <h2 class="text-[12px]  bb:text-[16px] font-Golos font-[600]">Avto chaqiruv</h2>
                                <p class="mt-4 text-[12px]   text-zinc-600">
                                    YandexGO delivery integratsiya orqali buyurtmalaringizni tizim avtomatik
                                    tazrda kuryer chaqirgan holda mijozingizga yetkazib beradi
                                </p>
                            </div>
                            <div class="grow p-6 rounded-3xl border border-solid bg-slate-50 border-slate-200">
                                <h2 class="text-[12px]  bb:text-[16px] font-Golos font-[600]">Vaqt tejash</h2>
                                <p class="mt-4 text-[12px]  text-zinc-600">
                                    LaMenu buyurtma tayyor bo'lish vaqtini inobatga olgan holda kuryer
                                    chaqirib qoyadi. Kuryer buyurtma tayyor bo'lish vaqtiga kelib turadi. Bu esa
                                    yetkazib berish vaqtini tejaydi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/src/assets/img/Yandex.png" alt="" class="bb:w-[600px] xx:w-[500px]  w-full" />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeButton: 0,  
            buttons: ["Yandex", "Uzum", "Express", "Bringo"]
        };
    },
    methods: {
        setActiveButton(index) {
            this.activeButton = index;
        }
    }
};
</script>

<style>

</style>
