<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
}
</script>