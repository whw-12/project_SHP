<template>
  <div>
     <!-- 推荐模块 start-->
    <div class="recom w">
        <div class="recom_hd">
            <i><img src="./images/recom.png" alt=""></i>
            <!-- <img src="images/recom.png" alt=""> -->
        </div>
        <div class="recom_bd">
            <ul>
                <li>
                    <img src="./upload/recom_01.jpg" alt="">
                </li>
                <li><img src="./upload/recom_02.jpg" alt=""></li>
                <li><img src="./upload/recom_03.jpg" alt=""></li>
                <li><img src="./upload/recom_04.jpg" alt=""></li>
            </ul>
        </div>
    </div>
    <!-- 推荐模块 end-->
  </div>
</template>

<script>
export default {
  name:'Recom-1'

}
</script>

<style lang='less' scoped>
/* 推荐模块 */
/* 自己写的 自己写的 自己写的 自己写的 自己写的 自己写的 自己写的 自己写的*/
.recom {
    height: 163px;
    margin-top: 12px;
}
.recom_hd {
    float: left;
    width: 205px;
    height: 163px;
    text-align: center;
    background-color: #5c5251;
}
.recom_hd i {
    display: inline-block;
    width: 72px;
    height: 86px;
    margin-top: 30px;
}
.recom_bd ul {
    position: relative;
    width: 1200px;
    text-align: center;
}
.recom_bd ul li {
    
    float: left;
    width: 248px;
    height: 163px;
    background-color: #ebebeb;
}
.recom_bd ul li:first-of-type::after {
    content: '';
    position: absolute;
    left: 455px;
    top: 10px;
    width: 1px;
    height: 145px;
    background-color: #ddd;
}
.recom_bd ul li:last-of-type::after {
    content: '';
    position: absolute;
    left: 700px;
    top: 10px;
    width: 1px;
    height: 145px;
    background-color: #ddd;
}
.recom_bd ul li:nth-child(-n+3)::after {
    content: '';
    position: absolute;
    right: 248px;
    top: 10px;
    width: 1px;
    height: 145px;
    background-color: #ddd;
}
.recom_bd ul li img {
    width: 248px;
    height: 100%;
}

/* 第二种做法 */
/* .recom {
    height: 163px;
    margin-top: 12px;
}
.recom_hd {
    float: left;
    width: 205px;
    height: 163px;
    text-align: center;
    padding-top: 30px;
    background-color: #5c5251;
}
.recom_bd {
    float: left;
}
.recom_bd ul li {
    position: relative;
    float: left;
    width: 248px;
    height: 163px;
    background-color: #ebebeb;
}
.recom_bd ul li img {
    width: 248px;
    height: 163px;
}
.recom_bd ul li:nth-child(-n+3)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 10px;
    width: 1px;
    height: 145px;
    background-color: #ddd;
} */


</style>