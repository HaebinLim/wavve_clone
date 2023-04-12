<template>
  <div class="inner">
    <div class="detail__video">
      <strong class="detail__video__title">제목어쩌고</strong>
      <div class="detail__video__info">
        <span>시즌 1개</span>
        <span>드라마</span>
        <span>cc</span>
      </div>
      <div class="detail__video__btns">
        <BoxButton
          :label="'이용권 구매하기'"
          :size="'large'"
          @click="clickTest" />
        <IconButton
          :label="'관심'"
          :size="'large'" />
        <IconButton
          :label="'공유'"
          :size="'large'" />
      </div>
      <div class="detail__video__story">
        <p>
          1980년대부터 1990년대까지 이어지는 격변의 대한민국을 배경으로, 자신만의 꿈과 우정 그리고 인생의 단 한 번뿐인 첫사랑을 지키기 위해 치열하게 몸을 내던진 세 청춘들의 이야기를 그린 드라마
        </p>
        <button type="button">
          더보기
        </button>
      </div>
    </div>
    <TabMenu />
    <TabContent />
  </div>
</template>


<script>
import BoxButton from '@/components/BoxButton';
import IconButton from '@/components/IconButton';
import TabMenu from '@/components/TabMenu';
import TabContent from '@/components/TabContent';

export default {
  name: 'ItemCardList',
  components: {
    BoxButton,
    IconButton,
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
    const clickTest = (payload) => {
      console.log(payload)
    }
    return {
      clickTest
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/details.scss';
</style>