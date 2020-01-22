<template>
  <router-link :to="{ name: 'set', params: { id: set.id } }" class="set-item">
    <strong class="set-item__caption">{{ set.title }}</strong>
    <p class="set-item__description">{{ set.description }}</p>
  </router-link>
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
  display: block;
  padding: 15px;
  text-decoration: none;
  margin: 0 0 15px;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  &:last-child {
    margin: 0;
  }
  &__caption {
    display: block;
    font-size: 16px;
    color: #4a4a4a;
  }
  &__description {
    display: block;
    padding: 0;
    margin: 15px 0 0;
    color: #9b9b9b;
  }
}
</style>
