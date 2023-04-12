<template>
  <button
    type="button"
    class="button--box"
    :class="[`button--${size}`, {'button--block' : context ==='block'}]"
    :style="`--radius: ${round}px`"
    @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'BoxButton',
  props: {
    context: {
      type: String,
      default: `inline`,
      validator(context) {
        return [`inline`, `block`].includes(context);
      },
    },
    size: {
      type: String,
      default: `medium`,
      validator(size) {
        return [`small`, `medium`, `large`, `x-large`].includes(size);
      },
    },
    round: {
      type: Number,
      default: 12,
    },
    label: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  setup(props, {emit}) {
    const onClick = () => {
      emit('click', '잉')
    }
    return {
      onClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/button.scss';
</style>