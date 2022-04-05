<template>
  <div>
   <!-- 快捷导航模块start -->
    <section class="shortcut">
        <div class="w">
            <div class="fl">
                <ul>
                    <li class="fl">品优购欢迎您！&nbsp;</li>
                    <li class="fl">
                        <router-link to="/login">请登录</router-link>&nbsp;
                        <router-link to="/register" class="style_red">免费注册</router-link>
                    </li>
                </ul>
            </div>
            <div class="fr">
                <ul>
                    <li>我的订单</li>
                    <li class="one"></li>
                    <li class="arrow_icon">我的品优购</li>
                    <li></li>
                    <li>品优购会员</li>
                    <li></li>
                    <li>企业采购</li>
                    <li></li>
                    <li class="arrow_icon">关注品优购</li>
                    <li></li>
                    <li class="arrow_icon">客户服务</li>
                    <li></li>
                    <li class="arrow_icon">网站导航</li>
                </ul>
            </div>
        </div>
    </section>
    <!-- 快捷导航模块end -->
    <!-- header头部模块制作start -->
    <header class="header w">
        <!-- logo模块 -->
        <div class="logo">
            <h1>
                <router-link to="/home" title="品优购商城">品优购商城</router-link>
            </h1>
        </div>
        <!-- search模块 -->
        <div class="search">
            <input type="search" name="" id="" placeholder="语言开发" v-model="keyword">
            <button @click="goSearch">搜索</button>
        </div>
        <!-- hotwrods模块制作 -->
        <div class="hotwrods">
            <a href="#" class="style_red">优惠购首发</a>
            <a href="#">亿元优惠</a>
            <a href="#">9.9元团购</a>
            <a href="#">美满99减30</a>
            <a href="#">办公用品</a>
            <a href="#">电脑</a>
            <a href="#">通信</a>
        </div>
        <router-link to="/shopcar">
            <div class="shopcar">
            我的购物车
            <div class="content">8</div>
        </div>
        </router-link>
    </header>
    <!-- header头部模块制作end -->
  </div>
</template>

<script>
export default {
  name:'Header-1',
  data() {
      return {
          keyword: ''
      }
  },
  methods: {
      goSearch(){
        //   搜索按钮
        // 1.字符串形式
        // this.$router.push('/search/'+this.keyword+"?k="+this.keyword.toUpperCase())
        // 2.模板字符串形式
        // this.$router.push( `/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
        // 3.对象
        if(this.$route.query) {
            let location = {
                name:'search',
                params:{keyword: this.keyword || undefined}   
            }
            location.query = this.$route.query
            this.$router.push(location)
        }
      }
  },
  mounted() {
      this.$bus.$on("clear",()=>{
          this.keyword=''
      })
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
/* 快捷导航模块 */
.shortcut {
    height: 31px;
    background-color: #f1f1f1;
    line-height: 31px;
}
.shortcut li {
    float: left;
}
.shortcut .fr ul li:nth-child(2n){
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
}
.arrow_icon::after {
    content: '';
    font-family: 'icomoon';
    margin-left: 10px;
}
/* header头部模块制作start */
.header {
    position: relative;
    height: 105px;
    
}
.header .logo {
    position: absolute;
    top: 25px;
    width: 171px;
    height: 61px;
}
.header .logo a {
    display: block;
    width: 171px;
    height: 61px;
    background: url('@/assets/images/logo.png') no-repeat;
    /* 隐藏文字1：京东的做法
    font-size: 0; */
    /* 隐藏文字2：淘宝的做法 */
    text-indent: -999px;
    overflow: hidden;
}

.search {
    position: absolute;
    top: 25px;
    left: 346px;
    border: 2px solid #b1191a;
    width: 538px;
    height: 36px;
}
.search input {
    float: left;
    width: 454px;
    height: 32px;
    padding-left: 10px;
}
.search button {
    float: left;
    width: 80px;
    height: 32px;
    font-size: 16px;
    color: #fff;
    background-color: #b1191a;
}
.hotwrods {
    position: absolute;
    top: 66px;
    left: 346px;
}
.hotwrods a {
    margin: 0 10px;
    font-size: 12px;
}
.shopcar {
    position: absolute;
    top: 25px;
    right: 63px;
    width: 140px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 12px;
    color: #666666;
    background-color: #f7f7f7;
    border: 1px solid #dfdfdf;
}
.shopcar::before {
    content: '';
    font-family: 'icomoon';
    margin-right: 5px;
    color: #df7070;
}
.shopcar::after {
    content: '';
    font-family: 'icomoon';
    margin-left: 10px;
}
.shopcar .content {
    display: inline;
    position: absolute;
    top: -5px;
    left: 105px;
    line-height: 14px;
    height: 14px;
    color: #fff;
    background-color: #e60012;
    padding: 0 5px;
    border-radius: 7px 7px 7px 0;
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

</style>