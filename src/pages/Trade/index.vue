<template>
   <div class="w trade-container">
    <h3>填写并核对信息</h3>
    <div class="content">
      <h4>收件人信息</h4>
      <ul class="clearfix" v-for="address in addressInfo" :key="address.id">
        <li>
          <span class="s1" :class="{ss1:address.isDefault == 1}">{{address.consignee}}</span>
          <p @click="changeDefault(address,addressInfo)">
            <span class="s2">{{address.userAddress}}</span>
            <span class="s3">{{address.phoneNum}}</span>
            <span class="s4" v-show="address.isDefault==1">默认地址</span>
          </p>
        </li>
      </ul>
      <h4>支付方式</h4>
      <ul>
        <li>
          <span class="s1">在线支付</span>
          <span class="s5">货到付款</span>
        </li>
      </ul>
      <div class="way">
        <h4>配送方式</h4>
        <p>
          <span class="s1">天天快递</span>
          <em>配送时间：预计8月10日（周三）09:00-15:00送达</em>
        </p>
      </div>
      <div class="shoplist clearfix">
        <h4>商品清单</h4>
        <ul class="u1" v-for="order in orderInfo.detailArrayList" :key="order.skuId">
          <li class="l1"><img :src="order.imgUrl" alt=""></li>
          <li class="l2">
            <p>{{order.skuName}}</p>
            <h4>7天无理由退货</h4>
          </li>
          <li class="l3">￥{{order.orderPrice}}</li>
          <li class="l4">x{{order.skuNum}}</li>
          <li class="l5">有货</li>
        </ul>
      </div>
      <h4>买家留言：</h4>
      <div class="text">
        <textarea name="" id="" placeholder="建议留言前先于商家沟通确认" v-model="msg"></textarea>
      </div>
      <h4>发票信息：</h4>
      <p class="last">普通发票（电子）个人&nbsp;明细</p>
      <h4>使用优惠/抵用</h4>

    </div>
    <div class="money clearfix">
      <ul>
        <li class="clearfix">
          <p>
            <span class="red">{{orderInfo.totalNum}}</span><span>件商品，总商品金额</span>
            <em>￥{{orderInfo.totalAmount}}.00</em>
          </p>   
        </li>
        <li class="clearfix">
          <p>
            <span>返现：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <em>0.00</em>
          </p>
        </li>
        <li class="clearfix">
          <p>
            <span>运费：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <em>0.00</em>
          </p>
        </li>
      </ul>
    </div>
    <div class="footer-container">
      <div class="first">
        <span>应付金额：</span>
        <em>￥{{orderInfo.totalAmount}}.00</em>
      </div>
      <div class="second">
        <p>寄送至: <span>{{userDefaultAddress.fullAddress}}</span> 收货人：{{userDefaultAddress.consignee}},{{userDefaultAddress.phoneNum}}</p>
      </div>
    </div>
    <div class="btn clearfix">
      <button @click="submitOrder">提交订单</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'trade-1',
  data() {
    return {
      msg:'',
      orderId:''
    }
  },
  mounted() {
    this.$store.dispatch('getUserAddress')
    this.$store.dispatch('getOrderInfo')
  },
  computed: {
    ...mapState({
      addressInfo:state=>state.trade.address,
      orderInfo:state=>state.trade.orderinfo
    }),
    userDefaultAddress(){
      return this.addressInfo.find(item=>item.isDefault==1) || {}
    }
  },
  methods: {
    //修改默认数组
    changeDefault(address,addressInfo) {
      addressInfo.forEach(item => (item.isDefault=0))
      address.isDefault = 1

    },
    //提交订单
    async submitOrder() {
      let {tradeNo} = this.orderInfo
      let data = {
        consignee: this.userDefaultAddress.consignee,//收件人名字
        consigneeTel: this.userDefaultAddress.phoneNum,//收件人手机号
        deliveryAddress: this.userDefaultAddress.fullAddress,//收件人的地址
        paymentWay: 'ONLINE',//支付方式
        orderComment: this.msg,//买家评论
        orderDetailList: this.orderInfo.detailArrayList//购物车商品清单
      }
      let result = await this.$API.reqSubmitOrder(tradeNo,data)
      if(result.code == 200) {
        this.orderId = result.data
        this.$router.push('/payzhifu?orderId=' + this.orderId)
      } else {
        alert(result.data)
      }
      // console.log(result);
    }
  }


}
</script>

