<template>
  <ul>
    <li v-for="category in categories" :key="category.id">{{category.name}}</li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    // const admin = this.isAdmin();
    // if (!admin) {
    //   this.$router.push("/forum");
    // } else {
    //   this.loadCategories();
    // }
    this.loadCategories();
  },
  computed: mapState(["categories"]),
  methods: mapActions(["isAdmin", "loadCategories"])
};
</script>

<style scoped>
.categories {
  color: #ffffff;
}
</style>