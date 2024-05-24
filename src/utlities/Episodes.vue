<template>
  <div v-if="result && result.episodes && result.episodes.results.length">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 bg-slate-500"
    >
      <router-link
        v-for="episode in result.episodes.results"
        :key="episode.id"
        :to="{ name: 'episode', params: { id: episode.id } }"
        class="flex-col md:flex-row items-center bg-black rounded-r-3xl hover:bg-slate-800 md:hover:bg-sky-700 transform transition-transform duration-300 hover:scale-105"
      >
        <div class="flex flex-col justify-items-center items-center">
          <p class="text-white text-3xl font-bold">{{ episode.name }}</p>

          <div
            v-if="episode.characters && episode.characters.length"
            class="mt-2"
          >
            <div class="flex items-center mt-2">
              <img
                :src="episode.characters[episode.characters.length - 1].image"
                alt="Character Image"
                class="w-48 h-48 rounded-lg mr-2"
              />
            </div>
          </div>
          <div class="flex flex-col items-start p-4">
            <p class="text-white">Air Date: {{ episode.air_date }}</p>
            <p class="text-white">Created: {{ episode.created }}</p>
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

const EPISODES_QUERY = gql`
  query {
    episodes {
      results {
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
  }
`;

const { result } = useQuery(EPISODES_QUERY);
</script>

<style>
/* Tailwind CSS will handle the styling */
</style>
