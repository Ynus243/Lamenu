<script setup>
 
 import Footer from './Footer/Footer.vue' 
   import Header from './Header/Header.vue' 
 import Restaurant from './Restaurant/Restaurant.vue' 
 import Menu from './Menu/Menu.vue' 
 import Poster from './Poster/Poster.vue' 
  import Call from './Call/Call.vue' 
 import Franchises from './Franchises/Franchises.vue'
 import Payment from './Payment/Payment.vue' 
   import Yandex from './Yandex/Yandex.vue' 
  import Couriers from './Couriers/Couriers.vue'
 import Systems  from './Systems/Systems.vue' 
 import Procedures from './Procedures/Procedures.vue' 





</script>

<template>
   <Header />
    <div class="p-4 md:p-[40px] ">
    <Restaurant />
    <Menu />
    <Poster />
    <Call />
    <Franchises />
    <Procedures />
    <Systems />
    <Couriers />
    <Yandex />
    <Payment />
</div>

<Footer />
</template>

<style></style>