<template>
  <div class="search">
    <label for="" class="search__label"
      ><span class="sr-only">검색</span></label
    >
    <input
      id=""
      class="search__input"
      type="text"
      value=""
      :placeholder="placeholder"
    />
    <button class="search__delete"><span class="sr-only">삭제</span></button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/search";
</style>
