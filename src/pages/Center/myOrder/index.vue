<template>
  <div class="center-right">
        <div class="title">
          <h3>我的订单</h3>
        </div>
        <div class="chosetype">
          <table>
            <thead>
              <tr>
                <th class="t1">商品</th>
                <th class="t2">订单详情</th>
                <th class="t3">收货人</th>
                <th class="t4">金额</th>
                <th class="t5">状态</th>
                <th class="t6">操作</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="orders">
          <table v-for="order in myorder.records" :key="order.id">
            <thead>
              <tr>
                <th colspan="5">
                  <em>
                    {{ order.createTime }}&nbsp;订单编号：{{order.outTradeNo}}
                  </em>
                  <span class="delete"><img src="../images/delete.png" alt=""></span>
                 
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart,index) in order.orderDetailList" :key="cart.id">
                <td style="width: 50%;" class="d1">
                  <img :src="cart.imgUrl" alt="">
                  <a href="javascript:'';">{{cart.skuName}}</a>
                  <span>x{{cart.skuNum}}</span>
                  <em>售后申请</em>
                </td>
                <td class="d2" style="width: 8%;" :rowspan="order.orderDetailList.length" v-if="index==0">
                  <span>{{order.consignee}}</span>
                </td>
                <td class="d3" style="width: 13%;" :rowspan="order.orderDetailList.length" v-if="index==0">
                  <ul>
                    <li>总金额￥{{order.totalAmount}}</li>
                    <li>在线支付</li>
                  </ul>
                </td>
                <td class="d4" :rowspan="order.orderDetailList.length" v-if="index==0">
                  <span>{{order.orderStatusName}}</span>
                </td>
                <td class="d5" :rowspan="order.orderDetailList.length" v-if="index==0">
                  <em>评价|晒单</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="love">
          <div class="love-title">
            <h3>猜你喜欢</h3>
            <ul class="like clearfix">
              <li class="likeItem">
                <img src="../images/itemlike01.png" alt="">
                <div class="attr">
                  <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                </div>
                <div class="price clearfix">
                  <em>￥</em>
                  <i>3699.00</i>
                </div>
                <div class="comment">
                  <p class="com">已有6人评价</p>
                </div>
              </li>
              <li class="likeItem">
                <img src="../images/itemlike02.png" alt="">
                <div class="attr">
                  <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                </div>
                <div class="price clearfix">
                  <em>￥</em>
                  <i>3699.00</i>
                </div>
                <div class="comment">
                  <p class="com">已有6人评价</p>
                </div>
              </li>
              <li class="likeItem">
                <img src="../images/itemlike03.png" alt="">
                <div class="attr">
                  <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                </div>
                <div class="price clearfix">
                  <em>￥</em>
                  <i>3699.00</i>
                </div>
                <div class="comment">
                  <p class="com">已有6人评价</p>
                </div>
              </li>
              <li class="likeItem">
                <img src="../images/itemlike04.png" alt="">
                <div class="attr">
                  <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                </div>
                <div class="price clearfix">
                  <em>￥</em>
                  <i>3699.00</i>
                </div>
                <div class="comment">
                  <p class="com">已有6人评价</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="footers">
          <PaginationName :pageNo='page' :pageSize='limit' :total='myorder.total' :continues='5' @getPageNo="getPageNo"></PaginationName>
  
        </div>
      </div>
</template>

<script>
export default {
name: 'myOrder',
data() {
  return {
    page: 1,//第几页
    limit: 3,//每一页数据个数
    myorder: {}
  }
},
mounted() {
  //获取我的订单里的数据方法
  this.getDate()
},
methods: {
  //获取我的订单里的数据方法
  async getDate() {
    const{page,limit} = this
    let result = await this.$API.reqMyOrderList(page,limit)
    if(result.code == 200) {
      this.myorder = result.data
    }
  },
  getPageNo(page) {
    this.page = page
    this.getDate()
  }
}

}
</script>

<style lang='less' scoped>
.center-right {
      float: right;
      width: 83.33%;
      // background-color: pink;
      .title {
        border: 1px solid #ddd;
        margin-bottom: 20px;
        h3 {
          padding: 12px 10px;
          color: #666;
          font-size: 15px;
          background-color: #f1f1f1;
        }
      }
      .chosetype {
        border: 1px solid #ddd;
        color: #666;
        margin-bottom: 10px;
        background-color: #f1f1f1;
        table {
          width: 100%;
          .t1 {
            width: 29%;
          }
          
          .t2 {
            width: 31%;
          }
          
          .t3 {
            width: 13%;
          }
        }
      }
      .orders {
       table {
         width: 100%;
         border-radius: 2px;
         border-collapse: collapse;
         border: 1px solid #ddd;
          thead {
            tr {
              width: 100%;
          
              th {
                border: 1px solid #ddd;
                padding: 6px 8px;
                em {
                  float: left;
                  color: #666;
                  font-size: 12px;
          
                }
                .delete {
                  float: right;
                }
              }
            }
          }
          tbody {
            tr {
              padding: 5px;
              td {
                border: 1px solid #ddd;
                padding: 10px;
                text-align: center;
              }
              .d1 {
                padding: 10px;
                img {
                  width: 82px;
                }
                a {
                  display: inline-block;
                  width: 250px;
                }
                span {
                  padding: 0 10px;
                  text-align: center;
                  display: inline-block;
                }
                em {
                  float: right;
                  line-height: 83px;
                  padding: 0 10px;
                  text-align: center;
                }
              }
               
            }
          }
       }
      }
      .love {
        margin-top: 20px;
        padding: 20px;
        
        .love-title {
          border: 1px solid #ddd;
          h3 {
            padding: 12px;
            border-bottom: 1px solid #ddd;
          }
          .like {
            width: 100%;
            margin-top: 10px;
            padding: 15px 11px;
            .likeItem {
              width: 25%;
              float: left;
              text-align: center;
              img {
                width: 167px;
                height: 123px;
              }
              .attr {
                text-align: left;
                padding: 0 15px;
                color: #333;
              }
              .price {
                text-align: left;
                padding: 0 15px;
                font-size: 16px;
                color: #c81623;
                em,i {
                  float: left;
                }
              }
              .comment {
               
                margin-top: 20px;
                margin-bottom: 20px;
                padding: 0 15px;
              
                .com {
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
.footers {
  text-align: center;
  margin-top: 30px;
  height: 38px;
  margin-bottom: 40px;
}
.footer{
  display: inline-block;
  /* margin-top: 30px; */
  height: 38px;
  /* text-align: center; */
  background-color: #fff;
}
.footer .pagination {
  display: inline-block;
  /* width: 490px; */
}
.footer .pagination button {
  float: left;
  height: 38px;
  /* margin: 0 10px; */
  margin-left: 20px;
  line-height: 38px;
  background-color: #fafafa;
  border: 1px solid #999;
}
.footer .pagination .actived {
  background-color: rgba(107, 34, 163, 0.3);
}

.footer .pagination .dotted {
  border: 0;
}
.footer .pagination .active {
  border: 0;
}
.footer .pagination .active:hover {
  text-decoration: underline;
  cursor: default;
}
.footer .pagination button {
  font-size: 14px;
  padding: 0 10px;
}
.footer div {
  display: inline-block;
  margin-left: 20px;
  font-size: 14px;
  text-align: left;
  height: 38px;
}
.footer div button {
  float: right;
  height: 38px;
  line-height: 38px;
}
</style>