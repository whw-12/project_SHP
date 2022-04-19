<template>
  <div class="w">
    <!-- 分类 -->
    <TypeNav></TypeNav>

    <div class="utlis-header clearfix">
      <ul>
        <li v-show="categoryView.category1Name">{{ categoryView.category1Name }}</li>
        <li v-show="categoryView.category2Name">{{ categoryView.category2Name }}</li>
        <li v-show="categoryView.category3Name">{{ categoryView.category3Name }}</li>
    </ul>
    </div>
    <!-- 商品信息 -->
    <div class="utils-content clearfix">
      <div class="previewWrap">
        <Zoom :skuImageList="skuImageList"></Zoom>
        <ImageList :skuImageList="skuImageList"></ImageList>
      </div>
      <div class="infoWrap">
        <div class="goodsDetail">
          <h3>{{ skuInfo.skuName }}</h3>
          <p>{{ skuInfo.skuDesc }}</p>
          <div class="priceArea">
            <div class="priceArea1">
              <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;格</div>
              <div class="price">
                <i>￥</i>
                <span>{{ skuInfo.price }}</span>
                <em>降价通知</em>
              </div>
              <div class="remark">累计评价65545</div>
            </div>
            <div class="priceArea2">
              <div class="title">促&nbsp;&nbsp;&nbsp;&nbsp;销</div>
              <div class="cuxiao">
                <em>加价购</em>
                <span>满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</span>
              </div>
            </div>
          </div>
          <div class="support">
            <div class="support1">
              <span>支&nbsp;&nbsp;&nbsp;持</span>
              <em>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</em>
            </div>
            <div class="support2">
              <span>配送至</span>
              <em>广东省 深圳市 宝安区</em>
            </div>
          </div>
          <div class="choose">
            <div class="chooseArea clearfix">
              <dl v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.id">
                <dt>{{spuSaleAttr.saleAttrName}}</dt>
                <dd :class="{green:spuSaleAttrValue.isChecked==1}" v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList" :key="spuSaleAttrValue.id" @click="changeGreen(spuSaleAttrValue,spuSaleAttr.spuSaleAttrValueList)">{{spuSaleAttrValue.saleAttrValueName}}</dd>
              </dl>
              <dl>
                <dt>内存容量</dt>
                <dd class="green">16G</dd>
                <dd>64g</dd>
                <dd>128g</dd>
                <dd>256G</dd>
              </dl>
        
              <dl>
                <dt>购买方式</dt>
                <dd class="green">官方标配</dd>
                <dd>优惠移动版</dd>
                <dd>电信优惠版</dd>
              </dl>
            </div>

          </div>
          <div class="shopCart">
              <div class="shopCartArea">
                <div class="count">
                  <input type="text" name="" id="" class="input1" v-model="skuNum" @change="changeSkuNum">
                  <button class="btn1" @click="skuNum++">+</button>
                  <button class="btn2" @click="skuNum>1?skuNum--:skuNum=1">-</button>
                </div>
                <input type="submit" value="加入购物车" class="input2" @click="addShopCar">
              </div>
            </div>
        </div>
      </div>
    </div>
    <!-- 相关分类 -->
    <div class="utils-product clearfix">
      <div class="aside">
        <div class="aside-tap">
          <div class="tap1">相关分类</div>
          <div class="tap2 clearfix">
              <h4>推荐品牌</h4>
              <ul class="aside-content">
                <li>手机</li>
                <li>手机壳</li>
                <li>内存卡</li>
                <li>iPhone配件</li>
                <li>贴膜</li>
                <li>手机耳机</li>
                <li>移动电源</li>
                <li>平板电脑</li>
              </ul>
          </div>
        </div>
        <ul class="aside-img">
          <li>
            <img src="./images/part01.png" alt="">
            <div class="img">
              <p>Apple苹果iPhone 6s (A1699)</p>
            </div>
            <div class="img-price clearfix">
              <i>￥</i>
              <em>6088.00</em>
            </div>
            <div class="operate">
              <a>加车入购物</a>
            </div>
          </li>
          <li>
            <img src="./images/part02.png" alt="">
            <div class="img">
              <p>Apple苹果iPhone 6s (A1699)</p>
            </div>
            <div class="img-price clearfix">
              <i>￥</i>
              <em>6088.00</em>
            </div>
            <div class="operate">
              <a>加车入购物</a>
            </div>
          </li>
          <li>
            <img src="./images/part03.png" alt="">
            <div class="img">
              <p>Apple苹果iPhone 6s (A1699)</p>
            </div>
            <div class="img-price clearfix">
              <i>￥</i>
              <em>6088.00</em>
            </div>
            <div class="operate">
              <a>加车入购物</a>
            </div>
          </li>
          <li>
            <img src="./images/part01.png" alt="">
            <div class="img">
              <p>Apple苹果iPhone 6s (A1699)</p>
            </div>
            <div class="img-price clearfix">
              <i>￥</i>
              <em>6088.00</em>
            </div>
            <div class="operate">
              <a>加车入购物</a>
            </div>
          </li>
          <li>
            <img src="./images/part03.png" alt="">
            <div class="img">
              <p>Apple苹果iPhone 6s (A1699)</p>
            </div>
            <div class="img-price clearfix">
              <i>￥</i>
              <em>6088.00</em>
            </div>
            <div class="operate">
              <a>加车入购物</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="detail clearfix">
        <div class="detail-header clearfix">
          <div class="tap">
            <h3>选择搭配</h3>
          </div>
          <div class="tap-content">
            <div class="master">
              <img src="./images/l-m01.png" alt="">
              <p>￥5299</p>
            </div>
            <i>+</i>
            <ul>
              <li>
                <img src="./images/dp01.png" alt="">
                <p>Feless费勒斯VR</p>
                <label for="">
                  <input type="checkbox" name="" id="">
                  <span>39</span>
                </label>
              </li>
              <li>
                <img src="./images/dp02.png" alt="">
                <p>Feless费勒斯VR</p>
                <label for="">
                  <input type="checkbox" name="" id="">
                  <span>50</span>
                </label>
              </li>
              <li>
                <img src="./images/dp03.png" alt="">
                <p>Feless费勒斯VR</p>
                <label for="">
                  <input type="checkbox" name="" id="">
                  <span>59</span>
                </label>
              </li>
              <li>
                <img src="./images/dp04.png" alt="">
                <p>Feless费勒斯VR</p>
                <label for="">
                  <input type="checkbox" name="" id="">
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="cart">
              <p>已选购0件商品</p>
              <div>套餐价</div>
              <em>￥5299</em>
              <span>加入购物车</span>
            </div>
          </div>
        </div>
        <div class="introduce">
            <ul class="clearfix one">
              <li>商品介绍</li>
              <li>规格与包装</li>
              <li>售后保障</li>
              <li>商品评价</li>
              <li>手机社区</li>
            </ul>
            <div class="goods-intro">
              <ul class="two">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
              </ul>
            </div>
            <div class="intro-detail">
              <img src="./images/intro01.png" alt="">
              <img src="./images/intro02.png" alt="">
              <img src="./images/intro03.png" alt="">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zoom from './Zoom/index.vue'
