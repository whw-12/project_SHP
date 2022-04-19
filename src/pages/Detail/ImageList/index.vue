<template>
  <div class="container">
    <div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide,index) in skuImageList" :key="slide.id">
          <img :src="slide.imgUrl" alt="" :class="{active:active == index}" @click="changeActiveIndex(index)">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  
</div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
      active: 0
    }
  },
  props: [
    'skuImageList'
  ],
  watch: {
    skuImageList(newValue, oldValue) {
      newValue,oldValue
      this.$nextTick(() => {
        var mySwiper = new Swiper ('.swiper', {
        mySwiper,
        loop: true, // 循环模式选项
        slidesPerView: 3,//一行显示三个
        slidesPerGrop: 1,//多少个为一组
        autoplay:true,

        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
      })
    })
    }
  },
  methods: {
    changeActiveIndex(index) {
      this.active = index
      this.$bus.$emit('getIndex',index)
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  position: relative;
  height: 56px;
  width: 400px;
  overflow: hidden;
  margin-top: 10px;
}
.swiper-slide {  
  width: 56px;
  height: 56px;
  padding: 5px 50px 0;
}
.swiper-slide img {
  width: 50px;
  height: 50px;
  padding: 2px;
  border: 1px solid #ccc;
}
.swiper-slide .active {
  border: 2px solid orange;
  padding: 2px;
}
.container .swiper .swiper-button-next
, .swiper-button-prev {
  box-sizing: border-box;
  width: 12px;
  height: 56px;
  background-color: #ededed;
  &::after {
    font-size: 12px;
  }
}
.container .swiper .swiper-button-prev {
  position: absolute;
  left: 0;
}
.container .swiper .swiper-button-next {
  position: absolute;
  right: 0;
}
</style>