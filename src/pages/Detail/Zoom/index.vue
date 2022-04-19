<template>
  <div class="spec-preview" @mouseenter="ZoomShow" @mouseleave.stop="LeaveShow" @mousemove="handler" ref="box">
    <img :src="imgObj.imgUrl"  />
    <div class="big" v-show="show" ref="big">
      <img :src="imgObj.imgUrl" ref="bigimg" />
    </div>
    <div class="mask" v-show="show" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "ZoomD",
    data() {
      return {
        show: false,
        index: 0
      }
    },
    props: ['skuImageList'],
    computed: {
      imgObj() {
        return this.skuImageList[this.index] || []
      }
    },
    methods: {
      ZoomShow() {
        this.show = true
      },
      LeaveShow() {
        this.show = false
      },
      handler(e) {
        let mask = this.$refs.mask
        let box = this.$refs.box
        // 大图
        let bigimg = this.$refs.bigimg
        let big = this.$refs.big

        let x = e.pageX - box.offsetLeft
        let y = e.pageY - box.offsetTop
        // if(x - mask.offsetWidth/2 > box.offsetWidth/2) mask.style.left = mask.offsetWidth
        mask.style.top = (y - mask.offsetHeight/2) + 'px'            
        mask.style.left = (x - mask.offsetWidth/2) + 'px'
        if(x - mask.offsetWidth/2 < 0) mask.style.left = 0
        if(x - mask.offsetWidth/2 > mask.offsetWidth) mask.style.left = mask.offsetWidth + 'px'
        if(y - mask.offsetHeight/2 < 0) mask.style.top = 0
        if(y - mask.offsetHeight/2 > mask.offsetHeight) mask.style.top = mask.offsetHeight + 'px'
        // 大图移动
        let bigmax = bigimg.offsetWidth - big.offsetWidth
        let bigx = bigmax * (x - mask.offsetWidth/2) / mask.offsetWidth 
        let bigy = bigmax / mask.offsetHeight * (y - mask.offsetHeight/2)
        bigimg.style.left = -bigx + 'px'
        bigimg.style.top = -bigy + 'px'
      }
    },
    mounted() {
      this.$bus.$on('getIndex',(index)=>{
        this.index = index
      })
    }
  }
</script>

<style lang="less">
   .spec-preview {
      position: relative;
      width: 400px;
      height: 400px;
      border: 1px solid #ddd;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 50%;
      background-color: rgba(0,255,0,.3);
      cursor: move;
    }
    .big {
      position: absolute;
      width: 400px;
      height: 400px;
      left: 410px;
      top: 0;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #aaa;
      z-index: 9999;
    }
    .big img {
      position: absolute;
      width: 200%;
      height: 200%;
    }
</style>