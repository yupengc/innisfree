<template>
  <div id="wrap" class="sub_wrap">
    <!-- header -->
    <my-header></my-header>
    <div class="container">
      <!-- 当前所处位置区 -->
      <div class="locationArea">
        <p>
          <span class="home"></span>
          <span class="pathImg"></span>
          <span class="path">
            <a href="javascript:;">商城</a>
          </span>
          <span class="pathImg"></span>
          <span class="path">
            <a href="javascript:;">产品类别</a>
          </span>
          <span class="pathImg"></span>
          <span class="path">
            <a href="javascript:;">基础护理</a>
          </span>
          <span class="pathImg"></span>
          <span class="path">
            <a href="javascript:;">全部</a>
          </span>
        </p>
      </div>

      <div class="pageTitleArea">
        <h3>
          <img src="../../public/img/product/h2_productType.gif" alt="">
        </h3>
        <p class="desc">
          <img src="../../public/img/product/desc_productType.gif" alt="">
        </p>
        <div class="categorySelect">
          <ul>
            <li><a href="javascript:;"><img src="../../public/img/product/categoryLine_on.gif" alt=""></a></li>
            <li><a href="javascript:;"><img src="../../public/img/product/categoryType.gif" alt=""></a></li>
            <li><a href="javascript:;"><img src="../../public/img/product/categoryMap.gif" alt=""></a></li>
          </ul>
        </div>
      </div>
      <div class="typeCate">
        <ul class="list">
          <li class="li1">
            <a href="javascript:;" class="icon">
              基础护理
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">护肤水</a></li>
                <li><a href="javascript:;">乳液</a></li>
                <li><a href="javascript:;">精华液</a></li>
                <li><a href="javascript:;">面霜</a></li>
                <li><a href="javascript:;">眼霜</a></li>
                <li><a href="javascript:;">喷雾</a></li>
                <li><a href="javascript:;">唇部护理</a></li>
              </ul>
            </div>
          </li>
          <li class="li2 list_sub">
            <a href="javascript:;" class="icon">
              面膜
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">水洗面膜</a></li>
                <li><a href="javascript:;">面膜贴</a></li>
                <li><a href="javascript:;">鼻贴</a></li>
                <li><a href="javascript:;">睡眠面膜</a></li>
                <li><a href="javascript:;">面膜优惠套装</a></li>
              </ul>
            </div>
          </li>
          <li class="li3 list_sub">
            <a href="javascript:;" class="icon">
              洁面与卸妆
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">洁面</a></li>
                <li><a href="javascript:;">卸妆</a></li>
                <li><a href="javascript:;">角质清洁</a></li>
              </ul>
            </div>
          </li>
          <li class="li4 list_sub">
            <a href="javascript:;" class="icon">
              防晒
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">防晒霜</a></li>
              </ul>
            </div>
          </li>
          <li class="li5 list_sub">
            <a href="javascript:;" class="icon">
              面部底妆
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">气垫</a></li>
                <li><a href="javascript:;">修颜霜</a></li>
                <li><a href="javascript:;">隔离修饰乳</a></li>
                <li><a href="javascript:;">遮瑕</a></li>
                <li><a href="javascript:;">妆前乳</a></li>
                <li><a href="javascript:;">粉底</a></li>
                <li><a href="javascript:;">散粉&粉饼</a></li>
              </ul>
            </div>
          </li>
          <li class="li6 list_sub">
            <a href="javascript:;" class="icon">
              彩妆
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">睫毛膏</a></li>
                <li><a href="javascript:;">眼影</a></li>
                <li><a href="javascript:;">眼线</a></li>
                <li><a href="javascript:;">眉笔</a></li>
                <li><a href="javascript:;">唇膏唇彩</a></li>
                <li><a href="javascript:;">高光</a></li>
                <li><a href="javascript:;">腮红</a></li>
              </ul>
            </div>
          </li>
          <li class="li7 list_sub">
            <a href="javascript:;" class="icon">
              指甲油
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">生机指甲油</a></li>
                <li><a href="javascript:;">指甲护理</a></li>
                <li><a href="javascript:;">马卡龙系列</a></li>
              </ul>
            </div>
          </li>
          <li class="li8 list_sub">
            <a href="javascript:;" class="icon">
              身体护理
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">沐浴露</a></li>
                <li><a href="javascript:;">身体保湿</a></li>
                <li><a href="javascript:;">身体磨砂</a></li>
                <li><a href="javascript:;">局部护理</a></li>
                <li><a href="javascript:;">身体喷雾</a></li>
                <li><a href="javascript:;">护发</a></li>
              </ul>
            </div>
          </li>
          <li class="li9 list_sub">
            <a href="javascript:;" class="icon">
              男士系列
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">护肤水</a></li>
                <li><a href="javascript:;">乳液</a></li>
                <li><a href="javascript:;">洁面</a></li>
                <li><a href="javascript:;">面霜</a></li>
                <li><a href="javascript:;">男士礼盒</a></li>
              </ul>
            </div>
          </li>
          <li class="li10 list_sub">
            <a href="javascript:;" class="icon">
              优惠套装
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">全部优惠套装</a></li>
              </ul>
            </div>
          </li>
          <li class="li11 list_sub">
            <a href="javascript:;" class="icon">
              美容工具
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">护肤工具</a></li>
                <li><a href="javascript:;">美体工具</a></li>
                <li><a href="javascript:;">美甲工具</a></li>
                <li><a href="javascript:;">彩妆工具</a></li>
              </ul>
            </div>
          </li>
          <li class="li12 list_sub">
            <a href="javascript:;" class="icon">
              婴儿洗护
              <span></span>
            </a>
            <div class="category_sub">
              <ul>
                <li><a href="javascript:;">查看全部</a></li>
                <li><a href="javascript:;">洗发沐浴</a></li>
                <li><a href="javascript:;">滋润护肤</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>


    </div>
    <!-- footer -->
    <my-footer></my-footer>
  </div>
