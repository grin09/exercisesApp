<template>
  <div class="addlist">
    <h1 class="title not-mainpage with-description">
      <ArrowLeft @click="goToMainpage" class="title-icon" />New set
    </h1>
    <form @submit.prevent.stop="saveList" class="addlist-form">
      <label class="form-field">
        <span class="form-field__caption">Set title</span>
        <input type="text" v-model="title" />
      </label>
      <label class="form-field">
        <span class="form-field__caption">Set description</span>
        <input type="text" v-model="description" />
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
      title: "",
      description: ""
    };
  },
  methods: {
    goToMainpage: function() {
      this.$router.push({ name: "index" });
    },
    saveList: function() {
      this.$root.$emit("saveList", {
        title: this.title,
        description: this.description
      });
      this.goToMainpage();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>