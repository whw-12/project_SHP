<template>
    <!-- nav模块制作 start -->
    <nav class="nav">
        <div class="w">
            <div class="dropdown" @mouseenter="enterShow" @mouseleave="leaverShow">
                <!-- 这里事件委托不好用，因为，背景css的hover写的，而字体变色是js写的 -->
               <!-- <div  @mouseleave="leaveIndex"> -->
                    <div class="dt">全部商品分类</div>
                    <!-- //过渡动画 -->
                    <transition name="dd">
                         <div class="dd" v-show="show">
                            <ul @click="goSearch">
                                <li v-for="(c1,index) in categoryList.slice(1,16)" :key="c1.categoryId" :class="{cur:currentIndex === index}" @mouseenter="changeIndex(index)" @mouseleave="leaveIndex">
                                    <a href="javascript:;" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId"> {{c1.categoryName}} </a>
                                    <!-- <router-link to="/search"> {{c1.categoryName}} </router-link> -->
                                    <!-- 声明式导航在路由跳转时要创建很多实例对象，很耗内存 -->
                                    <dl class="dl" v-for="c2 in c1.categoryChild" :key="c2.categoryId" :style="{display:currentIndex===index?'block':'none'}">     
                                        <dt>
                                            <a href="javascript:;" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                            <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                                         </dt>
                                        <dd v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                            <em>
                                                <a href="javascript:;" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                                <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                                            </em> 
                                        </dd>
                                    </dl>                            
                                </li>    
                            </ul>
                        </div>
                    </transition>
               <!-- </div> -->
            </div>
            <div class="navitems">
                <ul>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">美妆馆</a></li>
                    <li><a href="#">传智超市</a></li>
                    <li><a href="#">全球购</a></li>
                    <li><a href="#">闪购</a></li>
                    <li><a href="#">团购</a></li>
                    <li><a href="#">拍卖</a></li>
                    <li><a href="#">有趣</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- nav模块制作 end -->
</template>

<script>
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'
export default {
  name:'TypeNav',
  //组件挂载完毕，可以向服务器发请求
  mounted() {
      //通知vuex发请求，获取数据，存储到仓库中
    //   this.$store.dispatch('categoryList')
    // 为了优化，之前在home和search模块来回切换的时候，会不停的发请求，现在把它放到app中，app根组件中mounted只会执行一次
      if(this.$route.path != '/home') {
          this.show=false
      }
  },
  computed: {
      ...mapState({
          categoryList:(state)=>{
              return state.home.categoryList
          }
      })
  },
  methods: {
    //   es6写法
    //   changeIndex(index) {
    //       this.currentIndex = index
    //   },
    // es5写法
      changeIndex:throttle(function(index) {
          this.currentIndex = index
      },50),
      leaveIndex() {
          this.currentIndex = -1
      },
      goSearch(event) {
          let element = event.target
          const {categoryname,category1id,category2id,category3id} = element.dataset
          if(categoryname) {
              let location = {name:'search'}
              const query = {categoryName:categoryname}
              if(category1id){
                  query.category1Id = category1id
              }else if(category2id) {
                  query.category2Id = category2id
              }else {
                  query.category3Id = category3id
              }
              if(this.$route.params) {
                  location.params = this.$route.params
                  location.query = query
                  this.$router.push(location)
              }
          }
      },
      enterShow() {
          this.show = true
      },
      leaverShow() {
          if(this.$route.path != '/home') {
              this.show = false
        }
      }
  },
  data() {
      return{
          currentIndex: -1,
          show: true
      }
  }

}
</script>

<style lang='less' scoped>
/* 字体图标声明  这里一定要注意路径的变化*/
@font-face {
    font-family: 'icomoon';
    src:  url('@/fonts/icomoon.eot?834llr');
    src:  url('@/fonts/icomoon.eot?834llr#iefix') format('embedded-opentype'),
      url('@/fonts/icomoon.ttf?834llr') format('truetype'),
      url('@/fonts/icomoon.woff?834llr') format('woff'),
      url('@/fonts/icomoon.svg?834llr#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
.nav {
    height: 47px;
    border-bottom: 2px solid #b1191a;
}
.nav .dropdown {
    float: left;
    width: 210px;
    height: 45px;
    background-color: #b1191a;
}
.dt {
    width: 100%;
    height: 100%;
    color: #fff;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
}
.dd {
    /* display: none; */
    position: relative;
    width: 210px;
    height: 465px;
    background-color: #c81623;
    margin-top: 2px;
    z-index: 9999!important;
}
//过渡动画的样式
//过度动画开始（进入）
.dd-enter {
    height: 0;
}
// 过渡动画结束状态
.dd-enter-to {
    height: 465px;
}
// 定义动画的时间和速率
.dd-enter-active {
    transition: all .5s linear;
}

.dd ul {
    position: relative;
}
.dd ul li {
    // position: relative;
    height: 31px;
    line-height: 31px;
    margin-left: 2px;
    padding-left: 10px;
}
.dd ul li:hover {
    background-color: #fff;
}
.dd ul li a{
    font-size: 14px;
    color: #fff;
    padding: 0 20px;
    margin: 0;
    overflow: hidden;
}
.dd ul .dl {
// 第一种,只显示一部分，不能完全遮挡轮播图
  position: absolute;
  top: 0;
  width: 734px;
  right: -734px;
  min-height: 465px;
// ----------------------------------------------------------
//   第二种，缺点是固定不动，不能随浏览器移动
//   position: fixed;
//   min-height: 465px;
//   width: 734px;
//   top: 183px;
//   left: 370px;
// 第三种
//   position: relative;
//   top: -31px;
//   width: 734px;
//   max-height: 465px;
//   left: 208px;
  overflow: hidden;
  border: 1px solid #fff;
  z-index: 9999!important;
  display: none;
  background-color: #fff;
}
// &:hover {
//     .dropdown .dd ul li .dl {
//         display: block;
//     }
// }
.dd ul li .dl dt {
    height: 31px;
    padding: 0 20px;
    overflow: hidden;
    float: left;
}
.dd ul li .dl dt a:visited {
    color: black;
    font-weight: 700;
}
.dd ul li .dl dt a:hover {
    color: purple;
    text-decoration: underline;
}
.dd ul li .dl dd a {
    border-left: 1px dashed #ccc;
    font-weight: 400;
    color: skyblue;
}
.dd ul li .dl dd a:hover {
    text-decoration: underline;
    color: #000;
}
.dd ul li .dl dd {
    float: left;
    height: 31px;
    padding: 0 20px;
}
.dd ul .cur a {
    color: #c81623;
}
.dd ul li::after {
    // position: absolute;
    float: right;
    // top: 15px;
    right: -10px;
    content: '';
    font-family: 'icomoon';
    font-size: 14px;
    color: #fff;
}
.nav .navitems ul li {
    float: left;
}
.nav .navitems ul li a {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
    color: #333;
    padding: 0 25px;
}

</style>