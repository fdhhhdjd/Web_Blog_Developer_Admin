<template>
  <div class="flex items-center justify-center w-full">
    <div class="text-center">
      <div class="flex flex-col items-center space-y-2">
        <img
          src="../../assets/success/animation_lkp12kwc_small.gif"
          alt=""
          class="w-25 h-20 mx-auto mb-4"
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="text-green-600 w-20 h-20 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h1 class="text-6xl font-bold mb-2">
Thank You!
</h1>
      <p class="mb-6 mt-10">
        Thank you for your interest! Check your email for a link to the guide.
      </p>
      <RouterLink to="/">
        <span
          class="inline-flex items-center px-6 py-2 text-white bg-[#ffa800] border rounded-full hover:bg-black focus:outline-none focus:ring"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 mr-2"
            fill="none"
            viewBox="0 0 30 30"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span class="text-sm font-medium">Back To Products</span>
        </span>
      </RouterLink>
    </div>
  </div>
</template>
