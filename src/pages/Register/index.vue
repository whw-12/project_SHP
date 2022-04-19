<template>
  <div class="w">
        <header>
            <div class="logo">
                <router-link to="/home"><img src="./images/logo.png" alt=""></router-link>
            </div>
        </header>
        <div class="registerarea">
            <h3>
                注册新用户
                <div class="login">我有账号，去<router-link to="/login"><p>登录</p></router-link></div>
            </h3>
            <div class="reg_form">
                <form action="">
                    <ul>
                        <li>
                            <label for="">手机号：</label>
                            <input class="inp" placeholder="请输入你的手机号" v-model="phone" name="phone" v-validate="{ required: true, regex: /^1\d{10}$/ }" :class="{ invalid: errors.has('phone') }"/>
                            <span class="error-msg error">{{ errors.first("phone") }}</span>
                        </li>
                        <li>
                            <label for="">短信验证码：</label>
                            <input class="inp" placeholder="请输入你的验证码" v-model="code" name="code" v-validate="{ required: true, regex: /^\d{6}$/ }" :class="{ invalid: errors.has('code') }"/>
                            <span class="success">
                                <button style="height:37px" @click.prevent="getCode">请输入验证码</button>
                                <span class="error-msg error">{{ errors.first("code") }}</span>
                            </span>
                        </li>
                        <li>
                            <label for="">登录密码：</label>
                            <input class="inp" placeholder="请输入你的密码" v-model="password" name="password" v-validate="{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }" :class="{ invalid: errors.has('password') }"/>
                            <span class="error-msg error">{{ errors.first("password") }}</span>
                            
                        </li>
                        <li class="safe">安全程度 <em class="ruo">弱</em><em class="zhong">中</em><em class="qiang">强</em></li>
                        <li>
                            <label for="">确认密码：</label>
                            <input class="inp" placeholder="请输入确认密码" v-model="password1" name="password1" v-validate="{ required: true, is:password }" :class="{ invalid: errors.has('password1') }"/>
                            <span class="error-msg error">{{ errors.first("password1") }}</span>
                            
                        </li>
                        <li class="agree">
                            <input type="checkbox" v-model="agree" name="agree" v-validate="{ required: true, 'tongyi': true }" :class="{ invalid: errors.has('agree') }"/>
                            
                            同意协议并注册
                            <a href="#">《知果果用户协议》</a>
                            <span class="error-msg error">{{ errors.first("agree") }}</span>
                        </li>
                        <li><input type="submit" value="完成注册" class="btn" @click.prevent="userRegister"></li>
                    </ul>
                </form>
            </div>
        </div>
        <footer>
                <div class="w">
                    <div class="mod_copyright">
                        <div class="links">
                            <a href="#">关于我们</a> | <a href="#">联系我们</a> | <a href="#">联系客服</a> | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 |
                            销售联盟 | 品优购社区 | 品优购公益 | English Site | Contact U
                        </div>
                        <div class="copyright">
                            地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
                            京ICP备08001421号京公网安备110108007702
        
                        </div>
        
                    </div>
                </div>
        </footer>
    </div>
</template>

<script>

export default {
  name: 'Register-1',
  data() {
      return {
          //收集手机号
          phone: '',
        //   验证码
          code: '',
        //   密码
          password: '',
        //   确认密码
          password1: '',
          //是否同意
          agree:true
      }
  },
  methods: {
      async getCode() {
          try {
              const {phone} = this
              phone && (await this.$store.dispatch("getCode",phone))
              this.code = this.$store.state.user.code
          } catch(error) {
              return 'faile'
          }
      },
      async userRegister() {
          const success = await this.$validator.validateAll();
          //全部表单验证成功，在向服务器发请求，进行祖册
          //只要有一个表单没有成功，不会发请求
         if(success) {
              try {
              const {phone,code,password} = this;
              await this.$store.dispatch('userRegister',{phone,code,password});
              this.$router.push('/login')
            } catch (error) {
              alert(1)
          }
      }
         }
  }
}
</script>

<style lang='less' scoped>
header {
    height: 84px;
    border-bottom: 2px solid #c81523;
}
.logo {
    width: 171px;
    height: 61px;
    padding-top: 18px;
}
.registerarea {
    height: 522px;
    border: 1px solid #ccc;
    margin-top: 20px;
}
.registerarea h3 {
    height: 42px;
    border-bottom: 1px solid #ccc;
    background-color: #ececec;
    line-height: 42px;
    font-size: 18px;
    font-weight: 400;
    padding: 0 10px;
}
.login {
    float: right;
    font-size: 14px;
}
.login p {
    float: right;
    color: #c81523;
}
.reg_form {
    width: 600px;
    margin: 50px auto 0;
}
.reg_form ul li label {
    display: inline-block;
    width: 88px;
    text-align: right;
}
.reg_form ul li .inp {
    width: 242px;
    height: 37px;
    border: 1px solid #ccc;
}
.reg_form ul li {
    margin-bottom: 20px;
}
.error {
    color: #df3033;
}
.error_icon,
.success_icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: url(./images/error.png) no-repeat;
    margin-top: -2px;
}
.success_icon {
    background: url(./images/success.png) no-repeat;
}
.success {
    color: green;
}
.safe {
    padding-left: 170px;
}
.safe em {
    padding: 0 12px;
    color: #fff;
}
.ruo {
    background-color: #de1111;
}
.zhong {
    background-color: #40b83f;
}
.qiang {
    background-color: #f79100;
}
.agree {
    padding-left: 95px;
}
.agree input {
    vertical-align: middle;
}
.agree a {
    color: #1ba1e6;
}
.btn {
    width: 200px;
    height: 34px;
    font-size: 14px;
    color: #fff;
    margin: 30px 0 0 70px;
    background-color: #c81623;
}
.mod_copyright {
    text-align: center;
    padding-top: 20px;
}
.links {
    margin-bottom: 15px;
}
.links a {
    margin: 0 3px;
}
.copyright {
    line-height: 20px;
}
</style>