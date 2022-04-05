<template>
   <div class="paysuccess w">
    <div class="success">
      <div>
        <img src="./images/right.png" alt="">
        <h3>恭喜您，支付成功啦！</h3> 
      </div>
      <div class="paydetail">
        <ul>
          <li class="left"> <router-link to="/payzhifu">查看订单</router-link> </li>
          <li class="right"> <router-link to="/home">继续购物</router-link> </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PaySuccess',
  }
</script>

<style lang="less" scoped>
 .paysuccess {
  margin: 10px auto;
  border: 1px solid gray;
}
.paysuccess .success {
  padding: 10px;
}
.paysuccess .success div {

  text-align: center;
  padding-top: 30px;
  font-size: 18px;
}
.paysuccess .success img {
  width: 48px;
  height: 48px;
}
.paysuccess .success h3 {
  display: inline-block;
  height: 48px;
  margin-left: 15px;
}
.paysuccess .paydetail {
  margin-bottom: 30px;
}
.paysuccess .paydetail ul li {
  display: inline-block;
  width: 114px;
  height: 32px;
  line-height: 32px;
}
.paysuccess .paydetail ul .left {
  background-color: #e1251b;
}
.paysuccess .paydetail ul .left a {
  color: #fff;
}
.paysuccess .paydetail ul .right {
  background-color: gray;
}
</style>