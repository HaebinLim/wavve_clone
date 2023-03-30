<template>
  <TabMenu />
  <TabContent />
</template>


<script>
import TabMenu from '@/components/TabMenu';
import TabContent from '@/components/TabContent';
export default {
  name: 'ItemCardList',
  components: {
    TabMenu,
    TabContent
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

