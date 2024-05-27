<template>
  <div id="home">
    <div
      class="pt-24 h-full bg-gradient-to-r from-indigo-500 via-yellow-200 to-indigo-500"
    >
      <div
        v-for="(show, index) in shows"
        :key="show.id"
        class="rounded-sm flex justify-start"
        v-show="index === currentSlide"
      >
        <div>
          <Carousel :shows="shows" />
        </div>
      </div>

      <!-- Sections -->
      <h1 class="mt-10 text-4xl font-bold md:ml-20 text-center">
        <span class="text-red-500">R</span>
        <span class="text-orange-500">i</span>
        <span class="text-yellow-500">c</span>
        <span class="text-green-500">k</span>&nbsp;
        <span class="text-blue-500">A</span>
        <span class="text-indigo-500">n</span>
        <span class="text-purple-500">d</span>&nbsp;
        <span class="text-blue-500">M</span>
        <span class="text-red-500">o</span>
        <span class="text-orange-500">r</span>
        <span class="text-yellow-500">t</span>
        <span class="text-green-500">y</span>
      </h1>
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
import Episodes from "../../utlities/Episodes.vue";
import Characters from "../../utlities/Characters.vue";
import Locations from "../../utlities/Locations.vue";
import Carousel from "../../utlities/Carousel.vue";
import image1 from "../../assets/minab/1.jpeg";
import image2 from "../../assets/minab/2.jpeg";
import image3 from "../../assets/minab/3.jpeg";
import image4 from "../../assets/minab/4.jpeg";
import image5 from "../../assets/minab/5.jpeg";
import image6 from "../../assets/minab/6.jpeg";
import image7 from "../../assets/minab/7.jpeg";
import image8 from "../../assets/minab/8.jpeg";
import image9 from "../../assets/minab/9.jpeg";
import image10 from "../../assets/minab/10.jpeg";
import image11 from "../../assets/minab/11.jpeg";
import image12 from "../../assets/minab/12.jpeg";
import image13 from "../../assets/minab/13.jpeg";
import image14 from "../../assets/minab/14.jpeg";
import image15 from "../../assets/minab/15.jpeg";
import image16 from "../../assets/minab/16.jpeg";
import image17 from "../../assets/minab/17.jpeg";
import image18 from "../../assets/minab/18.jpeg";

const shows = ref([
  {
    id: 1,
    title: "Rick and Morrty",
    genre: "Animated sitcom Adventure Black comedy Satire Science fiction",
    creator: "Justin Roiland and Dan Harmon",
    rating: "9.1/10",
    image: [image1, image2, image3],
  },
  {
    id: 2,
    title: "Futurama",
    genre: "Adult animation Animated sitcom Science fiction Comedy drama",
    creator: "Matt Groening",
    rating: "8.5/10",
    image: [image4, image5, image6],
  },
  {
    id: 3,
    title: "Harley Quinn",
    genre: "Black comedy Superhero",
    creator: "Paul Dini and Bruce Timm",
    rating: "8.4/10",
    image: [image7, image8, image9],
  },
  {
    id: 4,
    title: "Archer",
    genre:
      "	Animated sitcom Adult animation Action comedy Black comedy Adventure Workplace comedy",
    creator: "Adam Reed",
    rating: "8.6/10",
    image: [image10, image11, image12],
  },
  {
    id: 5,
    title: "Solar Opposites",
    genre: "	Adult animation Animated sitcom Science fiction",
    creator: "Justin Roiland and Mike McMahans",
    rating: "8/10",
    image: [image13, image14, image15],
  },
  {
    id: 6,
    title: "Koala Man",
    genre:
      "Animated sitcom Adult animation Superhero comedy Black comedy Surreal humor",
    creator: "Michael Cusack",
    rating: "6.8/10",
    image: [image16, image17, image18],
  },
]);

const currentSlide = ref(0);
</script>

<style></style>
