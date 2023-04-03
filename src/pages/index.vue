<template>
  <swiper
    :modules="modules"
    :slides-per-view="'auto'"
    :centered-slides="true"
    :space-between="20"
    :loop="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
    class="home__swiper">
    <swiper-slide
      v-for="item in list"
      :key="item.title">
      <ItemVideo
        :size="'wide'"
        :title="item.title"
        :info="item.info"
        :desc="item.desc"
        :thumb="item.thumb"
        :text-badge="item.textBadge"
        :icon-badge="item.iconBadge" />
    </swiper-slide>
  </swiper>
  <div class="inner">
    <ItemVideoList
      :title="'이 영화 찾으세요? TV속영화'"
      :list="list" />
    <ItemVideoList
      :type="'rank'"
      :title="'오늘의 영화 TOP 20'"
      :list="list" />
  </div>
</template>
<script>
import { ref } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import ItemVideoList from '@/components/ItemVideoList.vue';
import ItemVideo from '@/components/ItemVideo.vue';

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    ItemVideoList,
    ItemVideo
  },
  setup() {
    let list = ref([
      {
        thumb: 'https://www.sisain.co.kr/news/photo/201906/34919_67998_0853.jpg',
        textBadge: ['안녕', '안녕', '안녕'],
      },
      {
        title: '',
        thumb: 'https://www.sisain.co.kr/news/photo/201906/34919_67998_0853.jpg',
        iconBadge: 'wavve'
      },
      {
        title: '',
        thumb: 'https://www.sisain.co.kr/news/photo/201906/34919_67998_0853.jpg',
        iconBadge: 'wavve'
      },
      {
        title: '',
        thumb: 'https://www.sisain.co.kr/news/photo/201906/34919_67998_0853.jpg',
        iconBadge: 'wavve'
      },
      {
        title: '',
        thumb: 'https://www.sisain.co.kr/news/photo/201906/34919_67998_0853.jpg',
        iconBadge: 'wavve'
      },
    ])

    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

    return {
      list,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/home.scss';
</style>