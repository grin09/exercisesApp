<template>
  <div class="listsets">
    <h1 class="title">Наборы тренеровок</h1>
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

<style lang="scss" scoped>
</style>