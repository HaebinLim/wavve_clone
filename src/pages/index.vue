<template>
  <div class="inner">
    <ItemCardList :title="'이 영화 찾으세요? TV속영화'" :list="list" />
  </div>
</template>
<script>
import { ref } from 'vue';
import ItemCardList from '@/components/ItemCardList.vue';
export default {
  name: '',
  components: {
    ItemCardList
  },
  setup() {
    let list = ref([
      {
        title: '',
        thumb: 'https://www.sisain.co.kr/news/photo/201906/34919_67998_0853.jpg',
        textBadge: ['안녕', '안녕', '안녕'],
      },
      {
        title: '',
        thumb: 'https://www.sisain.co.kr/news/photo/201906/34919_67998_0853.jpg',
        iconBadge: 'wavve'
      },
    ])

    return {
      list
    }
  }
}
</script>