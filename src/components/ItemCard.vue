<template>
  <div :class="['item__card', `item__card--${size}`]">
    <div
      v-if="textBadge?.length"
      class="item__card__badge item__card__badge--left">
      <div class="badge">
        <span
          v-for="txt in textBadge"
          :key="txt">{{ txt }}</span>
      </div>
    </div>
    <div
      v-if="iconBadge"
      class="item__card__badge item__card__badge--right">
      <div :class="['icon', iconBadge]" />
    </div>
    <div
      class="item__card__thumb">
      <img
        :src="thumb"
        alt="">
    </div>
    <div
      class="item__card__wrap"
      v-if="title !== ''">
      <strong
        class="item__card__title"
        v-if="title !== ''">{{ title }}</strong>
      <span
        class="item__card__info"
        v-if="info !== ''">{{ info }}</span>
    </div>
    <p
      class="item__card__story"
      v-if="size === title !== ''">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
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
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/itemCard.scss';
</style>