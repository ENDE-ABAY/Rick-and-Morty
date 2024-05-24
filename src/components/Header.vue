<template>
  <div class="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
    <div class="flex justify-end items-end lg:gap-52 md:gap-2 text-xl">
      <div class="flex bg-slate-300 space-x-5 mr-2 rounded-sm p-2">
        <!-- <Icon icon="dashicons:menu-alt" /> -->
        <button
          @click="navigateToHome"
          :class="getButtonClass('home')"
          class="text-blue-700"
        >
          {{ isHomePage ? "Home" : "Back to Home" }}
        </button>
        <button
          @click.prevent="scrollToSection('episodes')"
          :class="getButtonClass('episodes')"
        >
          {{ isHomePage ? "Episodes" : " " }}
        </button>
        <button
          @click.prevent="scrollToSection('characters')"
          :class="getButtonClass('characters')"
        >
          {{ isHomePage ? "Characters" : " " }}
        </button>
        <button
          @click.prevent="scrollToSection('locations')"
          :class="getButtonClass('locations')"
        >
          {{ isHomePage ? "Locations" : " " }}
        </button>
      </div>
    </div>
    <h1 class="text-4xl font-bold md:ml-20 lg:text-start text-center">
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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const activeSection = ref("home");

const isHomePage = computed(() => route.name === "home");

const navigateToHome = () => {
  router.push({ name: "home" });
  activeSection.value = "home";
};

const scrollToSection = (section) => {
  if (!isHomePage.value) return; // Prevent scrolling if not on home page
  const sectionElement = document.getElementById(section);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
    activeSection.value = section;
  }
};

const getButtonClass = (section) => {
  return [
    "cursor-pointer",
    "hover:bg-blue-500",
    "underline-offset-4",
    "transform",
    "transition-transform",
    "duration-500",
    "hover:scale-105",
    {
      underline: isHomePage.value
        ? activeSection.value === section
        : section === "home",
      "text-gray-500": !isHomePage.value && section !== "home", // Inactive style for non-home sections
      "text-blue-700": isHomePage.value && activeSection.value === section, // Active style on home page
      "text-gray-900": isHomePage.value && activeSection.value !== section, // Default style on home page
    },
  ];
};

const updateActiveSection = () => {
  if (!isHomePage.value) {
    activeSection.value = "home";
    return;
  }
  const sections = ["home", "episodes", "characters", "locations"];
  for (const section of sections) {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const rect = sectionElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>
<style></style>
