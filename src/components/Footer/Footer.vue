<template>
     <!-- 底部模块的制作 start -->
    <footer class="footer">
        <div class="w">
            <div class="mod_service">
                <ul>
                    <li>
                        <h5></h5>
                        <div service_txt>
                            <h4>正品保障</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div service_txt>
                            <h4>极速物流</h4>
                            <p>急速物流，急速送达</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div service_txt>
                            <h4>无忧售后</h4>
                            <p>7天无理由退换货</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div service_txt>
                            <h4>特色服务</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div service_txt>
                            <h4>正品保障</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mod_help">
                <dl>
                    <dt>服务指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>购物指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>购物指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>购物指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>购物指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">大家电</a></dd>
                    <dd><a href="#">联系客服</a></dd>
                </dl>
                <dl>
                    <dt>帮助中心</dt>
                    <dd>
                        <img src="./images/wx_cz.jpg" alt="">
                        品优购客户端
                    </dd>
                </dl>
            </div>
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
    <!-- 底部模块的制作 end -->
</template>

<script>
export default {
  name: 'Footer-1'

}
</script>

<style>
/* 底部模块的制作 start  */
.footer {
    height: 415px;
    background-color: #f5f5f5;
    padding-top: 30px;
}
.mod_service {
    height: 80px;
    border-bottom: 1px solid #ccc;
}
.mod_service ul li {
    float: left;
    width: 240px;
    height: 50px;
    padding-left: 45px;
    padding: 0 35px;
}
.mod_service ul li h5 {
    float: left;
    width: 50px;
    height: 50px;
    background: url(@/assets/images/icons.png) no-repeat -252px -2px;
    margin-right: 8px;
}
.mod_service ul li .service_txt h4 {
    font-size: 14px;
    color: #333;
}
.mod_service ul li .service_txt p {
    font-size: 12px;
    color: #666;
}
.mod_help {
    height: 185px;
    border-bottom: 1px solid #ccc;
    padding-top: 20px;
    padding-left: 50px;
}
.mod_help dl dt {
    font-size: 16px;
    margin-bottom: 10px;
}
.mod_help dl {
    float: left;
    width: 200px;
}
.mod_help dl:last-child{
    width: 90px;
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