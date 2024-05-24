<template>
  <div class="in-h-screen">
    <div
      v-if="character"
      class="rounded-lg border-2 shadow-lg text-black mx-auto mt-24"
    >
      <div class="flex flex-col md:flex-row lg:flex-row ml-12 gap-4">
        <img
          :src="character.image"
          :alt="character.name"
          class="w-48 h-48 rounded-3xl mb-4 object-cover shadow-md"
        />
        <div class="space-y-4">
          <h1 class="text-black text-3xl font-bold mb-4">
            {{ character.name }}
          </h1>

          <p class="text-black text-xl">
            <span class="font-semibold">Status:</span>&nbsp;&nbsp;<input
              :class="{
                'bg-green-500': character.status === 'Alive',
                'bg-red-500': character.status === 'Dead',
                'bg-gray-500': character.status === 'unknown',
              }"
              class="w-4 h-4 mt-2 rounded-full"
              :checked="true"
              disabled
            />&nbsp;
            {{ character.status }}
          </p>
          <p class="text-black text-xl">
            <span class="font-semibold">Species:</span> {{ character.species }}
          </p>

          <p class="text-black text-xl">
            <span class="font-semibold">Gender:</span> {{ character.gender }}
          </p>
          <p class="text-black text-xl">
            <span class="font-semibold">Last known location:</span>
            {{ character.location.name }}
          </p>
        </div>
      </div>
      <hr class="shadow" />
      <div class="m-6">
        <h2
          class="text-black text-2xl font-bold mb-2 flex justify-center items-center"
        >
          List of episodes in which this character appeared
        </h2>
        <div
          class="space-y-2 grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center"
        >
          <div
            v-for="episode in character.episode"
            :key="episode.id"
            class="flex flex-col justify-items-center items-center max-w-sm bg-white rounded-lg border-2 shadow-lg dark:bg-gray-900 dark:border-gray-900"
          >
            <p class="text-black text-lg font-semibold">{{ episode.name }}</p>
            <p class="text-black text-md"></p>
            <p class="text-black text-sm">Air Date: {{ episode.air_date }}</p>
            <p class="text-black text-sm">Created: {{ episode.created }}</p>
          </div>
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
const character = ref(null);

const { result, onResult } = useQuery(
  gql`
    query ($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        gender
        image
        location {
          id
          name
        }
        episode {
          id
          name
          air_date
          created
        }
      }
    }
  `,
  () => ({ id: route.params.id })
);

onResult(() => {
  character.value = result.value?.character;
});

watch(result, (newResult) => {
  character.value = newResult?.character;
});
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
