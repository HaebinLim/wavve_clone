<template>
  <div class="section">
    <strong class="title">{{ title }}</strong>
    <div class="list">
      <ItemCard v-for="item in list" :key="item.title" :title="item.title" :type="type" :thumb="item.thumb"
        :textBadge="item.textBadge" :iconBadge="item.iconBadge" />
    </div>
    <button type="button">더보기</button>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue';
export default {
  name: '',
  components: {
    ItemCard
  },
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    list: {
      type: Array,
    },
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/itemCardList.scss';
</style>