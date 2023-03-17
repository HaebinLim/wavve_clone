<template>
  <header class="header">
    <div class="inner">
      <h1 class="header__logo"><router-Link to="/" class="header__logo__link">Wavve</router-Link></h1>
      <nav class="navigation">
        <router-Link to="/" class="navigation__link">홈</router-link>
        <button type="button" class="navigation__link">카테고리</button>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/header';
</style>