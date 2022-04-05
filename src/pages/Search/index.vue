<template>
   <div class="w">
     <TypeNav />
    <div class="header">
      <ul>
        <em class="first-a"><a href="#" class="fist-a">全部结果</a></em>
        <li v-if="searchParams.categoryName">
          <a href="#">{{searchParams.categoryName}}</a>
          <em @click="removeCategoryName">x</em>
        </li>
        <li v-if="searchParams.keyword">
          <a href="#">{{searchParams.keyword}}</a>
          <em @click="removeKeyWord">x</em>
        </li>
        <!-- 品牌的面包屑 -->
        <li v-if="searchParams.trademark">
          <a href="#">{{searchParams.trademark.split(':')[1]}}</a>
          <em @click="removeTradeMark">x</em>
        </li>
      </ul>
    </div>
    <SearchSelector @trademarkInfo= "trademarkInfo"></SearchSelector>
    <div class="content">
      <div class="content-navbar">
        <ul>
          <li class="navbar1"><a href="#">综合</a></li>
          <li><a href="#">销量</a></li>
          <li><a href="#">新品</a></li>
          <li><a href="#">评价</a></li>
          <li><a href="#">价格⬆</a></li>
          <li><a href="#">价格⬇</a></li>
        </ul>
      </div>
    </div>

    <div class="content-content">
      <ul class="clearfix">
        <li v-for="good in goodsList" :key="good.id">
          <a href="#">
            <img :src="good.defaultImg" alt="">
          </a>
          <h2>¥<em class="price">{{ good.price }}</em></h2>
          <p title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">
            <a href="#">
              {{good.title}}
            </a>
          </p>
          <div class="commit clearfix">
            <span>
              已有<em>2000</em>人评价
            </span>
          </div> 
          <div class="shopcar">
            <span class="shopcar1"><a href="#">加入购物车</a></span>
            <span class="shopcar2"><a href="#">收藏</a></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footers">
      <div class="footer">
       <ul  class="clearfix">
        <li><a href="#">«上一页</a></li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li class="dotted"><span>...</span></li>
        <li><a href="#">下一页»</a></li>
      </ul>
      <div>
        <span>共10页</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import SearchSelector from '@/pages/Search/SearchSelector/index.vue'
export default {
  name: 'Search-1',
  components: {
    SearchSelector
  },
  data() {
    return {
      searchParams: {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      categoryName: '',
      keyword: '',
      order: '',
      pageNo: 1,
      pageSize: 20,
      props: [],
      trademark:''
    }
    }
  },
  methods: {
    getData() {
      this.$store.dispatch('getSearchInfo', this.searchParams)
    },
    removeCategoryName() {
      this.searchParams.categoryName = undefined,
      this.searchParams.category1Id = undefined,
      this.searchParams.category2Id = undefined,
      this.searchParams.category3Id = undefined,
      this.getData()
      if(this.$route.params) {
        this.$router.push({name: 'search',params:this.$route.params})
      }
    },
    removeKeyWord() {
      this.searchParams.keyword=''
      this.getData()
      this.$bus.$emit("clear")
      if(this.$route.query) {
        this.$router.push({name: 'search',query:this.$route.query})
      }
    },
     trademarkInfo(trademark) {
      console.log(trademark);
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
      this.getData()
    },
    removeTradeMark() {
      this.searchParams.trademark=''
      this.getData()
    }
  },
  beforeMount() {
    Object.assign(this.searchParams,this.$route.query,this.$route.params)
  },
  mounted() {
    //派发异步，先测试接口返回的数据格式
    this.getData()
  },
  // computed: {
  //   ...mapState({
  //     //这样写也行，但是太麻烦，可以考虑getters
  //     goodsList:state=>state.search.searchList.goodsList
  //   })
  // }
  computed: {
    ...mapGetters(['goodsList'])
  },
  watch: {
    $route() {
      Object.assign(this.searchParams,this.$route.params,this.$route.query)
      this.getData()
      this.searchParams.category1Id=''
      this.searchParams.category2Id=''
      this.searchParams.category3Id=''
    }
  }

}
</script>

