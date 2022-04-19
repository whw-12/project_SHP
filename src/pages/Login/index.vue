<template>
  <div class="login">
    <div class="header">
      <div class="login-content w">
        <div class="login-form">
          <div class="loginform">
          <div class="logins">
            <a class="left">扫描登录</a>
            <a class="right">账户登录</a>
          </div>
          <form action="">
          <ul class="loginuser">
          <li>
            <span>账号</span>
            <input type="text" placeholder="邮箱/用户名/手机号" v-model="phone">
          </li>
          <li>
            <span>密码</span>
            <input type="password" placeholder="请输入密码" v-model="password">
          </li>
          </ul>
          <div class="auto">
          <em class="auto1"><input type="checkbox" checked="checked">自动登录</em>
          <em class="auto2">忘记密码？</em>
          </div>
          <div class="btn">
            <button @click.prevent="userlogin">登&nbsp;&nbsp;录</button>
          </div>
          </form>
          <div class="floor clearfix">
            <ul>
              <li><img src="./images/qq.png" alt=""></li>
              <li><img src="./images/sina.png" alt=""></li>
              <li><img src="./images/ali.png" alt=""></li>
              <li><img src="./images/weixin.png" alt=""></li>
            </ul>
            <router-link to="/register"><p>立即注册</p></router-link>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul class="footer-header">
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <a href="">地址：北京市昌平区宏福科技园综合楼6层 <br>
京ICP备19006430号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login-1',
  data() {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    //登录成功的回调
      async userlogin() {
        try {
          const {phone,password} = this;
          (phone&&password)&&await this.$store.dispatch('userLogin',{phone,password});
          //登录的路由组件
          const toPath = this.$route.query.redirect || '/home';
          this.$router.push(toPath)
          
        }
        catch (error) {
          alert(error.message)
        }
    }
  }

}
</script>

<style lang='less' scoped>
  /* 第一部分 */
.header {
  height: 487px;
  background: url('./images/loginbg.png') no-repeat;
  background-size: 100% 487px;
}
.login-content {
  position: relative;
  height: 487px;
  padding-top: 30px;
}
.login-content .login-form {
  position: absolute;
  right: 0;
  padding: 20px;
  width: 420px;
  height: 406px;
  background-color: #fff;
}
.login-content .login-form .loginform{
  border: 1px solid gray;
}
.login-content .login-form .logins {
  border-bottom: 1px solid gray;
}
.login-content .login-form .logins a {
  display: inline-block;
  width: 185px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.login-content .login-form .logins .left {
  border-right: 1px solid gray;
  /* border-collapse: collapse; */
}
/* 第二部分*/
.login-content .loginuser li {
  height: 32px;
  line-height: 32px;
  padding-left: 20px;
}
.login-content .loginuser li span
,input {
  float: left;
  height: 32px;
  border: 1px solid gray;
  border-collapse: collapse;
  margin-top: 0;
}
.login-content .loginuser li input {
  width: 302px;
  padding-left: 10px;
}
.login-content .loginuser li span {
  width: 37px;
  background-color: rgb(36, 0, 128);
}
/* 第三部分 */
.login-content .auto {
  padding-left: 20px;
  height: 32px;
  line-height: 32px;
}
.login-content .auto .auto1 {
  float: left;
}
/* .login-content .auto .auto1 input {
  float: left;
} */
.login-content .auto .auto2 {
  float: right;
}
/* 第四部分 */
.login-content .btn {
  text-align: center;
  margin: 30px auto;
  width: 342px;
  height: 36px;
}
.login-content .btn button {
  height: 36px;
  width: 100%;
  font-size: 18px;
  color: #fff;
  background-color: red;
}
/* 第五部分 */
.login-content .floor {
  margin-bottom: 40px;
}
.login-content .floor ul {
  float: left;
  height: 35px;
  margin-left: 10px;
}
.login-content .floor ul li {
  float: left;
}
.login-content .floor p {
  float: right;
  padding-right: 10px;
  font-size: 15px;
  line-height: 35px;
  vertical-align: top;
}
.login-content .floor p:hover {
  color: skyblue;
  text-decoration: underline;
}
.footer {
  text-align: center;
}
.footer .footer-header li {
  display: inline-block;
  margin: 20px auto;
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  border-right: 1px solid gray;
}
</style>