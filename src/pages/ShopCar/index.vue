<template>
   <div class="w">
   <div class="cart">
      <h4>全部商品</h4>
      <div class="cart-th">
        <!-- 标题 -->
        <ul>
          <li class="cart-th1">全部</li>
          <li class="cart-th2">商品</li>
          <li class="cart-th3">单价（元）</li>
          <li class="cart-th4">数量</li>
          <li class="cart-th5">小计（元）</li>
          <li class="cart-th6">操作</li>
        </ul>
      </div>
      <div class="cart-main">
        <ul class="cart-main1 clearfix" v-for="cart in cartInfoList" :key="cart.id">
          <li class="cart-list1">
            <input type="checkbox" name="" id="" :checked="cart.isChecked == 1" @change="updateChecked(cart,$event)">
          </li>
          <li class="cart-list2">
            <img :src="cart.imgUrl" alt="">
            <p>cart.skuName</p>
          </li>
          <li class="cart-list4">
            <em>{{cart.skuPrice}}</em>
          </li>
          <li class="cart-list5">
            <button @click="handler(-1,cart,'reduce')">-</button>
            <input type="text" :value="cart.skuNum" @change="handler($event.target.value,cart,'change')">
            <button @click="handler(1,cart,'add')">+</button>
          </li>
          <li class="cart-list6">
            <em>{{cart.skuNum*cart.skuPrice}}</em>
          </li>
          <li class="cart-list7">
            <div><a @click="deleteCartById(cart)">删除</a></div>
            <div><a href="#">移到收藏</a></div>
          </li>
        </ul>
      </div>
      <!-- 全选 -->
      <div class="cart-tool">
        <div class="tool">
          <div class="select-all">
            <em><input type="checkbox" :checked="isAllChecked" @change="updateAllCartChecked1">全选</em>
            <ul>
              <li><a @click="deleteAllCheckedStatu">删除选中的商品</a></li>
              <li><a href="#">移到我的关注</a></li>
              <li><a href="#">清除下柜商品</a></li>
            </ul>
          </div>
          <div class="submit">
            <div class="submit1">
              <span>已选择<input type="text" value="0">件商品</span> 
              <span>总价（不含运费）：<input type="text" :value="this.totalPrice"></span>
            </div>
            <div class="submit2">
              <router-link to="/trade"><input type="submit" value="结算"></router-link>
            </div>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'ShopCart',
    mounted() {
      // this.$store.dispatch('getCartList')
      //这里可以写但是为了防止发送多余的请求
      this.getDate()
    },
    methods: {
      getDate() {
        this.$store.dispatch('getCartList')
      },
      async handler(disnum,cart,type) {
        switch(type) {
          case 'reduce':
            disnum = cart.skuNum>1? -1:0
            break;
          case 'add':
            disnum = 1;
            break;
          case 'change':
            if(isNaN(disnum) || disnum<1) {
              disnum = 0
            } else {
              disnum = parseInt(disnum) - cart.skuNum
            }
              break;
        }
        try {
          await this.$store.dispatch('addOrUpdateShopCart',{skuId:cart.skuId,skuNum:disnum})
          this.getDate()
        } catch (error) {
          return
        }
      },
      // 删除某一个产品
      async deleteCartById (cart) {
        try {
          await this.$store.dispatch('deleteCartById',cart.skuId)
          this.getDate()
        } catch (error) {
          alert(error.message)
        }
      },
      // 修改某一个产品 的状态
      async updateChecked(cart,event) {
          try {
            let isChecked = event.target.checked ? 1 : 0;
            // k v 一致省略v
            await this.$store.dispatch('statusCartById',{skuId:cart.skuId,isChecked})
            this.getDate()
          } catch (error) {
            return Promise.reject(new Error('faile'))
          }
      },
      // 删除全部选中的商品
      async deleteAllCheckedStatu () {
        try {
          await this.$store.dispatch('deleteAllCheckedStatus')
          this.getDate()
        } catch (error) {
          alert(error.message)
        }
      },
      //全选
      async updateAllCartChecked1(event) {
        try {
          const checked = event.target.checked ? '1' : '0'
        await this.$store.dispatch('updateAllCartChecked2',checked)
        this.getDate()
        } catch (error) {
          alert(error.message)
        }
      }
    },
    computed: {
      ...mapGetters(['cartList']),
      cartInfoList() {
        return this.cartList.cartInfoList || []
      },
      totalPrice() {
        let sum = 0;
        this.cartInfoList.forEach(item => {
          sum+= item.skuNum * item.skuPrice
        });
        return sum;
    },
      isAllChecked () {
      return this.cartInfoList.every(item => item.isChecked == 1) 
    }

  }

}
</script>

<style lang="less" scoped>
   .cart h4 {
   font-size: 14px;
   margin: 10px 0;
 }
 .cart .cart-th {
   height: 40px;
   background-color: #f5f5f5;
   border: 1px solid #ddd;
 }
 .cart .cart-th ul {
   padding: 10px;
 }
 .cart .cart-th ul li {
   float: left;
   line-height: 20px;
 }
 .cart-th ul .cart-th1
 ,.cart-th2 {
   width: 294.5px;
 }
 .cart-th ul .cart-th3
 ,.cart-th4
 ,.cart-th5
 ,.cart-th6 {
   width: 147.25px;
 }
 /* ----------------------- */
.cart-main {
  margin-top: 10px;
  border: 1px solid #ddd;
  border-bottom: 0;
}
.cart-main ul {
  height: 103px;
  padding: 10px;
}
.cart-main ul li {
  float: left;
}
.cart-main ul .cart-list1 {
  width: 15%;
}
.cart-main ul .cart-list2 {
  height: 82px;
  width: 35%;
  margin-left: 20px;
}
.cart-main ul .cart-list2 img {
  width: 82px;
  height: 82px;
}
.cart-main ul .cart-list2 p {
  display: inline-block;
  margin: 0 10px;
  width: 150px;
}
.cart-main ul .cart-list4 {
  width: 100px;
}
.cart-main ul .cart-list5 {
  width: 180px;
}
.cart-main ul .cart-list5 input {
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #000;
  line-height: 40px;
  text-align: center;
  font-weight: 700;
}
.cart-main ul .cart-list5 button {
  height: 40px;
  width: 20px;
  line-height: 40px;
}
.cart-main ul .cart-list6 {
  width: 147px;
  font-size: 16px;
}
.cart-main1 {
  border-bottom: 1px solid #ddd;
}
/* ------------------------------------ */
.cart-tool {
  position: relative;
  margin-top: 10px;
  height: 50px;
  border: 1px solid #ddd;
}
.cart-tool .tool {
padding: 10px;
}
.cart-tool .select-all {
  float: left;
  height: 30px;
  line-height: 30px;
}
.cart-tool .select-all em {
  float: left;
  margin-right: 20px;
}
.cart-tool .select-all ul {
  width: 400px;
}
.cart-tool .select-all ul li {
  float: left;
  margin-right: 10px;
}
.cart-tool .submit {
  float: right;
}
.cart-tool .submit input {
  // width: 0;
  // height: 0;
  border: 1px solid blue;
}
.cart-tool .submit .submit1 {
  display: inline-block;
  margin-right: 116px;
}
.cart-tool .submit .submit1 span input {
  
  text-align: center;
  line-height: 16px;
}
.cart-tool .submit .submit2 {
  text-align: right;
}
.cart-tool .submit .submit2 input {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 40px;
  width: 96px;
  height: 50px;
  background-color: red;
}
.cart-tool .submit .submit2 input:hover {
  cursor: pointer;
}
</style>