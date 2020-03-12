<template>
  <div class="additem">
    <h1 class="title not-mainpage with-description">
      <ArrowLeft @click="goToSet" class="title-icon" />New item
    </h1>
    <form @submit.prevent.stop="saveItem" class="addlist-form">
      <label class="form-field">
        <span class="form-field__caption">Set title</span>
        <input type="text" v-model="title" />
      </label>
      <button class="btn-std" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
export default {
  components: {
    ArrowLeft
  },
  data: function() {
    return {
      title: ""
    };
  },
  methods: {
    goToSet: function() {
      this.$router.push({ name: "set", params: { id: this.$route.params.id } });
    },
    saveItem: function() {
      this.$root.$emit("saveItem", {
        setid: this.$route.params.id,
        title: this.title
      });
      this.goToSet();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>