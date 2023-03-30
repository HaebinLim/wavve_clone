<template>
  <div class="section">
    <strong class="title">{{ title }}</strong>
    <div class="list">
      <ItemCard
        v-for="item in list"
        :key="item.title"
        :size="size"
        :title="item.title"
        :info="item.info"
        :desc="item.desc"
        :thumb="item.thumb"
        :text-badge="item.textBadge"
        :icon-badge="item.iconBadge" />
    </div>
    <button type="button">
      더보기
    </button>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue';
export default {
  name: 'ItemCardList',
  components: {
    ItemCard
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    list: {
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
@import '../assets/scss/components/itemCard.scss';
</style>