<template>
  <div
    v-if="episode"
    class="mt-24 mb-4 bg-gray-800 rounded-lg shadow-md text-white mx-auto p-6 flex flex-col items-center"
  >
    <div class="flex flex-col justify-center items-center space-y-4">
      <p class="text-3xl font-bold mb-4">{{ episode.name }}</p>
      <p class="text-3xl font-bold mb-4">Air Date: {{ episode.air_date }}</p>
      <p class="text-3xl font-bold mb-4">Created: {{ episode.created }}</p>
    </div>
    <hr />
    <div class="mt-6 bg-slate-200">
      <h2 class="text-2xl font-bold mb-2 text-center text-slate-700">
        List of characters who participate in the episode
      </h2>
      <div
        class="space-y-2 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3"
      >
        <div
          v-for="character in episode.characters"
          :key="character.id"
          class="p-4 bg-gray-700 rounded-lg shadow-md flex flex-col items-center"
        >
          <p class="text-lg font-semibold">
            <img :src="character.image" :alt="character.name" />
          </p>
          <p class="text-xl">Name: &nbsp;{{ character.name }}</p>
          <p class="text-md">
            <span class="">Status:</span>&nbsp;&nbsp;&nbsp;<input
              :class="{
                'bg-green-500': character.status === 'Alive',
                'bg-red-500': character.status === 'Dead',
                'bg-gray-500': character.status === 'unknown',
              }"
              class="w-4 h-4 mt-2 rounded-full"
              :checked="true"
              disabled
            />
            {{ character.status }}
          </p>
          <p class="text-md">Species: {{ character.species }}</p>
          <p class="text-md">Gender: {{ character.gender }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const route = useRoute();
const episode = ref(null);

const { result, onResult } = useQuery(
  gql`
    query ($id: ID!) {
      episode(id: $id) {
        id
        name
        air_date
        created
        characters {
          id
          name
          status
          species
          gender
          image
        }
      }
    }
  `,
  () => ({ id: route.params.id })
);

onResult(() => {
  episode.value = result.value?.episode;
});

watch(result, (newResult) => {
  episode.value = newResult?.episode;
});
</script>
<style scoped>
/* Additional custom styles can be added here if needed */
</style>
