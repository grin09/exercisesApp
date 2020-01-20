<template>
  <router-link :to="{name: 'set', params: {id: set.id}}" class="set-item">{{set.title}}</router-link>
</template>

<script>
export default {
  props: {
    set: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.set-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100% - 15px) / 2);
  height: 100px;
  // background-color: #ff0000;
  border-radius: 10px;
  box-shadow: 1px 2px 5px 0px rgba($color: #000000, $alpha: 0.25);
}
</style>