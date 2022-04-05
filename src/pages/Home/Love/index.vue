<template>
  <!-- 喜欢模块 start -->
    <div class="love w">
        <div class="love_hd">
            <h4>猜你喜欢</h4>
            <p><a href="#">换一批</a></p>
            <i></i>
        </div>
        <div class="love_bd">
            <ul>
                <li>
                    <div class="uplove">
                        <img src="./upload/love_01.png" alt="">
                    </div>
                    <div class="downlove">
                        <p>阳光美包新款单肩包女
                            包时尚子母包四件套女</p>
                        <h4><i>¥</i>116.00</h4>
                    </div>
                </li>
                <li>
                    <div class="uplove">
                        <img src="./upload/love_02.png" alt="">
                    </div>
                    <div class="downlove">
                        <p>爱仕达30CM炒锅不粘
                            锅NWG8330E电磁炉</p>
                        <h4><i>¥</i>99.00</h4>
                    </div>
                </li>
                <li>
                    <div class="uplove">
                        <img src="./upload/love_03.png" alt="">
                    </div>
                    <div class="downlove">
                        <p>捷波朗 
                            （jabra）BOOSI劲步</p>
                        <h4><i>¥</i>245.00</h4>
                    </div>
                </li>
                <li>
                    <div class="uplove">
                        <img src="./upload/love_04.png" alt="">
                    </div>
                    <div class="downlove">
                        <p>欧普 
                            JYLZ08面板灯平板灯铝</p>
                        <h4><i>¥</i>238.00</h4>
                    </div>
                </li>
                <li>
                    <div class="uplove">
                        <img src="./upload/love_05.png" alt="">
                    </div>
                    <div class="downlove">
                        <p>三星
                            （G5500）移动联</p>
                        <h4><i>¥</i>649.00</h4>
                    </div>
                </li>
                <li>
                    <div class="uplove">
                        <img src="./upload/love_06.png" alt="">
                    </div>
                    <div class="downlove">
                        <p>韩国所望
                            紧致湿润精华露400ml</p>
                        <h4><i>¥</i>649.00</h4>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- 喜欢模块 end -->
</template>

<script>
export default {
  name:'Love-1'

}
</script>

<style lang='less' scoped>
/* 喜欢模块 */
.love {
    height: 290px;
}
.love_hd {
    position: relative;
    height: 60px;
    /* background-color: pink; */
}
.love_hd h4 {
    float: left;
    padding-top: 30px;
    font-size: 18px;
    color: #333333;
    font-weight: 400;
    
}
.love_hd p a {
    float: right;
    padding-top: 34px;
    padding-right: 44px;
    font-size: 12px;
    color: #666666;
}
.love_hd i {
    position: absolute;
    top: 34px;
    right: 22px;
    /* display: inline-block; */
    width: 15px;
    height: 15px;
    background: url('./images/icons.png') no-repeat -420px -110px;
}
.love_bd {
    height: 230px;
    width: 1200px;
    border: 1px solid  #ededed;
}
.love_bd ul li {
    float: left;
    width: 200px;
    height: 230px;
}
.love_bd ul li:last-child {
    width: 198px;
}
.love_bd ul li .uplove {
    height: 158px;
    text-align: center;
    line-height: 158px;
}
.love_bd ul li .downlove {
    height: 64px;
    padding: 0 45px 14px 34px;
    border-right: 1px solid #ededed;
}
.love_bd ul li .downlove p {
    font-size: 12px;
    color: #666666;
}
.love_bd ul li .downlove h4 {
    font-size: 18px;
    color: #df3033;
}
.love_bd ul li .downlove h4 i {
    font-size: 14px;
}

</style>