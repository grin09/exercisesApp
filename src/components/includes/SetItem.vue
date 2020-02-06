<template>
  <div class="set-item">
    <label class="checkbox">
      <input v-model="setItem.is_checked" type="checkbox" />
      <CheckboxMarked v-if="setItem.is_checked" class="checkbox-icon" />
      <CheckboxBlankOutline v-else class="checkbox-icon" />
      <span :class="['checkbox-caption', { checked: setItem.is_checked }]">{{
        setItem.title
      }}</span>
      <ButtonIcon
        :iconType="'remove'"
        v-on:click.native.prevent.stop="removeSetItem(setItem.id)"
      />
    </label>
  </div>
</template>

<script>
import CheckboxMarked from "vue-material-design-icons/CheckboxMarked.vue";
import CheckboxBlankOutline from "vue-material-design-icons/CheckboxBlankOutline.vue";
import ButtonIcon from "./ButtonIcon.vue";
export default {
  components: {
    CheckboxMarked,
    CheckboxBlankOutline,
    ButtonIcon
  },
  props: {
    setItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeSetItem: function(setItem_id) {
      this.$root.$emit("removeSetItem", {
        external_id: this.$route.params.id,
        internal_id: setItem_id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.set-item {
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
      margin: 0 5px 0 0;
      &.checked {
        text-decoration: line-through;
      }
    }
  }
  .ctrl-btn {
    margin: 0 0 0 auto;
  }
}
</style>
