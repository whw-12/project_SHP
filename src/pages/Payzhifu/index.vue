<template>
  <div class="pay-main w">
    <el-button type="primary" icon="el-icon-plus">测试</el-button>
    
    <div class="first">
      <div class="success">
        <span class="success-icon"></span>
        <h4 class="success-info">订单提交成功，请您及时付款，以便尽快为您发货~~</h4>
      </div>
      <div class="paymark">
        <div class="paymark1">
          请您在提交订单<em class="style_red">4小时</em>之内完成支付，超时订单会自动取消。订单号：{{orderId}}
        </div>
        <div class="money">
          <ul>
            <li class="z">应付金额：</li>
            <li class="x">￥{{payInfo.totalFee}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="second">
      <h4 class="second1">重要说明：</h4>
      <ul class="second2">
        <li>尚品汇商城支付平台目前支持<em>支付宝</em>支付方式。</li>
        <li>其它支付渠道正在调试中，敬请期待。</li>
        <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
      </ul>
      <h4 class="second1">支付宝账户信息：（很重要，请保存！！！）</h4>
      <ul class="second2">
        <li>支付帐号：11111111</li>
        <li>密码：111111</li>
        <li>支付密码：111111</li>
      </ul>
    </div>
    <div class="last">
      <div class="last-footer">
        <div class="last1">
        <h5 class="zfb1">支付平台</h5>
        <ul>
          <li> <img src="./images/pay2.jpg" alt=""> </li>
          <li> <img src="./images/pay3.jpg" alt=""> </li>
        </ul>
        </div>
        <div class="last2">
        <h5 class="zfb2">支付网银</h5>
        <ul>         
          <li><img src="./images/pay10.jpg" alt=""></li>
          <li><img src="./images/pay11.jpg" alt=""></li>
          <li><img src="./images/pay12.jpg" alt=""></li>
          <li><img src="./images/pay13.jpg" alt=""></li>
          <li><img src="./images/pay14.jpg" alt=""></li>
          <li><img src="./images/pay15.jpg" alt=""></li>
          <li><img src="./images/pay16.jpg" alt=""></li>
          <li><img src="./images/pay17.jpg" alt=""></li>
          <li><img src="./images/pay18.jpg" alt=""></li>
          <li><img src="./images/pay19.jpg" alt=""></li>
          <li><img src="./images/pay20.jpg" alt=""></li>
          <li><img src="./images/pay21.jpg" alt=""></li>
          <li><img src="./images/pay22.jpg" alt=""></li>
        </ul>
        </div>
        <div class="last3">
          <div class="submit">
            <a @click="open">立即支付</a>
          </div>
          <h5 class="zfb3">其他支付方式</h5>
          <div class="weixin">
            <a href="#">微信支付</a>中国银联
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'payZhifu',
  data() {
    return {
      payInfo: {},
      timer: null,
      //支付状态码
      code: ''
    }
  },
  computed: {
    orderId() {
      return this.$route.query.orderId
    }
  },
  mounted() {
    //不要再生命周期函数前面加async
    this.getPayInfo()
  },
  methods: {
    // 获取支付信息
    async getPayInfo() {
      let result = await this.$API.reqPayInfo(this.orderId)
      // console.log(result);
      if(result.code == 200) {
        this.payInfo = result.data
      }
    },
    // 遮挡层
    async open() {
      //生成二维码
        let url = await QRCode.toDataURL('this.payInfo.codeUrl')
        
        this.$alert(`<img src="${url}" />`, '请您微信支付', {
          dangerouslyUseHTMLString: true,
          center: true,
          showCancelButton: true,
          cancelButtonText: '支付遇见问题',
          confirmButtonText: '已支付成功',
          showClose: false,
          beforeClose: (type,instance,done) => {
            if(type=='cancel') {
              alert('请联系管理员')
              clearInterval(this.timer)
              this.timer = null
              done()
            } else {
              // if(this.code == 200) {
                clearInterval(this.timer)
                this.timer = null
                done()
                this.$router.push('/paysuccess')
              // }
            }
          }
        });
        if(!this.timer) {
          this.timer = setInterval(async ()=> {
            //发请求获取支付的状态
            let result = await this.$API.reqPayStatus(this.orderId)
            console.log(result);
            if(result.code == 200) {
              //清除定时器
              clearInterval(this.timer)
              this.timer = null
              this.code = result.code
              //关闭弹窗
              this.$msgbox.close()

              this.$router.push('/paysuccess')
            }
          },1000)
        }
      },
  }

}
</script>

<style lang='less' scoped>
/* 第一部分 */
.first {
  margin-top: 20px;
}
.success {
  height: 30px;
}

.success .success-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: black;
  background: url('./images/icon.png') no-repeat 0 0;
}
.success .success-info {
  display: inline-block;
  font-size: 14px;
  vertical-align: top;
  line-height: 30px;
}
.paymark {
  height: 27px;
  margin-top: 10px;
}
.paymark .paymark1 {
  float: left;
  line-height: 30px;
  padding-left: 30px;
}
.paymark .money ul {
  float: right;
  line-height: 30px;
}
.paymark .money ul .z {
  float: left;
  font-size: 15px;
}
.paymark .money ul .x{
  float: right;
  font-size: 18px;
  color: #e1251b;
}
/* 第二部分 */
.second {
  margin-top: 20px;
  margin-bottom: 10px;
  padding-left: 25px;
  border: 2px solid red;
}
.second .second1 {
  font-size: 14px;
  color: #e1251b;
  margin: 10px 0;
}
.second .second2 {
  font-size: 14px;
}
.second .second2 li {
  margin-bottom: 5px;
}
.second .second2 li em {
  color: red;
  font-weight: 700;
}
.last {
  margin-bottom: 20px;
  border: 1px solid black;
}
.last .last-footer {
  padding: 25px;
}
.last .last-footer .zfb1 {
  padding-top: 10px;
}
.last .last-footer ul {
  /* float: left; */
  margin-top: 20px;
  padding-left: 25px;
  padding-bottom: 56px;
  border-bottom: 1px dashed gray;
}
.last .last-footer ul li {
  float: left;
  margin-right: 10px;
  height: 46px;
  width: 166px;
  line-height: 46px;
  text-align: center;
  border: 1px solid gray;
}
.last .last-footer .last2 {
  margin-top: 20px;
}
.last .last-footer .last2 ul {
  padding-bottom: 170px;
}
.last .last-footer .last2 ul li {
  margin-bottom: 10px;
}
.last .last-footer .last3 {
  margin: 10px;
  text-align: center;
  cursor: pointer;
}
.last .last-footer .last3 .submit {
  display: inline-block;
  width: 162px;
  height: 54px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 54px;
  background-color: #e1251b;
}
.last .last-footer .last3 .submit a {
  color: #fff;
}
.last .last-footer .last3 .zfb3 {
  text-align: left;
  margin-top: 20px;
}
.last .last-footer .last3 .weixin {
  text-align: left;
  margin-top: 20px;
  margin-left: 30px;
}
.last .last-footer .last3 .weixin a:hover {
  color: skyblue;
}
</style>