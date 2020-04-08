<template>
  <v-overlay :value="overlay">
    <v-btn color="success" @click="overlay = false">Hide Overlay</v-btn>
  </v-overlay>
</template>

<script>
export default {
  props: ["overlay"]
};
</script>
