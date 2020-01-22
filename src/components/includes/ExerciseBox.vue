<template>
  <div class="exercise">
    <label class="checkbox">
      <input v-model="exercise.is_checked" type="checkbox" />
      <CheckboxMarked v-if="exercise.is_checked" class="checkbox-icon" />
      <CheckboxBlankOutline v-else class="checkbox-icon" />
      <span :class="['checkbox-caption', { checked: exercise.is_checked }]">{{
        exercise.title
      }}</span>
    </label>
  </div>
</template>

<script>
import CheckboxMarked from "vue-material-design-icons/CheckboxMarked.vue";
import CheckboxBlankOutline from "vue-material-design-icons/CheckboxBlankOutline.vue";
export default {
  components: {
    CheckboxMarked,
    CheckboxBlankOutline
  },
  props: {
    exercise: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      is_checked: false
    };
  }
};
</script>

<style lang="scss" scoped>
.exercise {
  padding: 10px;
  margin: 0 0 15px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  input[type="checkbox"] {
    display: none;
  }
  .checkbox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &-icon {
      font-size: 24px;
      margin: 0 10px 0 0;
      color: #4caf50;
      & > svg {
        bottom: 0;
      }
    }
    &-caption {
      font-size: 16px;
      color: #4a4a4a;
      line-height: 1;
      &.checked {
        text-decoration: line-through;
      }
    }
  }
}
</style>