import ImageList from './ImageList/index.vue'
import {mapGetters} from 'vuex'
// import router from '@/Router'
export default {
  name: 'DetailsU',
  data() {
    return {
      skuNum: 1
    }
  },
  components: {
    Zoom,
    ImageList
  },
  mounted() {
    this.$store.dispatch('getGoodsInfo',this.$route.params.skuid)
  },
  computed: {
    ...mapGetters(['categoryView','skuInfo','spuSaleAttrList']),
    skuImageList() {
      return this.skuInfo.skuImageList||[];
    }
  },
  methods: {
    changeGreen(spuSaleAttrValue,arr) {
      //排他思想
      arr.forEach(item => {
        item.isChecked = 0
      });
      spuSaleAttrValue.isChecked = 1
    },
    //获取表单数据
    changeSkuNum(event) {
      let value = event.target.value *1
      //如果用户输入进来的非法 value=NAN
      if(isNaN(value) || value<1) this.skuNum = 1
      else this.skuNum = parseInt(value)
      console.log(this.skuNum);
    },
    //加入购物车的回调函数
    async addShopCar() {
      try {
        await this.$store.dispatch('addOrUpdateShopCart',{
          skuId:this.$route.params.skuid,
          skuNum:this.skuNum
          });
          // this.$router.push({name:'addCartSuccess',query:{skuInfo:this.skuInfo,skuNum:this.skuNum}})
          //上面这种路由传参行，但是地址栏有点长
          sessionStorage.setItem('SKUINFO',JSON.stringify(this.skuInfo))
          this.$router.push({name:'addCartSuccess',query:{skuNum:this.skuNum}})
      } catch (error) {
        alert(error.message)
      }
    }
  }

}
</script>

