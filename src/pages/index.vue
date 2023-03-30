<template>
  <div class="inner">
    <ItemCardList
      :list="list"
      :size="'wide'" />
    <ItemCardList
      :title="'이 영화 찾으세요? TV속영화'"
      :list="list"
      :size="'episode'" />
  </div>
</template>
<script>
import { ref } from 'vue';
import ItemCardList from '@/components/ItemCardList.vue';
export default {
  name: 'Home',
  components: {
    ItemCardList
  },
  setup() {
    let list = ref([
      {
        title: '수학없는 수학여행',
        info: '아니 대체 이 조합 무엇?',
        desc: '여름방학을 맞이하여 떠난 해수욕장에서 아름다운 선배 유리카를 만난 카오루와 친구들. 그곳에서 센터로는 유리카에게 반하게 되는데',
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