<style lang='less' scoped>
  h3 {
  font-weight: 700;
  margin-bottom: 5px;
}
.content {
  padding: 25px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}
.content h4 {
  margin-top: 10px;
}
.content ul {
  padding: 10px;
}
.content ul li {
  height: 30px;
  margin: 10px 0;
  line-height: 30px;
}
.content .s1 {
  position: relative;
  float: left;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  
  border: 1px solid #ddd;
}
.content .ss1 {
   border: 1px solid #e1251b;
}
.content .ss1::after {
  position: absolute;
  content: '';
  width: 13px;
  height: 13px;
  right: 0;
  bottom: 0;
  background: url('./images/choosed.png') no-repeat;
}
.content ul li p {
  float: left;
  width: 610px;
  height: 30px;
  cursor: pointer;
  margin-left: 10px;
}
.content ul li p:hover {
  background-color: #ddd;
}
.content ul li p .s2 {
  float: left;
  line-height: 30px;
}
.content ul li p .s3 {
  float: left;
  line-height: 30px;
  margin-left: 5px;
}
.content ul li p .s4 {
  display: inline-block;
  width: 56px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  margin-left: 10px;
  background-color: #878787;
}
.content .s5 {
  display: inline-block;
  margin-left: 10px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ddd;
}
.way {
  padding: 15px;
  background-color: #f4f4f4;
}
.way h4 {
  height: 50px;
  line-height: 50px;
}
.way p {
  margin-top: 20px;
}
.way p em {
  /* display: inline-block; */
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-left: 10px;
}
.shoplist {
  margin-top: 5px;
  padding: 15px;
  background-color: #feedef;
}
.shoplist ul {
  height: 82px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-top: 10px;
}
.shoplist ul li {
  float: left;
  height: 82px;
}
.shoplist ul .l1 {
  width: 82px;
  height: 82px;
}
.shoplist ul .l1 img {
  width: 82px;
  height: 82px;
}
.shoplist ul .l2 {
  margin-left: 100px;
}
.shoplist ul .l2 p {
  display: inline-block;
  padding: 0;
  margin: 0;
}
.shoplist ul .l2 h4 {
  color: #c81623;
  font-weight: 400;
}
.shoplist ul .l3 {
  color: #e12228;
}
.shoplist ul .l4 {
  margin-left: 100px;
}
.shoplist ul .l5 {
  float: right;
}
.text {
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.text textarea {
  width: 100%;
  margin-top: 10px;
  border-color: #e4e2e2;
  line-height: 1.8;
  outline: none;
  resize: none;
}
.last {
  margin-top: 10px;
  padding-left: 20px;
}
.money {
  margin-bottom: 20px;
}
.money ul li p {
  float: right;
}
.money ul li p .red {
  color: red;
}
.money ul li p span {
  float: left;
}
.money ul li p em {
  float: right;
  margin-left: 50px;
}


.footer-container {
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  margin-bottom: 20px;
  padding: 15px;
}

.footer-container .first,
.second {
  position: relative;
  height: 30px;
  line-height: 30px;
}
.footer-container .first em {
  position: absolute;
  right: 0;
  padding: 0 5px;
  font-size: 14px;
  font-weight: 700;
  color: #e12228;
}
.footer-container .first span {
  position: absolute;
  right: 100px;
}
.footer-container .second p {
  position: absolute;
  right: 0px;
}
.btn button {
  float: right;
  width: 164px;
  height: 56px;
  color: #fff;
  background-color: #e1251b;
  line-height: 56px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 20px;
}
</style>