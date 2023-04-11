<template>
  <swiper
    :modules="modules"
    :slides-per-view="'auto'"
    :centered-slides="true"
    :space-between="20"
    :loop="true"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    @swiper="onSwiper"
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
    <button
      type="button"
      class="home__swiper__button"
      :class="{ 'home__swiper__button--play' : playState }"
      :aria-pressed="playState"
      @click="onClickPlay">
      <span
        class="sr-only"
        ref="playButton">정지</span>
    </button>
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
import { Navigation, Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/vue';
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
    const list = ref([
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

    const swiperInstance = ref(null)
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper
    };
    const playState = ref(false);
    const playButton = ref();
    const onClickPlay = () => {
      if(playState.value) {
        playState.value = false;
        swiperInstance.value.autoplay.start();
        playButton.value.textContent = '정지';
      } else {
        playState.value = true;
        swiperInstance.value.autoplay.stop();
        playButton.value.textContent = '재생';
      }
    }

    return {
      list,
      swiperInstance,
      onSwiper,
      playState,
      playButton,
      onClickPlay,
      modules: [Autoplay, Navigation, Pagination, A11y],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/home.scss';
</style>