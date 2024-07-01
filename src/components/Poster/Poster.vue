<template>
  <section class="p-[20px] mt-[20px] bg-[linear-gradient(82deg,#1A1A1A_12.49%,#272A36_87.51%)] rounded-[56px] max-md:px-5">
    <div class="flex flex-col-reverse md:flex-row md:gap-10">
      <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="/src/assets/img/phone.png" alt=""
          class="grow w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full" />
      </div>
      <div class="flex flex-col mr-5 w-6/12 max-md:ml-0 max-md:w-full">
        <article class="flex flex-col self-stretch pt-2.5 my-auto max-md:mt-10 max-md:max-w-full">
          <h1 class="text-[24px] md:text-5xl font-medium text-white max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            {{$t('title2')}}
          </h1>
          <p class="mt-11 text-[16px] md:text-xl text-slate-50 max-md:mt-10 max-md:max-w-full">
            {{$t('p3')}}
          </p>
          <div class="flex gap-4 justify-between mt-10 md:flex-wrap">
            <div
              class="flex justify-center items-center p-4 max-md:p-6 rounded-2xl border border-solid shadow-lg bg-slate-50 border-zinc-100 max-md:px-5">
              <img src="/src/assets/img/r-keep.png" alt="Payment method logo" class="aspect-[4.35] w-[141px]" />
            </div>
            <div
              class="flex justify-center items-center p-4 max-md:p-6 rounded-2xl border border-solid shadow-lg bg-slate-50 border-zinc-100 max-md:px-5">
              <img src="/src/assets/img/post.png" alt="Payment method logo" class="aspect-[3.7] w-[117px]" />
            </div>
            <div
              class="flex justify-center items-center p-4 max-md:p-6 rounded-2xl border border-solid shadow-lg bg-slate-50 border-zinc-100 max-md:px-5">
              <img src="/src/assets/img/jow.png" alt="Payment method logo" class="aspect-[2.94] w-[93px]" />
            </div>
            <div
              class="flex justify-center items-center p-4 max-md:p-6 rounded-2xl border border-solid shadow-lg bg-slate-50 border-zinc-100 max-md:px-5">
              <img src="/src/assets/img/iko.png" alt="Payment method logo" class="aspect-[2.56] w-[82px]" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