<style lang='less' scoped>
  .utlis-header {
  margin: 20px 0;
}
.utlis-header ul li {
  float: left;
  height: 16px;
  margin-right: 5px;
}
.utlis-header ul li::after {
  content: '/';
  padding-left: 5px;
  color: #ccc;
}
.utlis-header ul li:last-child::after {
  content: '';
}
.utils-content .previewWrap {
  float: left;
}
.utils-content .infoWrap {
  float: right;
  width: 700px;
  height: 522.33px;
}
.infoWrap .goodsDetail h3 {
  margin-top: 15px;
}
.infoWrap .goodsDetail p {
  color: #e12228;
  margin-top: 15px;
}
.infoWrap .priceArea {
  margin: 15px 0;
  padding: 10px;
  height: 123.33px;
  background-color: #fee9eb;;
}
.infoWrap .priceArea .priceArea1 {
  line-height: 33.33px;
  height: 33.33px;
}
.infoWrap .priceArea .title {
  float: left;
  margin-right: 15px;
}
.infoWrap .priceArea .priceArea1 .price {
  float: left;
}
.infoWrap .priceArea .priceArea1 .price i {
  float: left;
  font-size: 16px;
  color: #c81623;
}
.infoWrap .priceArea .priceArea1 .price span {
  float: left;
  font-size: 20px;
  font-weight: 700;
  color: #c81623;
}
.infoWrap .priceArea .priceArea1 .price em {
  float: left;
  color: #c81623;
}
.infoWrap .priceArea .priceArea1 .remark {
  float: right;
}
.infoWrap .priceArea .priceArea2 {
  height: 56px;
  line-height: 28px;
  margin-top: 20px;
}
.infoWrap .priceArea .priceArea2 .cuxiao {
  float: left;
  width: 520px;
  height: 56px;
  color: #999;
}
.infoWrap .priceArea .priceArea2 .cuxiao em {
  width: 42px;
  height: 22px;
  color: #fff;
  padding: 3px;
  background-color: #c81623;
}
.infoWrap .goodsDetail .support {
  height: 72px;
  padding: 8px 0;
  border-bottom: 1px solid #ededed;
}
.infoWrap .goodsDetail .support  span {
  height: 28px;
  margin-right: 10px;
  line-height: 28px;
}
.infoWrap .goodsDetail .support em {
  color: #999;
}
.infoWrap .goodsDetail .choose {
  margin-top: 10px;
}
.choose .chooseArea {
  padding: 5px;
}
.choose .chooseArea dl {
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
}
.choose .chooseArea dl dt {
  float: left;
  margin-right: 15px;
}
.choose .chooseArea dl dd {
  float: left;
  padding: 0 10px;
  border-top: 1px solid #eee;
  border-right: 1px solid #bbb;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #bbb;
}
.choose .chooseArea dl .green {
  color: green;
  border: 1px solid green;
}
.shopCart {
  display: block;
  height: 40px;
  padding: 5px;
}
.shopCart .count {
  position: relative;
  float: left;
  width: 60px;
  height: 40px;
  margin-right: 10px;
}
.shopCart .input1 {
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid #ddd;
}
.shopCart .input1:focus {
  border: 2px solid black;
}
.shopCart button {
  width: 20px;
  height: 20px;
}
.shopCart .btn1 {
  position: absolute;
  top: 0;
  right: 0;
}
.shopCart .btn2 {
  position: absolute;
  bottom: 0px;
  right: 0;
}
.shopCart .input2 {
  float: left;
  height: 40px;
  background-color: #e1251b;
  font-size: 16px;
  color: #fff;
  padding: 0 20px;
}
.utils-product {
  margin-top: 40px;
  /* background-color: pink; */
}
.utils-product .aside {
  float: left;
  width: 210px;
  border: 1px solid #ccc;
}
.aside .aside-tap .tap1 {
  width: 105px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-top: 3px solid #e1251b;
}
.aside .aside-tap .tap2 h4 {
  float: left;
  width: 105px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #000;
}
.aside .aside-content {
  float: right;
  width: 93px;
}
.aside .aside-content li {
  float: left;
  width: 46.5px;
  line-height: 28px;
  border-bottom: 1px dashed #ededed;
}
.utils-product .aside .aside-img li {
  width: 188px;
  padding: 10px 0;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #ededed;
}
.utils-product .aside .aside-img li img {
  width: 152px;
}
.utils-product .aside .aside-img li p {
  text-align: left;
}
.utils-product .aside .aside-img li em
,i {
  float: left;
  font-size: 16px;
  color: #c81623;
}
.utils-product .aside .aside-img li .operate {
  margin-top: 10px;
}
.utils-product .aside .aside-img li a {
  border: 1px solid #000;
  padding: 2px 15px;
  cursor: pointer;
}
.utils-product .detail {
  float: right;
  width: 980px;
}
.utils-product .detail .detail-header {
  position: relative;
  border: 1px solid #ddd;
}
.utils-product .detail .detail-header h3 {
  height: 29px;
  padding: 5px 10px;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ddd;
}
.utils-product .detail .detail-header .tap-content {
  padding-top: 10px;
}
.utils-product .detail .detail-header .tap-content .master {
  float: left;
  width: 127px;
  text-align: center;
}
.utils-product .detail .detail-header .tap-content .master p {
  font-size: 16px;
  font-weight: 700;
  color: #c81623;
}
.detail .detail-header ul li {
  float: left;
  width: 127px;
  height: 167px;
  padding: 0 20px;
  text-align: center;
}
.detail .detail-header ul li p {
  text-align: left;
}
.detail .detail-header ul li label {
  display: block;
  height: 16px;
  line-height: 16px;
}
.detail .detail-header ul li label input
,span {
  vertical-align: middle;
}
.detail .detail-header i {
  position: absolute;
  top: 50%;
  color: black;
}
.detail .detail-header .cart {
  position: absolute;
  right: 20px;
  padding-left: 20px;
  border-left: 1px solid #ddd;
}
.detail .detail-header .cart p {
  font-size: 14px;
  margin: 10px 0;
}
.detail .detail-header .cart div {
  display: block;
  font-size: 12px;
  font-weight: 700;
}
.detail .detail-header .cart em {
  display: block;
  margin-top: 10px;
  font-size: 16px;
  color: #B1191A;
}
.detail .detail-header .cart span {
  display: block;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border: 1px solid #e1251b;
  background-color: #e1251b;
}
.detail .introduce {
  margin-top: 10px;
}
.detail .introduce .one {
  background-color: #ededed;
}
.detail .introduce .one li {
  float: left;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  background-color: #fff;
}
.detail .introduce .one li:first-child {
  background-color: #e1251b;
  color: #fff;
}
.detail .introduce .goods-intro .two {
  padding-left: 10px;
}
.detail .introduce .goods-intro .two li {
  padding: 10px 0;
}
</style>