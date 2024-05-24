<template>
  <div v-if="result && result.characters && result.characters.results.length">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 bg-slate-500"
    >
      <router-link
        v-for="character in result.characters.results"
        :key="character.id"
        :to="{ name: 'character', params: { id: character.id } }"
        class="flex flex-col md:flex-row bg-black rounded-r-3xl hover:bg-slate-800 md:hover:bg-sky-700 transform transition-transform duration-500 hover:scale-105"
      >
        <div class="flex flex-col justify-items-center items-center">
          <div>
            <p class="text-white text-2xl text-center">
              {{ character.name }}
            </p>

            <img
              :src="character.image"
              alt="Character Image"
              class="object-cover mb-2 rounded-2xl hover:bg-sky-700"
            />
          </div>
          <div class="flex flex-col items-center">
            <p class="text-white">
              Status:{{ character.status }}
              <input
                :class="{
                  'bg-green-500': character.status === 'Alive',
                  'bg-red-500': character.status === 'Dead',
                  'bg-gray-500': character.status === 'unknown',
                }"
                class="w-4 h-4 mt-2 rounded-full"
                :checked="true"
                disabled
              />
            </p>

            <p class="text-white">Species: {{ character.species }}</p>
            <p class="text-white">Gender: {{ character.gender }}</p>
          </div>
          <hr />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result } = useQuery(
  gql`
    query {
      characters {
        results {
          id
          name
          status
          species
          gender
          image
        }
      }
    }
  `
);
</script>

<style>
/* No additional styles needed; Tailwind CSS will handle the styling */
</style>
