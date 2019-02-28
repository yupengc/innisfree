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
      <div class="hotArea">
        <div class="hotLeft">
          <h4><img src="../../public/img/product/nowhot_title.gif" alt=""></h4>
          <div class="nowhotList">
            <button type="button" class="prev" @click="buttonL"></button>
            <button type="button" class="next" @click="buttonR" ></button>
            <div class="list">
              <ul>
                <li>
                  <a href="javascript:;">
                    <span class="rank no1"></span>
                    <span class="productImg">
                      <img src="../../public/img/product/1000008681_m.png" alt="">
                    </span>
                    <span class="productName">
                      雪耳晶透新妍沁润面霜 60ml
                    </span>
                    <span class="productPrice">
                      <span class="price">¥260.00</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <span class="rank no2"></span>
                    <span class="productImg">
                      <img src="../../public/img/product/1000007221_m.png" alt="">
                    </span>
                    <span class="productName">
                      绿茶精萃矿物质喷雾150ml    7折
                    </span>
                    <span class="productPrice">
                      <span class="normalprice">¥100.00</span>
                      <span class="price">¥70.00</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <span class="rank no3"></span>
                    <span class="productImg">
                      <img src="../../public/img/product/1000007743_m.png" alt="">
                    </span>
                    <span class="productName">
                      济州石榴活妍焕采保湿乳 160ml
                    </span>
                    <span class="productPrice">
                      <span class="price">¥160.00</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <span class="rank no4"></span>
                    <span class="productImg">
                      <img src="../../public/img/product/1000009360_m.png" alt="">
                    </span>
                    <span class="productName">
                      济州石榴活妍焕采菁华露 50ml
                    </span>
                    <span class="productPrice">
                      <span class="price">¥240.00</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <span class="rank no5"></span>
                    <span class="productImg">
                      <img src="../../public/img/product/1000003160_m.png" alt="">
                    </span>
                    <span class="productName">
                      发酵豆焕活柔肤水 200ML
                    </span>
                    <span class="productPrice">
                      <span class="price">¥210.00</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="hotRight">
          <ul class="menu">
            <li><a href="javascript:;"><img src="../../public/img/product/otherMenu1.gif" alt=""></a></li>
            <li><a href="javascript:;"><img src="../../public/img/product/otherMenu2.gif" alt=""></a></li>
            <li><a href="javascript:;"><img src="../../public/img/product/otherMenu3.gif" alt=""></a></li>
            <li><a href="javascript:;"><img src="../../public/img/product/otherMenu4.gif" alt=""></a></li>
          </ul>
        </div>
      </div>
      <div class="productFilter">
        <div class="conditionFilter">
          <h4>功效</h4>
          <div class="list">
            <ul>
              <li>
                <input type="checkbox" id="skin1" class="check">
                <span>
                  <label for="skin1" class="label">
                    补水保湿
                  </label>
                </span>
              </li>
              <li>
                <input type="checkbox" id="skin2" class="check">
                <span>
                  <label for="skin2" class="label">
                    毛孔管理
                  </label>
                </span>
              </li>
              <li>
                <input type="checkbox" id="skin3" class="check">
                <span>
                  <label for="skin3" class="label">
                    舒缓修护
                  </label>
                </span>
              </li>
              <li>
                <input type="checkbox" id="skin4" class="check">
                <span>
                  <label for="skin4" class="label">
                    美白提亮
                  </label>
                </span>
              </li>
              <li>
                <input type="checkbox" id="skin5" class="check">
                <span>
                  <label for="skin5" class="label">
                    光泽滋润
                  </label>
                </span>
              </li>
              <li>
                <input type="checkbox" id="skin6" class="check">
                <span>
                  <label for="skin6" class="label">
                    弹性紧致
                  </label>
                </span>
              </li>
              <li>
                <input type="checkbox" id="skin7" class="check">
                <span>
                  <label for="skin7" class="label">
                    改善肤质
                  </label>
                </span>
              </li>
              <li>
                <input type="checkbox" id="skin8" class="check">
                <span>
                  <label for="skin8" class="label">
                    美白遮瑕
                  </label>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="conditionFilter">
          <h4>原料</h4>
          <div class="list">
            <ul>
              <li><input type="checkbox" id="skin9" class="check"><span><label for="skin9" class="label">海盐</label></span></li>
              <li><input type="checkbox" id="skin10" class="check"><span><label for="skin10" class="label">芦荟</label></span></li>
              <li><input type="checkbox" id="skin11" class="check"><span><label for="skin11" class="label">绿茶精萃</label></span></li>
              <li><input type="checkbox" id="skin12" class="check"><span><label for="skin12" class="label">橄榄</label></span></li>
              <li><input type="checkbox" id="skin13" class="check"><span><label for="skin13" class="label">火山岩泥</label></span></li>
              <li><input type="checkbox" id="skin14" class="check"><span><label for="skin14" class="label">生机展颜</label></span></li>
              <li><input type="checkbox" id="skin15" class="check"><span><label for="skin15" class="label">发酵豆</label></span></li>
              <li><input type="checkbox" id="skin16" class="check"><span><label for="skin16" class="label">生机蜜柑维C</label></span></li>
              <li><input type="checkbox" id="skin17" class="check"><span><label for="skin17" class="label">济州石榴</label></span></li>
              <li><input type="checkbox" id="skin18" class="check"><span><label for="skin18" class="label">油菜花蜜</label></span></li>
              <li><input type="checkbox" id="skin19" class="check"><span><label for="skin19" class="label">香榧</label></span></li>
              <li><input type="checkbox" id="skin20" class="check"><span><label for="skin20" class="label">迷你敏</label></span></li>
              <li><input type="checkbox" id="skin21" class="check"><span><label for="skin21" class="label">青麦</label></span></li>
              <li><input type="checkbox" id="skin22" class="check"><span><label for="skin22" class="label">九重臻致</label></span></li>
              <li><input type="checkbox" id="skin23" class="check"><span><label for="skin23" class="label">浆果美白</label></span></li>
              <li><input type="checkbox" id="skin24" class="check"><span><label for="skin24" class="label">红酒</label></span></li>
              <li><input type="checkbox" id="skin25" class="check"><span><label for="skin25" class="label">济州岛青柿</label></span></li>
              <li><input type="checkbox" id="skin26" class="check"><span><label for="skin26" class="label">都市绿化</label></span></li>
              <li><input type="checkbox" id="skin27" class="check"><span><label for="skin27" class="label">青苹果</label></span></li>
              <li><input type="checkbox" id="skin28" class="check"><span><label for="skin28" class="label">柑橘花香氛</label></span></li>
              <li><input type="checkbox" id="skin29" class="check"><span><label for="skin29" class="label">山茶花</label></span></li>
              <li><input type="checkbox" id="skin30" class="check"><span><label for="skin30" class="label">寒兰</label></span></li>
              <li><input type="checkbox" id="skin31" class="check"><span><label for="skin31" class="label">栀子花</label></span></li>
              <li><input type="checkbox" id="skin32" class="check"><span><label for="skin32" class="label">济州石榴</label></span></li>
              <li><input type="checkbox" id="skin33" class="check"><span><label for="skin33" class="label">雪耳</label></span></li>
              <li><input type="checkbox" id="skin34" class="check"><span><label for="skin34" class="label">济州岛温泉水</label></span></li>
              <li><input type="checkbox" id="skin35" class="check"><span><label for="skin35" class="label">白牡丹</label></span></li>
              <li><input type="checkbox" id="skin36" class="check"><span><label for="skin36" class="label">姜油</label></span></li>
              <li><input type="checkbox" id="skin37" class="check"><span><label for="skin37" class="label">菖蒲</label></span></li>
              <li><input type="checkbox" id="skin38" class="check"><span><label for="skin38" class="label">熔岩海水</label></span></li>
              <li><input type="checkbox" id="skin39" class="check"><span><label for="skin39" class="label">黑茶</label></span></li>
            </ul>
          </div>
        </div>
        <div class="btnArea">
          <a href="javascript:;">
            <img src="../../public/img/product/btn_filterSearch.gif" alt="">
          </a>
          <a href="javascript:;">
            <img src="../../public/img/product/btn_filterReset.gif" alt="">
          </a>
        </div>
        <!-- 搜索选择器 -->
        <div class="searchFilter">
          <label for="productFilter_search" class="label">在结果内查找</label>
          <input type="text" id="productFilter_search" class="input-text">
          <a href="javascript:;">
            <img src="../../public/img/product/btn_search.gif" alt="">
          </a>
        </div>
      </div>
      


    </div>
    <!-- footer -->
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    buttonR(){
      // var right=e.target;
      var myUl = document.querySelectorAll(".hotArea .list ul")[0];
      myUl.style.left="-558px";
      myUl.style.transition="1s"
    },
    buttonL(){
      var myUl = document.querySelectorAll(".hotArea .list ul")[0];
      myUl.style.left="0px";
    }
  },
}
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

  /* now hot */
  .hotArea{
    width:100%;
    height:285px;
    position:relative;
    margin-top:20px;
  }
  .hotArea .hotLeft{
    width:800px;
    height:285px;
    position:relative;
    float:left;
    background:url('../../public/img/product/BG_nowhot.gif')no-repeat left top;
    padding-left:200px;
  }
  .hotArea .hotLeft h4{
    position:absolute;
    left:19px;
    top:44px;
  }
  .hotArea .hotLeft .nowhotList{
    position:relative;
    width:590px;
    overflow: hidden;
    padding: 16px 20px 0 12px;
  }
  .hotArea .hotLeft .nowhotList button{
    display:block;
    position:absolute;
    top:120px;
    width:15px;
    height:18px;
    border:none;
    cursor: pointer;
  }
  .hotArea .hotLeft .nowhotList .prev{
    left:0;
    background: url('../../public/img/product/btn_nowhotL.gif') no-repeat left center;
  }
  .hotArea .hotLeft .nowhotList .next{
    right:0;
    background: url('../../public/img/product/btn_nowhotR.gif') no-repeat right center;
  }
  /*
  .hotArea .hotLeft .nowhotList button:hover div ul{
    left:-558px;
  }
  */
  .hotArea .hotLeft .nowhotList .list{
    overflow:hidden;
    position:relative;
    height:244px;
    width:100%;
  }
  .hotArea .hotLeft .nowhotList .list ul{
    position:relative;
    width:1674px;
    height:244px;
  }
  .hotArea .hotLeft .nowhotList .list ul li{
    float:left;
    width:186px;
    padding:10px 0 0 10px;
  }
  .hotArea .hotLeft .nowhotList .list ul li a{
    position:relative;
    height:234px;
    display:block;
    text-decoration:none;
    padding:10px 13px 0;
    background:url('../../public/img/product/BG_hotPdt.png')no-repeat left top;
  }
  .hotArea .hotLeft .nowhotList .list ul li a span{
    display:block;
  }
  .hotArea .hotLeft .nowhotList .list ul li a .rank{
    position:absolute;
    left:-10px;
    top:-10px;
    width:56px;
    height:49px;
  }
  
  .hotArea .hotLeft .nowhotList .list ul li a .no1{
    background:url('../../public/img/product/nowhot_no1.png')no-repeat left top;
  }
  .hotArea .hotLeft .nowhotList .list ul li a .no2{
    background:url('../../public/img/product/nowhot_no2.png')no-repeat left top;
  }
  .hotArea .hotLeft .nowhotList .list ul li a .no3{
    background:url('../../public/img/product/nowhot_no3.png')no-repeat left top;
  }
  .hotArea .hotLeft .nowhotList .list ul li a .no4{
    background:url('../../public/img/product/nowhot_no4.png')no-repeat left top;
  }
  .hotArea .hotLeft .nowhotList .list ul li a .no5{
    background:url('../../public/img/product/nowhot_no5.png')no-repeat left top;
  }

  .hotArea .hotLeft .nowhotList .list ul li a .productName{
    margin-top:8px;
    line-height:1.4;
  }
  .hotArea .hotLeft .nowhotList .list ul li a .productPrice{
    margin-top:5px;
  }
  .hotArea .hotLeft .nowhotList .list ul li a .productPrice .price {
    display:inline-block;
    vertical-align:middle;
    font-size:15px;
    font-weight:bold;
    color:#c5361a;
    font-family:Tahoma;
  }
  .hotArea .hotLeft .nowhotList .list ul li a .productPrice .normalprice {
    display:inline-block;
    margin-right:5px;
    vertical-align:middle;
    text-decoration:line-through;
    font-size:14px;
    font-weight:bold;
    color:#333333;
    font-family:Tahoma;
  }
  .hotArea .hotRight {
    float:right;
    width:172px;
    height:285px;
    background:url('../../public/img/product/BG_nowhotR.gif')no-repeat
  }
  .hotArea .hotRight .menu{
    padding:1px 9px 0 19px;
  }
  .hotArea .hotRight .menu li{
    height:70px;
    border-bottom:1px solid #e2e2e2;
  }
  .hotArea .hotRight .menu li:nth-child(4){
    border:none;
  }
  .hotArea .hotRight .menu li a{
    display:block;
    height:45px;
    padding:25px 0 0 8px;
  }

  /* 商品选择器 */
  .productFilter{
    height:302px;
    margin-top:20px;
    border-top:2px solid #000;
  }
  .productFilter .conditionFilter{
    width:100%;
    height:66px;
    border-bottom:1px solid #e6e6e6;
    padding-bottom:12px;
  }
  .productFilter .conditionFilter:nth-child(2){
    height:192px;
  }
  .productFilter .conditionFilter:nth-child(2)>h4{
    padding:80px 0 0 78px;
  }
  .productFilter .conditionFilter h4{
    float:left;
    font-size:14px;
    font-weight:bold;
    color:#333333;
    line-height:18px;
    padding:22px 0 0 78px;
    font-family:"SimSun","宋体",'tahoma';
  }
  .productFilter .conditionFilter .list{
    width:794px;
    float:right;
    border-left:1px solid #e6e6e6;

  }
  .productFilter .conditionFilter .list ul{
    width:794px;
    margin:5px 0 10px 0;
    padding-left:20px;
  }
  .productFilter .conditionFilter .list ul li{
    display:inline-block;
    width:150px;
    line-height:18px;
    font-size:12px;
    color:#666666;
    padding: 4px 0 1px;
    font-family:"SimSun","宋体",'tahoma';
  }
  .productFilter .conditionFilter .list ul li .check{
    width:13px;
    height:13px;
    vertical-align:middle;
  }
  .productFilter .conditionFilter .list ul li span{
    padding-left:5px;
    
  }
  .productFilter .conditionFilter .list ul li .label{
    display:inline-block;
    cursor:pointer;
    vertical-align:middle;
    margin-bottom:0
  }

  /* 搜索按钮 */
  .productFilter .btnArea {
    width:100%;
    margin-top:15px;
    text-align:right;
  }
  .productFilter .btnArea img{
    margin:0 2px;
  }
  .productFilter .searchFilter{
    margin-top:40px;
    width:100%;
  }
  .productFilter .searchFilter label{
    color:#666666;
    font-size:12px;
    font-family: "SimSun","宋体",'tahoma';
  }
  .productFilter .searchFilter input{
    height:18px;
    border:1px solid #dedede;
    line-height:18px;
    font-size:12px;
    margin:3px 10px 0 10px;
  } 
</style>