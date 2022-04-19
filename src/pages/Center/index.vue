<template>
 <div class="w center">
    <div class="center-container clearfix">
      <!-- 左侧结构 -->
      <div class="center-left">
       <dl>
          <dt>
            <em>·</em>
            订单中心
          </dt> 
          <dd><router-link to="/center/myorder">我的订单</router-link></dd>
          <dd><router-link to="/center/grouporder">团购订单</router-link></dd>
          <dd>本地生活订单</dd>
          <dd>我的预售</dd>
          <dd>评价晒单</dd>
          <dd>取消订单记录</dd>
        </dl>
        <dl>
          <dt>
            <em>·</em>
            关注中心
          </dt> 
          <dd>关注的商品</dd>
          <dd>关注的店铺</dd>
          <dd>关注的专辑</dd>
          <dd>关注的品牌</dd>
          <dd>关注的活动</dd>
          <dd>浏览历史</dd>
        </dl>
        <dl>
          <dt>
            <em>·</em>
            特色业务
          </dt> 
          <dd>我的营业厅</dd>
          <dd>京东通信</dd>
          <dd>定期送</dd>
          <dd>京东代下单</dd>
          <dd>我的回收单</dd>
          <dd>节能补贴</dd>
          <dd>医药服务</dd>
          <dd>流量加油站</dd>
          <dd>黄金托管</dd>
        </dl>
        <dl>
          <dt>
            <em>·</em>
             客户服务
          </dt> 
          <dd>返修退换货</dd>
          <dd>价格保护</dd>
          <dd>意见建议</dd>
          <dd>购买咨询</dd>
          <dd>交易纠纷</dd>
          <dd>我的发票</dd>
        </dl>
        <dl>
          <dt>
            <em>·</em>
             设置
          </dt> 
          <dd>个人信息</dd>
          <dd>收货地址</dd>
        </dl>
      </div>
      <!-- 右侧结构 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Center-1',
    
  }
</script>

<style lang="less" scoped>
.center {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  .center-container {
    .center-left {
      float: left;
      width: 16.67%;
      dl {
        // display: inline-block;
        width: 197px;
        dt {
          padding: 5px;
          font-weight: 700;
        }
        dd {
          padding: 5px;
          text-align: center;
          border-bottom: 1px solid #ededed;
        }
      }
    }
    
  }
}
</style>