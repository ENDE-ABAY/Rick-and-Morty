<template>
  <div v-if="result && result.locations && result.locations.results.length">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-500"
    >
      <router-link
        v-for="location in result.locations.results"
        :key="location.id"
        :to="{ name: 'location', params: { id: location.id } }"
        class="flex flex-col bg-white rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-700 md:hover:bg-sky-700 justify-items-center items-center m-3 transform transition-transform duration-500 hover:scale-105"
      >
        <div class="flex flex-col">
          <p class="text-slate-600 text-3xl font-bold">{{ location.name }}</p>
          <p class="text-slate-600">Type: {{ location.type }}</p>
          <p class="text-slate-600">Dimension: {{ location.dimension }}</p>
          <p class="text-slate-600">Created: {{ location.created }}</p>
        </div>
        <hr />
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
      locations {
        results {
          id
          name
          type
          dimension
          created
        }
      }
    }
  `
);
</script>

<style>
/* No additional styles needed; Tailwind CSS will handle the styling */
</style>
