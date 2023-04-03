<template>
  <div class="video__wrap">
    <strong class="video__title">{{ title }}</strong>
    <div :class="['video__list', `video__list--${type}`]">
      <ItemVideo
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
    <button
      type="button"
      class="video__more">
      더보기
    </button>
  </div>
</template>

<script>
import ItemVideo from '@/components/ItemVideo.vue';
export default {
  name: 'ItemVideoList',
  components: {
    ItemVideo
  },
  props: {
    type: {
      type: String,
      default: '',
    },
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
@import '../assets/scss/components/itemVideoList.scss';
</style>