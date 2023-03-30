<template>
  <header class="header">
    <div class="inner">
      <h1 class="header__logo">
        <router-Link
          to="/"
          class="header__logo__link">
          Wavve
        </router-Link>
      </h1>
      <nav class="navigation">
        <router-Link
          to="/"
          class="navigation__link">
          홈
        </router-Link>
        <div class="navigation__category">
          <button
            type="button"
            class="navigation__link"
            @click="showCategory = !showCategory">
            카테고리
          </button>
          <div
            v-if="showCategory"
            class="navigation__category__layer">
            <button
              type="button"
              class="category__link">
              전체 카테고리 보기
            </button>
            <router-Link
              to="/"
              v-for="{ id, name } in category"
              :key="id"
              class="category__link">
              {{ name }}
            </router-Link>
          </div>
        </div>
        <div />
      </nav>
      <search :placeholder="'제목, 장르, 배우로 찾아보세요'" />
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import Search from "@/components/Search";
export default {
  components: { Search },
  props: {
    category: {
      type: Array,
    },
  },
  setup() {
    let showCategory = ref(false);
    return { showCategory };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/header";
</style>
