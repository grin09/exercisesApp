<template>
  <router-link :to="{ name: 'set', params: { id: set.id } }" class="set-item">
    <div class="set-item__heading">
      <strong class="caption">{{ set.title }}</strong>
      <ButtonIcon
        :iconType="'remove'"
        v-on:click.native.prevent.stop="removeSet(set.id)"
      />
    </div>
    <p class="set-item__description">{{ set.description }}</p>
  </router-link>
</template>

<script>
import ButtonIcon from "./ButtonIcon.vue";
export default {
  components: {
    ButtonIcon
  },
  props: {
    set: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeSet: function(set_id) {
      this.$root.$emit("remove", set_id);
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
  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .caption {
      display: block;
      font-size: 16px;
      color: #4a4a4a;
    }
  }
  &__description {
    display: block;
    padding: 0;
    margin: 15px 0 0;
    color: #9b9b9b;
  }
}
</style>
