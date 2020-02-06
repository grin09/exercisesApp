<template>
  <div id="app">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
import sets from "./data/defaultData";
export default {
  name: "app",
  data: function() {
    return {
      sets: sets
    };
  },
  mounted: function() {
    this.$root.$on("remove", set_id => {
      this.sets = this.sets.filter(set => set.id != set_id);
    });
    this.$root.$on("removeSetItem", set => {
      this.sets.forEach(_set => {
        if (_set.id == set.external_id) {
          _set.set = _set.set.filter(setItem => setItem.id != set.internal_id);
        }
      });
    });
    this.$root.$on("restoreSet", set => {
      this.sets = this.sets.map(_set => {
        if (_set.id == set.id) {
          _set.set = _set.set.map(setItem => {
            setItem.is_checked = false;
            return setItem;
          });
        }
        return _set;
      });
    });
  }
};
</script>

<style lang="scss" src="@/assets/styles/common.scss"></style>
