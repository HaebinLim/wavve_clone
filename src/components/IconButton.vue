<template>
  <button
    type="button"
    class="button--icon"
    :class="`button--${size}`"
    @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    size: {
      type: String,
      default: `medium`,
      validator(size) {
        return [`small`, `medium`, `large`, `x-large`].includes(size);
      },
    },
    label: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  setup(props, {emit}) {
    const onClick = () => {
      emit('click')
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