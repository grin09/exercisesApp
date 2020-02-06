<template>
  <button class="ctrl-btn" type="button">
    <svg
      v-if="iconType == 'remove'"
      style="width:24px;height:24px"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>
    <svg
      v-if="iconType == 'restore'"
      style="width:24px;height:24px"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    iconType: String
  }
};
</script>

<style lang="scss" scoped>
.ctrl-btn {
  margin: 0 0 0 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    svg {
      color: #ff7e7e;
    }
  }
  svg {
    color: #4a4a4a;
  }
}
</style>
