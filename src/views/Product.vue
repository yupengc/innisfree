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
            <a href="javascript:;">
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
          <li class="li2">
            <a href="javascript:;">
              面膜
              <span></span>
            </a>
          </li>
          <li class="li3">
            <a href="javascript:;">
              洁面与卸妆
              <stan></stan>
            </a>
          </li>
          <li class="li4">
            <a href="javascript:;">
              防晒
              <span></span>
            </a>
          </li>
          <li class="li5">
            <a href="javascript:;">
              面部底妆
              <span></span>
            </a>
          </li>
          <li class="li6">
            <a href="javascript:;">
              彩妆
              <span></span>
            </a>
          </li>
          <li class="li7">
            <a href="javascript:;">
              指甲油
              <span></span>
            </a>
          </li>
          <li class="li8">
            <a href="javascript:;">
              身体护理
              <span></span>
            </a>
          </li>
          <li class="li9">
            <a href="javascript:;">
              男士系列
              <span></span>
            </a>
          </li>
          <li class="li10">
            <a href="javascript:;">
              优惠套装
              <span></span>
            </a>
          </li>
          <li class="li11">
            <a href="javascript:;">
              美容工具
              <span></span>
            </a>
          </li>
          <li class="li12">
            <a href="javascript:;">
              婴儿洗护
              <span></span>
            </a>
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

  .typeCate .list {
    overflow:hidden;
    position:relative;
    width:980px;
    height:159px;
    padding-top:15px;
    margin-bottom:0px;
  }
  .typeCate .list > li {
    float:left;
    width:80.6px;
    height:114px;
    padding-left:1px;
  }
  .typeCate .list li a {
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
    width:100%;
    height:30px;
    position:absolute;
    top:130px;
  }
  .typeCate .list li .category_sub ul{
    width:100%;
    height:28px;
    border-top:1px solid #dddde1;
    border-bottom:1px solid #bebebe;
  }
  
</style>