<template>
  <div :class="['item', sizeClass]">
    <div
      v-if="textBadge?.length"
      class="item__badge item__badge--left">
      <div class="badge">
        <span
          v-for="txt in textBadge"
          :key="txt">{{ txt }}</span>
      </div>
    </div>
    <div
      v-if="iconBadge"
      class="item__badge item__badge--right">
      <div :class="['icon', iconBadge]" />
    </div>
    <div
      class="item__thumb">
      <img
        :src="thumb"
        alt="">
    </div>
    <div
      class="item__wrap"
      v-if="title !== ''">
      <strong
        class="item__title"
        v-if="title !== ''">{{ title }}</strong>
      <span
        class="item__info"
        v-if="info !== ''">{{ info }}</span>
    </div>
    <p
      class="item__story"
      v-if="size === title !== ''">
      {{ desc }}
    </p>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'ItemVideo',
  props: {
    size: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    thumb: {
      type: String,
      default: '',
    },
    textBadge: {
      type: Array,
      default: () => []
    },
    iconBadge: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const sizeClass = computed(() => props.size !== '' && `item--${props.size}` )

    return {
      sizeClass
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/itemVideo.scss';
</style>