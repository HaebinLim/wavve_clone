<template>
  <ul
    class="tab__menu"
    role="tabList">
    <li
      v-for="tab in tabList"
      :key="tab.id">
      <button
        type="button"
        role="tab"
        aria-selected="true"
        aria-controls="tab-panel-01"
        tabindex="-1"
        class="tab__menu__btn"
        :class="{ 'tab__menu__btn--active' : tab.id === '01'}">
        {{ tab.name }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TabMenu',
  props: {
    tabList: {
      type: Array,
      default: () => []
    },
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/tabs.scss';
</style>