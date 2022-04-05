<template>
  <div>
     <!-- 首页专有的模块 main  start-->
    <div class="w">
        <div class="main">
            <div class="focus">
                <div class="swiper">
                    <div class="swiper-wrapper" ref="mySwiper">
                        <div class="swiper-slide" v-for="carousel in bannerList" :key="carousel.id">
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
            <!-- <div class="focus f1">
                //左侧按钮
                <a href="javascript:;" class="arrow_l">&lt;</a>
                //右侧按钮
                <a href="javascript:;" class="arrow_r">&gt;</a>
                <ul>
                    <li>
                        <img src="./upload/focus1.png" alt="">
                    </li>
                    <li>
                        <img src="./upload/focus2.png" alt="">
                    </li>
                    <li>
                        <img src="./upload/focus1.png" alt="">
                    </li>
                    <li>
                        <img src="./upload/focus2.png" alt="">
                    </li>
                </ul>
                //小圆圈
                <ol class="circle">
                    
                </ol>
            </div>  -->
            <div class="newflash">
                <div class="news">
                    <div class="news_hd">
                        <h5>品优购快报</h5>
                        <a href="#" class="more">更多</a>
                    </div>
                    <div class="news_bd">
                        <ul>
                            <li>
                                <a href="#">
                                    <strong>[重磅]</strong>他来了他来了，pink老师走来了。他是谁？
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>[重磅]</strong>他来了他来了，pink老师走来了。他是谁？
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>[重磅]</strong>他来了他来了，pink老师走来了。他是谁？
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>[重磅]</strong>他来了他来了，pink老师走来了。他是谁？
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>[重磅]</strong>他来了他来了，pink老师走来了。他是谁？
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lifeservice">
                    <ul>
                        <li>
                            <i class="icons1"></i>
                            <p>话费</p>
                        </li>
                        <li class="t2">
                            <div>减</div>
                            <i class="icons2"></i>
                            <p>机票</p>
                        </li>
                        <li>
                            <i class="icons3"></i>
                            <p>电影票</p>
                        </li>
                        <li>
                            <i class="icons4"></i>
                            <p>游戏</p>
                        </li>
                        <li>
                            <i class="icons5"></i>
                            <p>彩票</p>
                        </li>
                        <li>
                            <i class="icons6"></i>
                            <p>加油站</p>
                        </li>
                        <li>
                            <i class="icons7"></i>
                            <p>酒店</p>
                        </li>
                        <li>
                            <i class="icons8"></i>
                            <p>火车票</p>
                        </li>
                        <li>
                            <i class="icons9"></i>
                            <p>众筹</p>
                        </li>
                        <li>
                            <i class="icons10"></i>
                            <p>理财</p>
                        </li>
                        <li>
                            <i class="icons11"></i>
                            <p>礼品卡</p>
                        </li>
                        <li>
                            <i class="icons12"></i>
                            <p>白条</p>
                        </li>
                    </ul>
                </div>
                <div class="bargain">
                    <img src="./upload/bargain.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- 首页专有的模块 main  end-->
  </div>
</template>

<script>
import Swiper from 'swiper'
import {mapState} from 'vuex'
export default {
  name:'ListContainer',
  mounted() {
      this.$store.dispatch('getBannerList')
  },
  watch: {
      bannerList: {
          handler(newValue,oldValue) {
              this.$nextTick(()=> {
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
            })
            newValue,
            oldValue
          }
      }
  },
  computed: {
      ...mapState({
          bannerList:state => state.home.bannerList
      })
  }

}
</script>

<style lang='less' scoped>
 .main {
    width: 980px;
    height: 455px;
    margin-left: 220px;
    margin-top: 10px;
}
.focus ul { 
    position: absolute;
    width: 0;
    top: 0;
    width: 500%;
}
.arrow_l,
.arrow_r{
    display: none;
    position: absolute;
    text-align: center;
    top: 50%;
    line-height: 40px;
    width: 24px;
    height: 40px;
    color: #fff;
    font-size: 18px;
    background-color: rgba(0, 0, 0, .3);
    z-index: 3;
}
.arrow_r {
    right: 0;
} 
.main .focus ul li {
    float: left;
}
.main .focus {
    overflow: hidden;
    position: relative;
    float: left;
    width: 721px;
    height: 455px;
}
.focus ol {
    position: absolute;
    bottom: 0;
    left: 50%;
}
.circle li {
    float: left;
    width: 8px;
    height: 8px;
    background-color: black;
    border: 2px solid rgba(255, 255, 255, .5);
    border-radius: 50%;
    margin: 0 3px;
    cursor: pointer;
}
ol .current {
    background-color: #fff;
}
.main .newflash {
    float: right;
    width: 250px;
    height: 455px;
}
.news {
    height: 165px;
    border: 1px solid #e4e4e4;
}
.news .news_hd {
    height: 33px;
    line-height: 33px;
    border-bottom: 1px dotted #e4e4e4;
    padding: 0 15px;
}
.news .news_hd h5 {
    float: left;
    font-size: 14px;
    color: #333333;
}
.news .news_hd .more {
    float: right;
}
.news .news_hd .more::after {
    content: '';
    font-family: 'icomoon';
}
.news .news_bd {
    /* padding-top: 5px;
    padding-left: 15px; */
    padding: 5px 15px 0;
}
.news .news_bd ul li {
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.lifeservice {
    overflow: hidden;
    /* background-color: red; */
    border: 1px solid #e4e4e4;
    border-top: 0;
    height: 210px;
}
.lifeservice ul {
    width: 252px;
}
.lifeservice ul li {
    float: left;
    width: 63px;
    height: 71px;
    text-align: center;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
}
.lifeservice ul li i {
    display: inline-block;
    width: 24px;
    height: 28px;
    /* background-color: pink; */
    margin-top: 12px;
}
.lifeservice ul li .icons1 {
    background: url('./images/icons.png') no-repeat -19px -15px;
}
.lifeservice ul .t2 {
    position: relative;
}
.lifeservice ul .t2 div {
    position: absolute;
    right: 0;
    top: 0;
    width: 12px;
    height: 16px;
    font-size: 12px;
    color: #fff;
    background-color: #589d5a;
}
.lifeservice ul li .icons2 {
    background: url('./images/icons.png') no-repeat -80px -16px;
}
.lifeservice ul li .icons3 {
    background: url('./images/icons.png') no-repeat -140px -17px;
}
.lifeservice ul li .icons4 {
    background: url('./images/icons.png') no-repeat -206px -17px;
}
.lifeservice ul li .icons5 {
    background: url('./images/icons.png') no-repeat -18px -87px;
}
.lifeservice ul li .icons6 {
    background: url('./images/icons.png') no-repeat -78px -87px;
}
.lifeservice ul li .icons7 {
    background: url('./images/icons.png') no-repeat -144px -86px;
}
.lifeservice ul li .icons8 {
    background: url('./images/icons.png') no-repeat -210px -87px;
}
.lifeservice ul li .icons9 {
    background: url('./images/icons.png') no-repeat -15px -159px;
}
.lifeservice ul li .icons10 {
    background: url('./images/icons.png') no-repeat -77px -158px;
}
.lifeservice ul li .icons11 {
    background: url('./images/icons.png') no-repeat -141px -158px;
}
.lifeservice ul li .icons12 {
    background: url('./images/icons.png') no-repeat -207px -158px;
}
.bargain {
    margin-top: 5px;
}

</style>