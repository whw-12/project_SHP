<template>
  <div class="rank w">
    <div class="tap w">
      <div class="tap-tit">
        <span>
          <em class="img2"></em>
          <a href="javascript:;" class="tap1">热卖排行</a>
        </span>
        <span>
          <em class="img1"></em>
          <a href="javascript:;">特价排行</a>
        </span>
        <span>
          <em class="img1"></em>
          <a href="javascript:;">新品排行</a>
        </span>
      </div>
    </div>
    <div class="content">
      <ul class="rank-content">
        <li>
          <a href="#" class="content-img"><img src="./images/1.jpg" alt=""></a>
          <p><a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a></p>
          <h4 class="info-price">定金:￥100.00</h4>
        </li>
        <li>
          <a href="#" class="content-img"><img src="./images/1.jpg" alt=""></a>
          <p><a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a></p>
          <h4 class="info-price">定金:￥100.00</h4>
        </li>
        <li>
          <a href="#" class="content-img"><img src="./images/1.jpg" alt=""></a>
          <p><a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a></p>
          <h4 class="info-price">定金:￥100.00</h4>
        </li>
        <li>
          <a href="#" class="content-img"><img src="./images/1.jpg" alt=""></a>
          <p><a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a></p>
          <h4 class="info-price">定金:￥100.00</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShouJi'

}
</script>

<style lang='less' scoped>
/* 第一部分 */
.tap-tit {
  width: 312px;
  height: 78px;
  margin: 0 auto;
}
.tap-tit span {
  float: left;
  text-align: center;
  width: 100px;
}
.tap-tit span em {
  display: inline-block;
  width: 35px;
  height: 35px;
}
.tap-tit span .img1 {
   background: url('./images/bg0.png') no-repeat 0 0;
}
.tap-tit span .img2 {
  background: url('./images/bg0.png') no-repeat -35px 0;
}
.tap-tit span a {
  display: inline-block;
  width: 64px;
  height: 28px;
  font-size: 16px;
}
.tap-tit span .tap1 {
  color: red;
}
.tap-tit span .tap1:hover {
  color: purple;
  text-decoration: underline;
}
/* 第二部分 */
.content .rank-content {
  text-align: center;
}
.content .rank-content li {
  display: inline-block;
  width: 269px;
  height: 330px;
  margin-right: 20px;
  text-align: center;
  border: 1px solid red;
}
.content .rank-content li .content-img {
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 200px;
  
}
.content .rank-content li a img {
  display: inline-block;
  width: 200px;
  margin: 0 auto;
  height: 200px;
}
.content .rank-content p {
  height: 44px;
  text-align-last: left;
  margin-top: 20px;
  margin-left: 20px;
}
.content .rank-content p a {
  line-height: 29px;
}
.content .rank-content .info-price {
  padding-left: 20px;
  text-align-last: left;
  margin-top: 20px;
  color: #e1251b;
  font-size: 20px;
  font-weight: 400;
}
</style>