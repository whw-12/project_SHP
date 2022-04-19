<template>
  <div class="footers">
      <div class="footer">
       <div class="pagination">
        <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">«上一页</button>
        <button v-if="startNumAndEndNum.start>1" @click="$emit('getPageNo',1)" :class="{actived:pageNo==1}">1</button>
        <button class="dotted" v-if="startNumAndEndNum.start>2">...</button>
        <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-show="page>=startNumAndEndNum.start" @click="$emit('getPageNo',page)" :class="{actived:pageNo==page}">{{page}}</button>
        <button class="dotted" v-if="startNumAndEndNum.end < this.totalPages-1"><span>...</span></button>
        <button v-if="startNumAndEndNum.end < totalPages" @click="$emit('getPageNo',totalPages)" :class="{actived:pageNo==totalPages}">{{totalPages}}</button>
        <button :disabled="pageNo==totalPages" @click="$emit('getPageNo',pageNo+1)">下一页»</button>
      </div>
      <div>
        <button>共{{total}}页</button>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'Pagination-1',
  props: ['pageNo','pageSize','total','continues'],
  computed: {
    totalPages() {
      return Math.ceil(this.total/this.pageSize)
    },
    startNumAndEndNum() {
      const {continues,pageNo,totalPages} = this;
      let start = 0;
      let end = 0;
      if(continues > totalPages) {
        start = 1;
        end = totalPages;
      }else {
        start = pageNo - parseInt(continues/2);
        end = pageNo + parseInt(continues/2);
        if(start <1 ) {
          start = 1
          end = continues
        }
        // 结束页不正常的情况
        if(end > totalPages) {
          start = totalPages - continues + 1
          end = totalPages
        }
      }
      return {start,end}
    }
  }

}
</script>

<style lang='less' scoped>
  /* footer */
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