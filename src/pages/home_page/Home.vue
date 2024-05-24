<template>
  <div id="home">
    <div
      class="pt-24 h-full bg-gradient-to-r from-indigo-500 via-yellow-200 to-indigo-500"
    >
      <div
        v-if="result && result.episodes && result.episodes.results.length"
        class="w-full rounded-sm flex justify-start"
      >
        <div
          class="flex rounded-3xl w-full max-w-screen-lg"
          v-for="(episode, index) in result.episodes.results"
          :key="episode.id"
          v-show="index === currentSlide"
        >
          <div class="p-2 flex rounded-2xl w-screen bg-slate-800">
            <div class="flex">
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
              <div
                v-for="(character, charIndex) in episode.characters.slice(5, 8)"
                :key="charIndex"
                class="mr-2"
              >
                <div class="w-72 h-96">
                  <img
                    :src="character.image"
                    alt="Character Image"
                    class="w-72 h-96 object-cover rounded-md border-2 border-gray-600"
                  />
                </div>
              </div>
              <button
                @click="nextSlide"
                class="text-white px-2 py-1 rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="currentSlide === result.episodes.results.length - 1"
              >
                <Icon
                  icon="marketeq:forward-2"
                  class="text-3xl bg-black hover:bg-blue-700"
                />
              </button>
            </div>
            <div class="mt-2 flex flex-col min-w-32">
              <h2 class="text-lg font-semibold text-white">
                {{ episode.name }}
              </h2>
              <p class="text-sm text-white">Air Date: {{ episode.air_date }}</p>
              <p class="text-sm text-white">Episode: {{ episode.episode }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sections -->
      <h1 class="text-3xl font-bold"></h1>
      <div id="episodes" class="pt-24 text-center">
        <h1 class="text-3xl font-bold">Episodes</h1>
        <Episodes />
      </div>
      <div id="characters" class="pt-24 text-center">
        <h1 class="text-3xl font-bold">Characters</h1>
        <Characters />
      </div>
      <div id="locations" class="pt-24 text-center">
        <h1 class="text-3xl font-bold">Locations</h1>
        <Locations />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import Episodes from "../../utlities/Episodes.vue";
import Characters from "../../utlities/Characters.vue";
import Locations from "../../utlities/Locations.vue";

const currentSlide = ref(0);

const { result } = useQuery(
  gql`
    query {
      episodes {
        results {
          id
          name
          air_date
          episode
          characters {
            id
            image
          }
        }
      }
    }
  `
);

const nextSlide = () => {
  if (
    result.value &&
    result.value.episodes &&
    result.value.episodes.results.length
  ) {
    currentSlide.value =
      (currentSlide.value + 1) % result.value.episodes.results.length;
  }
};

const prevSlide = () => {
  if (
    result.value &&
    result.value.episodes &&
    result.value.episodes.results.length
  ) {
    currentSlide.value =
      (currentSlide.value - 1 + result.value.episodes.results.length) %
      result.value.episodes.results.length;
  }
};
</script>

<style>
/* No additional styles needed; Tailwind CSS will handle the styling */
</style>
