<template>
  <div class="w">
    <div class="title">
      <h3><span class="sui-icon icon-pc-right"></span>商品已成功加入购物车！</h3>
    </div>
    <div class="goods clearfix">
      <div class="goods-left">
          <img :src="skuInfo.skuDefaultImg" alt="">
          <div class="left-info">
            <p>{{ skuInfo.skuName }}</p>
            <em>{{ skuInfo.skuDesc }}数量:{{$route.query.skuNum}}</em>
          </div>
      </div>
      <div class="goods-right">
        <div class="godetail">
          <router-link :to="`/detail/${skuInfo.id}`" class="godetailbtn1">查看商品详情</router-link>
        </div>
        <div class="goshopcart">
          <router-link to="/shopcar" class="godetailbtn2">去购物车结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addCartSuccess',
  computed: {
    skuInfo() {
      return JSON.parse(sessionStorage.getItem('SKUINFO'))
    }
  }

}
</script>

<style lang='less' scoped>
  .w {
      background-color: #f4f4f4;
      margin-bottom: 10px;
    }
  .title {
    height: 30px;
    line-height: 30px;
    h3 {
      font-size: 16px;
      font-weight: 400;
      color: #6aaf04;
      span {
      float: left;
      height: 30px;
      padding: 3px;
      margin-right: 8px;
      border: 2px solid #6aaf04;
      border-radius: 15px;
    }
    }
  }
  .goods {
    margin-top: 20px;
    .goods-left {
      float: left;
      img {
        float: left;
        width: 50px;
        height: 50px;
      }
      .left-info {
        float: right;
        color: #444;
        p {
          width: 650px;
          font-size: 14px;
          line-height: 28px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        em {
          color: #aaa;
        }
      }
    }
    .goods-right {
      float: right;
      font-size: 16px;
      .godetail {
        float: left;
        border: 1px solid #eaeaea;
        .godetailbtn1 {
          padding: 0 36px;
        }
      }
      .goshopcart {
        float: right;
        border: 1px solid #eaeaea;
        .godetailbtn2 {
          padding: 0 36px;
        }
      }
    }
  }
</style>