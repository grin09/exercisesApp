<template>
  <div class="listsets">
    <h1 class="title">
      <svg class="title-icon" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
        /></svg
      >To Do
    </h1>
    <div class="box">
      <ListSetsItem v-for="set in sets" :key="set.id" :set="set" />
    </div>
  </div>
</template>

<script>
import ListSetsItem from "./includes/ListSetsItem.vue";
export default {
  components: {
    ListSetsItem
  },
  props: {
    sets: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