<style lang='less' scoped>
  /* 1. */
.header ul {
  height: 30px;
  margin-bottom: 5px;
  padding: 10px 0 0 ;
  text-align: center;
}
.header ul .first-a {
  float: left;
  height: 20px;
  padding: 0 15px;
}
.header ul .first-a a {
  line-height: 20px;
}
.header ul li {
  float: left;
  margin-right: 5px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #ededed;
}
.header ul li a {
  padding: 0 5px 0 5px;
  font-size: 12px;
  color: #000;
}
.header ul li a:hover {
  cursor:alias;
  color: skyblue;
}
.header ul li em {
  padding-right: 5px;
}
.header ul li em:hover {
  cursor: pointer;
}
.header ul li:hover {
  color: red;
}
/* 2 */
.content-navbar {
  margin-top: 20px;
  height: 40px;
}
.content-navbar ul li {
  float: left;
  width: 54px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  line-height: 40px;
}
.content-navbar ul li a {
  display: inline-block;
  width: 54px;
  height: 40px;
}
.content-navbar ul .navbar1 a {
  background-color: #e1251b;
  color: #fff;
}
.content-content ul {
  /* background-color: pink; */
  text-align: center;
}
.content-content ul li {
  float: left;
  width: 240px;
  height: 408.19px;
}
.content-content ul li a {
  display: inline-block;
  width: 215px;
  height: 255px;
}
.content-content ul li a img {
  height: 226.17px;
  width: 200px;
}
.content-content ul li h2 {
  float: left;
  padding-left: 15px;
  font-weight: 700;
  color: #e1251b;
}
.content-content ul li p {
  width: 204px;
  height: 43.19px;
  text-align: left;
}
.content-content ul li p a {
  float: left;
  width: 204px;
  height: 43px;
  padding-left: 15px;
  line-height: 1.8;
  color: #000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.content-content ul li .commit {
  color: #a7a7a7;
  font-weight: 700;
}
.content-content ul li .commit span {
  float: left;
  padding: 15px;
}
.content-content ul li .commit span em {
  color: skyblue;
}
.content-content .shopcar {
  height: 24px;
  font-size: 12px;
  text-align: left;
}
.content-content .shopcar span {
  float: left;
  display: block;
  height: 24px;
  text-align: center;
}
.content-content .shopcar span a {
  display: inline-block;
  height: 24px;
  line-height: 24px;
}
.content-content .shopcar .shopcar1 a {
 margin: 0 20px;
 width: 90px;
 color: red;
 border: 1px solid red;
}
.content-content .shopcar .shopcar1 a:hover {
  color: #fff;
  background-color: red;
}
.content-content .shopcar .shopcar2 a{
  width: 85px;
  border: 1px solid black;
}
.content-content .shopcar .shopcar2 a:hover {
  color: #fff;
  background-color: gray;
}
/* footer */
.footers {
  text-align: center;
  margin-top: 30px;
  height: 38px;
  margin-bottom: 40px;
}
.footer{
  display: inline-block;
  /* margin-top: 30px; */
  height: 38px;
  /* text-align: center; */
  background-color: #fff;
  width: 580px;
}
.footer ul{
  display: inline-block;
  /* width: 490px; */
}
.footer ul li {
  float: left;
  height: 38px;
  /* margin: 0 10px; */
  margin-left: 20px;
  line-height: 38px;
  background-color: #fafafa;
  border: 1px solid #999;
}
.footer ul .dotted {
  border: 0;
}
.footer ul .active {
  border: 0;
}
.footer ul .active a:hover {
  text-decoration: underline;
  cursor: default;
}
.footer ul li a {
  font-size: 14px;
  padding: 0 10px;
}
.footer div {
  float: right;
  font-size: 14px;
   text-align: left;
  height: 38px;
}
.footer div span {
  height: 38px;
  line-height: 38px;
}
</style>