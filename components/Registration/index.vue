<template>
    <div class="p-[16px] xx:p-[100px]">
        <div class="bg-white rounded-[46px] p-[24px] xx:py-[80px] xx:px-[100px] xx:flex">
            <div class="flex flex-col w-full">
                <h1 id="section1" class="text-[24px] xx:text-[40px] font-Ubuntu mb-[40px]">Demo’ni bepul oling</h1>
                <div class="space-y-4 p-2">
                    <div class="space-y-2">
                        <label for="name" class="text-lg font-medium text-gray-900">Ismingiz</label>
                        <input type="text" id="name" v-model="formData.name" placeholder="Ismingizni kiriting"
                            class="w-full p-2 border border-gray-100 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            :class="{ 'border-red-500': errors.name }">
                        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
                    </div>
                    <div class="space-y-2">
                        <label for="phone" class="text-lg font-medium text-gray-900">Telefon raqam</label>
                        <input type="text" id="phone" v-model="formData.phone" placeholder="Telefon raqamingizni kiriting"
                            v-mask="'+998 ## ### ## ##'" class="w-full p-2 border border-gray-100 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            :class="{ 'border-red-500': errors.phone }">
                        <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
                    </div>
                    <div class="space-y-2">
                        <label for="restaurant" class="text-lg font-medium text-gray-900">Restoran yoki kafe nomi</label>
                        <input type="text" id="restaurant" v-model="formData.restaurant" placeholder="Restoran nomini kiriting"
                            class="w-full p-2 border border-gray-100 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            :class="{ 'border-red-500': errors.restaurant }">
                        <p v-if="errors.restaurant" class="text-red-500 text-sm">{{ errors.restaurant }}</p>
                    </div>
                    <div class="space-y-2">
                        <label for="email" class="text-lg font-medium text-gray-900">Email</label>
                        <input type="email" id="email" v-model="formData.email" placeholder="Elektron pochtangizni kiriting"
                            class="w-full p-2 border border-gray-100 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            :class="{ 'border-red-500': errors.email }">
                        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
                    </div>
                </div>
                <div class="flex justify-end mt-4">
                    <button @click="submitForm" class="bg-customOrange w-full xx:w-auto justify-center shadow-customOrangeShadow flex items-center gap-2 px-6 py-3 rounded-[46px] text-white font-medium text-[16px]">
                        Jo’natish 
                        <img :class="{ 'animate': animate }" src="/src/assets/img/Line arrow-right (1).svg" alt="">
                    </button>
                </div>
            </div>
            <img src="/src/assets/img/Big.svg" alt="" class="xx:mt-0 mt-[24px] w-[500px] bb:w-full">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mask } from 'vue-the-mask';

export default {
    directives: { mask },
    data() {
        return {
            animate: false,
            formSubmitted: false,
            formData: {
                name: '',
                phone: '',
                restaurant: '',
                email: '',
            },
            errors: {},
            url: '',
        };
    },
    methods: {
        animateArrow() {
            this.animate = true;
            setTimeout(() => {
                this.animate = false;
            }, 1500);
        },

        validateForm() {
            this.errors = {};

            if (!this.formData.name) {
                this.errors.name = 'Ismingizni kiriting.';
            }
            if (!this.formData.phone) {
                this.errors.phone = 'Telefon raqamingizni kiriting.';
            } else if (!this.validPhone(this.formData.phone)) {
                this.errors.phone = 'Telefon raqami +998 bilan boshlanishi kerak va 9 ta raqamdan iborat bo\'lishi kerak.';
            }
            if (!this.formData.restaurant) {
                this.errors.restaurant = 'Restoran yoki kafe nomini kiriting.';
            }
            if (!this.formData.email) {
                this.errors.email = 'Elektron pochtangizni kiriting.';
            } else if (!this.validEmail(this.formData.email)) {
                this.errors.email = 'Yaroqli email kiriting (masalan, user@gmail.com).';
            }

            return Object.keys(this.errors).length === 0;
        },

        validPhone(phone) {
            const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/;
            return phoneRegex.test(phone);
        },

        validEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        async submitForm() {
            if (!this.validateForm()) {
                return;
            }

            this.animateArrow();
            this.url = 'https://api-dev.lamenu.uz/api/support/v1/offer';

            console.log("URL: " + this.url);
            
            try {
                const response = await axios.post(this.url, this.formData);
                console.log('Form submitted successfully', response.data);
                this.formSubmitted = true;
                this.resetForm();
            } catch (error) {
                console.error('There was an error submitting the form', error);
            }
        },
        resetForm() {
            this.formData = {
                name: '',
                phone: '',
                restaurant: '',
                email: '',
            };
            this.formSubmitted = false;
        }
    },
};
</script>

<style scoped>
@keyframes fly {
    0% { transform: translateX(0); opacity: 1; }
    50% { transform: translateX(100px); opacity: 0; }
    51% { transform: translateX(-100px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}

.animate {
    animation: fly 1.5s ease-in-out;
}
</style>
