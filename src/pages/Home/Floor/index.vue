<template>
  <!-- floor 模块 start -->
    <div class="floor">
        <!-- 一楼家用电器楼层 -->
    <div class="w jiadian">
        <div class="box_hd">
            <h3>{{ list.name }}</h3>
            <div class="tab_list">
                <ul>
                    <li><a href="#" v-for="(nav,index) in list.navList" :key="index">{{ nav.text }}</a></li>
                </ul>
            </div>
        </div>
        <div class="box_bd">
            <div class="tab_conten">
                <div class="tab_list_item clearfix">
                    <div class="col_210">
                        <ul>
                            <li v-for="(keyword,index) in list.keywords" :key="index">
                                {{ keyword }}
                            </li>
                        </ul>
                        <a href="#"><img :src="list.imgUrl" alt=""></a>
                    </div>
                    <div class="col_329">
                            <div class="swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="carousel in list.carouselList" :key="carousel.id">
                                        <img :src="carousel.imgUrl" alt="">
                                    </div>
                                </div>
                                <!-- 如果需要分页器 -->
                                <div class="swiper-pagination"></div>
                                
                                <!-- 如果需要导航按钮 -->
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                    </div>
                    <div class="col_221">
                        <a href="#" class="bb">
                            <img :src="list.recommendList[0]" alt="">
                        </a>
                        <a href="#">
                            <img :src="list.recommendList[1]" alt="">
                        </a>
                    </div>
                    <div class="col_221">
                        <a href="#"><img :src="list.bigImg" alt=""></a>
                    </div>
                    <div class="col_219">
                        <a href="#" class="bb"><img :src="list.recommendList[2]" alt=""></a>
                        <a href="#"><img :src="list.recommendList[3]" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
       <!-- 二楼手机楼层 -->
    </div>
    <!-- floor 模块 end -->
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Floor-1',
  props:['list'],
  mounted() {
      var mySwiper = new Swiper ('.swiper',{
        mySwiper,
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
            
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    })   
  }

}
</script>

<style lang='less' scoped>
.box_hd {
    height: 30px;
    border-bottom: 2px solid #c81623;
}
.box_hd h3 {
    float: left;
    font-size: 18px;
    font-weight: 400;
    color: #c81623;
}
.box_hd .tab_list {
    float: right;
    line-height: 30px;
}
.box_hd .tab_list ul li {
    float: left;
}
.box_hd .tab_list ul li a {
    padding: 0 15px;
    border-right: 1px solid #000;
}
.floor .w {
    margin-top: 30px;
}
.box_bd {
    height: 361px;
}
.tab_list_item>div{
    float: left;
    text-align: left;
}
.col_210 {
    width: 210px;
    height: 361px;
    background-color: #f9f9f9;
    text-align: center;
}
.col_210 ul {
    padding-left: 12px;
}
.col_210 ul li {
    float: left;
    width: 85px;
    height: 34px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 34px;
    margin-right: 10px;
}
.col_329 {
    width: 329px;
    overflow: hidden;
}
.col_329 .swiper {
    position: relative;
    width: 329px;
    height: 361px;
}
.col_329 .swiper .swiper-button-prev
,.swiper-button-next {
    width: 10px;
    height: 10px;
}
.col_221 {
    width: 221px;
    border-right: 1px solid #ccc;
}
.col_219 {
    width: 219px;
}
</style>