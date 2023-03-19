<template>
  <div :class="['item__card', { 'item__card--size-wide': type === 'wide' }]">
    <div v-if="textBadge?.length" class="item__card__badge item__card__badge--left">
      <div class="badge">
        <span v-for="txt in textBadge" :key="txt">{{ txt }}</span>
      </div>
    </div>
    <div v-if="iconBadge" class="item__card__badge item__card__badge--right">
      <div :class="['icon', iconBadge]"></div>
    </div>
    <div class="item__card__thumb" :style="`background-image:url(${thumb})`"></div>
    <div class="item__card__title" v-if="title !== ''"></div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    type: {
      type: String,
    },
    title: {
      type: String,
    },
    thumb: {
      type: String,
    },
    textBadge: {
      type: Array,
    },
    iconBadge: {
      type: String,
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