</template>

<script>

</script>

<style>
  .container .pageTitleArea {
    position:relative;
    height:89px;
    background:url('../../public/img/product/BG_pageTitleLine.gif')no-repeat left bottom;
  }
  .container .pageTitleArea h3 {
    padding-top:15px;
    margin-bottom:0;
  }
  .container .pageTitleArea .categorySelect {
    position:absolute;
    right:20px;
    top:46px;
  }
  .container .pageTitleArea .categorySelect ul li {
    float:left;
    margin-right:12px;
  }

  /*  */
  .typeCate{
    padding-top:15px;
  }
  .typeCate .list {
    overflow:hidden;
    position:relative;
    width:980px;
    height:154px;
    margin-bottom:0px;
  }
  .typeCate .list > li {
    float:left;
    width:80.6px;
    height:114px;
    padding-left:1px;
  }
  .typeCate .list li > .icon {
    display:block;
    position:relative;
    height:19px;
    padding:79px 0 9px;
    text-align:center;
    line-height:19px;
    white-space:nowrap;
  }
  .typeCate .list .li1 > a {
    background:url('../../public/img/product/BG_category1.png')no-repeat center top;
  }
  .typeCate .list .li2 > a {
    background:url('../../public/img/product/BG_category2.png')no-repeat center top;
  }
  .typeCate .list .li3 > a {
    background:url('../../public/img/product/BG_category3.png')no-repeat center top;
  }
  .typeCate .list .li4 > a {
    background:url('../../public/img/product/BG_category4.png')no-repeat center top;
  }
  .typeCate .list .li5 > a {
    background:url('../../public/img/product/BG_category5.png')no-repeat center top;
  }
  .typeCate .list .li6 > a {
    background:url('../../public/img/product/BG_category6.png')no-repeat center top;
  }
  .typeCate .list .li7 > a {
    background:url('../../public/img/product/BG_category7.png')no-repeat center top;
  }
  .typeCate .list .li8 > a {
    background:url('../../public/img/product/BG_category8.png')no-repeat center top;
  }
  .typeCate .list .li9 > a {
    background:url('../../public/img/product/BG_category9.png')no-repeat center top;
  }
  .typeCate .list .li10 > a {
    background:url('../../public/img/product/BG_category10.png')no-repeat center top;
  }
  .typeCate .list .li11 > a {
    background:url('../../public/img/product/BG_category11.png')no-repeat center top;
  }
  .typeCate .list .li12 > a {
    background:url('../../public/img/product/BG_category12.png')no-repeat center top;
  }

  .typeCate .list li .category_sub{
    display:block;
    width:978px;
    height:40px;
    position:absolute;
    top:114px;
    left:0;
    display:none;
  }
  /* li1的div */
  .typeCate .list .li1>div{
    display:none;
  }
  .typeCate .list li .category_sub ul{
    width:100%;
    height:40px;
    border-top:1px solid #dddde1;
    border-bottom:1px solid #bebebe;
    background:url('../../public/img/product/line_1x1_dddde1.gif')repeat-y right top;
  }
  /* 全部的子级div宽度 */
  .typeCate .list li .category_sub ul li{
    float:left;
    height:40px;
  }
  .typeCate .list .li1 .category_sub ul li{
    width:122px;
  }
  .typeCate .list .li2 .category_sub ul li{
    width:163px;
  }
  .typeCate .list .li3 .category_sub ul li{
    width:244px;
  } 
  .typeCate .list .li4 .category_sub ul li{
    width:489px;
  } 
  .typeCate .list .li5 .category_sub ul li{
    width:122px;
  } 
  .typeCate .list .li6 .category_sub ul li{
    width:122px;
  } 
  .typeCate .list .li7 .category_sub ul li{
    width:244px;
  } 
  .typeCate .list .li8 .category_sub ul li{
    width:139px;
  } 
  .typeCate .list .li9 .category_sub ul li{
    width:163px;
  } 
  .typeCate .list .li10 .category_sub ul li{
    width:489px;
  } 
  .typeCate .list .li11 .category_sub ul li{
    width:195px;
  } 
  .typeCate .list .li12 .category_sub ul li{
    width:326px;
  } 

  .typeCate .list li .category_sub ul li a{ 
    display:block;
    line-height:40px;
    text-align:center;
    border-left:1px solid #dddde1;
    letter-spacing:1px;
  }
  .typeCate .list li .category_sub ul li a:hover{
    font-weight:bold;
    color:#333;
    letter-spacing:0;
  }
  /* 绿色下标 */
  .typeCate .list li > .icon span{
    background:url('../../public/img/product/BG_categoryArr.png')no-repeat center;
    height:9px;
    width:100%;
    position:absolute;
    top:100px;
    left:0;
    display:none;
  }
  /* .li1绿标常显 */
  .typeCate .list .li1 > .icon span{
    display:block
  }
  /* 鼠标触碰到整个ul时 li1绿标消失 */
  .typeCate .list:hover>.li1 span{
    display:none;
  }
  /* 全部li悬停触发绿标 */
  .typeCate .list .list_sub:hover>a span{
    display:block;
  }
  /* 悬停li1触发绿标 */
  .typeCate .list .li1:hover>a span{
    display:block;
  }
  

  /* .li1的a标签字体绿色常显 */
  .typeCate .list .li1 > .icon {
    font-weight:bold;
    color:#045321;
  }
  /* 鼠标触碰到整个ul时 li1的a标签字体格式消失 */
  .typeCate .list:hover> .li1 .icon{
    font-weight:400;
    color:#666666;
  }
  /* 全部li悬停触发a标签字体格式 */
  .typeCate .list li:hover .icon{
    font-weight:bold;
    color:#045321;
  }
  /* 悬停li1触发a标签字体格式 */
  .typeCate .list .li1:hover .icon{
    font-weight:bold;
    color:#045321;
  }


  /* .li1的div常显 */
  .typeCate .list .li1 > div{
    display:block
  }
  /* 鼠标触碰到整个ul时 li1的div消失 */
  .typeCate .list:hover> .li1 div{
    display:none;
  }
  /* 全部li悬停触发子级div */
  .typeCate .list .list_sub:hover div{
    display:block;
  }
  /* 悬停li1触发div */
  .typeCate .list .li1:hover div{
    display:block;
  }


</style>