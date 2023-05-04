<template>
  <button @click="openModal">Open info modal</button>
</template>

<script setup lang="ts">
// Import our inner modal component


// Import store
import useModalStore from "./stores/useModalStore";

// Initialize store
const store = useModalStore();

// Make a function that opens modal with our inner component
function openModal() {
  store.openInfoModal("Gotcha!");
}
</script>

<style scoped lang="scss"></style>
