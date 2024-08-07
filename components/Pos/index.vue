<template>
    <div class="px-[16px] xx:px-[100px] gap-[24px] grid grid-cols-1 xx:grid-cols-2">
       
        <div class="flex flex-col bg-white rounded-[24px] p-6 col-span-1">
            <h1 class="text-[16px]  bb:text-[24px] font-[500]">Mavjud POS tizimlariga integratisya</h1>
            <p class="text-[14px]  bb:text-[16px] font-[400] text-gray-600 mt-[16px]">LaMenu tizimini integrator sifatidaham ishlaydi. Restoranda mavjud POS tizimlariga tashqi tizimlar bilan bog’lanish imkoniyatini beradi</p>
            <h2 class="text-[16px] bb:text-[20px] font-Golos font-[600] mt-[32px]">Quyidagi POS tizimlari bilan integrasiya qilingan:</h2>
            <div class="flex flex-wrap gap-[16px] mt-[16px]">
                <img src="/src/assets/img/image 328.svg" alt="" class="py-[10px] px-[20px] w-[110px] bg-gray-100 rounded-[16px]">
                <img src="/src/assets/img/image 329.svg" alt="" class="py-[10px] px-[10px] w-[90px] bg-gray-100 rounded-[16px]">
                <img src="/src/assets/img/image 330.svg" alt="" class="py-[10px] px-[20px] w-[100px]  bg-gray-100 rounded-[16px]">
                <img src="/src/assets/img/image 350.svg" alt="" class="py-[10px] px-[20px] w-[90px]  bg-gray-100 rounded-[16px]">
            </div>
        </div>
       
        <div class="xx:flex gap-[24px] col-span-1">
            <div class="p-[24px] bg-white rounded-[24px] flex-1">
                <img src="/src/assets/img/3d-cube-scan.svg" alt="" class="p-[12px] border border-solid rounded-[12px]">
                <h2 class="text-[16px]  bb:text-[20px] font-Golos font-[600] my-[16px]">Onlayn Oshxona</h2>
                <p class="text-[12px]  bb:text-[16px] font-[400] text-gray-600">YandexGO delivery integratsiya orqali buyurtmalaringizni tizim avtomatik tarzda kuryer chaqirgan holda mijozingizga yetkazib beradi</p>
            </div>
            <div class="p-[24px] bg-white rounded-[24px] xx:mt-0 mt-[12px] flex-1">
                <img src="/src/assets/img/timer.svg" alt="" class="p-[12px] border border-solid rounded-[12px]">
                <h2 class="text-[16px] bb:text-[20px] font-Golos font-[600] my-[16px]">Kassa</h2>
                <p class="text-[12px]  bb:text-[16px] font-[400] text-gray-600">InHouse holatda buyurtma chek chiqarilib beriladi va to‘lov Soliq Qomidatasidan o‘tkaziladi</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.grid-cols-2 {
    grid-template-columns: 1fr 1fr;
}
.col-span-1 {
    grid-column: span 1 / span 1;
}

.flex-1 {
    flex: 1;
}
</style>
