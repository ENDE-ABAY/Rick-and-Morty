<template>
  <div class="p-2 space-x-8 m-4 flex flex-col lg:flex-row md:flex-row">
    <div class="flex items-center bg-slate-800 rounded-2xl">
      <button
        @click="prevSlide"
        class="text-white px-2 py-1 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="currentSlide === 0"
      >
        <Icon
          icon="marketeq:backward-2"
          class="text-3xl bg-black hover:bg-blue-700"
        />
      </button>

      <div class="flex flex-col lg:flex-row">
        <img
          v-for="(img, imgIndex) in currentShow.image"
          :src="img"
          :key="imgIndex"
          alt="Show Image"
          class="rounded-3xl w-36 h-36 lg:w-72 lg:h-96 md:w-56 md:h-60 hover:to-blue-700"
        />
      </div>

      <button
        @click="nextSlide"
        class="text-white px-2 py-1 rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="currentSlide === shows.length - 1"
      >
        <Icon
          icon="marketeq:forward-2"
          class="text-3xl bg-black hover:bg-blue-700"
        />
      </button>
    </div>
    <div class="mt-2 flex flex-col max-w-80 min-w-32 bg-inherit">
      <h2 class="text-3xl text-center font-semibold text-slate-600">
        {{ currentShow.title }}
      </h2>

      <h2 class="flex text-lg font-semibold text-white">
        <span class="text-2xl text-slate-600">Genre:&nbsp;</span
        >{{ currentShow.genre }}
      </h2>
      <h2 class="flex text-lg font-semibold text-white">
        <span class="text-2xl text-slate-600">Creator:&nbsp;</span>
        {{ currentShow.creator }}
      </h2>
      <h2 class="text-lg font-semibold text-yellow-500">
        <span class="text-2xl text-slate-600">Rating: &nbsp;</span
        >{{ currentShow.rating }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  shows: {
    type: Array,
    required: true,
  },
});

const currentSlide = ref(0);

const currentShow = computed(() => props.shows[currentSlide.value]);

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const nextSlide = () => {
  if (currentSlide.value < props.shows.length - 1) {
    currentSlide.value++;
  }
};
</script>

<style></style>
