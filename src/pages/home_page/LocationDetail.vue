<template>
  <div class="h-full mb-4">
    <div
      v-if="location"
      class="mt-24 p-6 bg-gray-800 rounded-lg shadow-md text-white"
    >
      <p class="text-3xl font-bold mb-4 text-center">
        &nbsp;{{ location.name }}
      </p>
      <p class="text-xl text-center text-white gap-3">
        <span class="font-semibold">Type:</span> &nbsp;{{ location.type }}
      </p>
      <p class="text-xl text-center text-white gap-3">
        <span class="font-semibold">Dimension:</span>&nbsp;
        {{ location.dimension }}
      </p>
      <p class="text-xl text-center text-white gap-3">
        <span class="font-semibold">Created:</span> &nbsp;{{ location.created }}
      </p>
      <hr class="shadow-black" />
      <p class="text-2xl text-center text-slate-500">
        <span class="font-semibold">
          List of character who have been last seen in the location
        </span>
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 bg-white justify-items-center place-items-center"
      >
        <div v-for="resident in location.residents" :key="resident.id" class="">
          <div
            class="flex flex-grow justify-items-center items-center max-w-sm mt-5 bg-white rounded-lg border-gray-950 shadow-md dark:bg-gray-800 dark:border-gray-950"
          >
            <div>
              <img
                :src="resident.image"
                :alt="resident.name"
                class="w-48 h-48 rounded-3xl mb-4 object-cover shadow-md flex justify-center pt-3"
              />
            </div>
            <div class="flex flex-col m-4">
              <p class="text-2xl text-center text-black gap-3">
                <span class="font-semibold"> </span> &nbsp;{{ resident.name }}
              </p>
              <hr />
              <p class="text-xl text-black gap-3">
                <span class="">Status:</span>&nbsp;&nbsp;<input
                  :class="{
                    'bg-green-500': resident.status === 'Alive',
                    'bg-red-500': resident.status === 'Dead',
                    'bg-gray-500': resident.status === 'unknown',
                  }"
                  class="w-4 h-4 mt-2 rounded-full"
                  :checked="true"
                  disabled
                />
                {{ resident.status }}
              </p>
              <p class="text-xl text-black gap-3">
                <span class="">Species: &nbsp;</span>
                {{ resident.species }}
              </p>
              <p class="text-xl text-black gap-3">
                <span class="">Gender:&nbsp;</span>
                {{ resident.gender }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const route = useRoute();
const location = ref(null);

const { result } = useQuery(
  gql`
    query ($id: ID!) {
      location(id: $id) {
        id
        name
        type
        dimension
        created
        residents {
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

watch(result, () => {
  location.value = result.value?.location;
});
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
