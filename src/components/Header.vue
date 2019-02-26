<template>
  <div class="app-header">
    <header>
      <div id="headerMenu" >
            <!-- 顶部菜单 -->
        <div class="utilMenu">
          <p class="welcomeMsg">
            <img src="../../public/img/txt_welcomeMsg.png" alt="">
          </p>
          <ul class="menu">
            <li>
              <a href="javascript:;" @click.stop="span()" >
                <span>广东省</span>
              </a>
              <div v-show="show2" class="span"> 
                  
              </div>
            </li>
            <li>
              <a href="http://localhost:8080/#/login">
                <img src="../../public/img/header_util_login.png" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/header_util_register.png" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/header_util_cart.png" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/header_util_mypage.png" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/header_util_cs.png" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/header_util_findShop.png" alt="">
              </a>
            </li>
          </ul>
        </div>
              <!-- innisfree LOGO -->
        <h1 class="logo">
          <a href="javascript:;">
            <img src="../../public/img/logo.png" alt="">
          </a>
        </h1>
        <!-- 快捷菜单 top -->
        <div class="quickMenu">
          <div class="QMTop">
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="../../public/img/header_quick_bestseller.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../public/img/header_quick_newPdt.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../public/img/header_quick_mdsPick.png" alt="">
                </a>
              </li>
            </ul>
          </div>
          <!--搜索菜单-->
          <div class="search">
            <span>
              <form action="">
                <input type="text" name="value" class="searchInput" placeholder="小绿瓶">
              </form>
            </span>
              <a href="javascript:;">
                <img class="searchImage" src="../../public/img/btn_search.png" alt="检索"  >
              </a>
          </div>
          <!-- 快捷菜单 下 -->
          <div class="QMButtom">
            <ul>
              <li>
                <a href="javascirpt:;">寒兰</a>
              </li>
              <li>
                <a href="javascirpt:;">石榴</a>
              </li>
              <li>
                <a href="javascirpt:;">花容悦貌</a>
              </li>
              <li>
                <a href="javascirpt:;">怦然心动</a>
              </li>
            </ul>
          </div>
        </div>
        <!--探店指南-->
        <div class="headerAd">
          <a href="javascript:;">
            <img src="../../public/img/header_ad_renewal.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="BtotalMenu">
          <!--快捷通道 品牌简介 故事 购物 活动 社区 账号登录-->
          <div class="totalMenu">
            <!-- 快捷购物通道 -->
            <div class="quickShopping">
              <a href="javascript:;" @click.stop="quick()">
                <img src="../../public/img/gnb_quickShopping.gif" alt="">
              </a>
              <div class="quickShoppingWin" v-show="showContent">  
                
              </div>
              <!-- List菜单 -->
              <ul class="totalList">
                <li class="gnb_menu1">
                  <a href="javascript:;" class="menu">
                    <strong></strong>
                  </a>
                  <div class="subMenu1">
                    <ul class="subList">
                      <li><a href="javascript:;">品牌介绍</a></li>
                      <li><a href="javascript:;">公益项目</a></li>
                      <li><a href="javascript:;">悦诗风吟广告</a></li>
                    </ul>
                    <p class="banner">
                      <img src="../../public/img/gnbMenu1_banner.jpg" alt="">
                    </p>
                  </div>
                  
                </li>
                <li class="gnb_menu2"> 
                  <a href="javascript:;" class="menu">
                    <strong></strong>
                  </a>
                  <div class="subMenu2">
                    <ul class="subList">
                      <li><a href="javascript:;">济州之家介绍</a></li>
                      <li><a href="javascript:;">济州之家音乐</a></li>
                    </ul>
                    <p class="banner">
                    <img src="../../public/img/gnbMenu2_banner.jpg" alt="">
                    </p>
                  </div>
                  
                </li>
                <li class="gnb_menu3">
                  <a href="javascript:;" class="menu">
                    <strong></strong>
                  </a>
                  <div class="subMenu3">
                    <dl>
                      <dt><a href="javascript:;">产品系列</a></dt>
                      <dd><a href="javascript:;">基础护理</a></dd>
                      <dd><a href="javascript:;">面膜</a></dd>
                      <dd><a href="javascript:;">洁面与卸妆</a></dd>
                      <dd><a href="javascript:;">防晒</a></dd>
                      <dd><a href="javascript:;">面部底妆</a></dd>
                      <dd><a href="javascript:;">彩妆</a></dd>
                      <dd><a href="javascript:;">指甲油</a></dd>
                      <dd><a href="javascript:;">身体护理</a></dd>
                      <dd><a href="javascript:;">男士系列</a></dd>
                      <dd><a href="javascript:;">优惠套装</a></dd>
                      <dd><a href="javascript:;">美容工具</a></dd>
                      <dd><a href="javascript:;">婴儿护肤</a></dd>
                    </dl>
                    <dl>
                      <dt><a href="javascript:;">护肤系列</a></dt>
                      <dd><a href="javascript:;">绿茶精萃 <em class="iconNew">NEW</em></a></dd>
                      <dd><a href="javascript:;">橄榄</a></dd>
                      <dd><a href="javascript:;">火山岩泥</a></dd>
                      <dd><a href="javascript:;">生机展颜</a></dd>
                      <dd><a href="javascript:;">发酵豆</a></dd>
                      <dd><a href="javascript:;">生机蜜柑维C</a></dd>
                      <dd><a href="javascript:;">济州石榴</a></dd>
                      <dd><a href="javascript:;">雪耳</a></dd>
                      <dd><a href="javascript:;">寒兰</a></dd>
                      <dd><a href="javascript:;">油菜花蜜</a></dd>
                      <dd><a href="javascript:;">香榧</a></dd>
                      <dd><a href="javascript:;">济州岛青麦</a></dd>
                      <dd><a href="javascript:;">济州温泉水</a></dd>
                      <dd><a href="javascript:;">九重臻致</a></dd>
                      <dd><a href="javascript:;">熔岩海水</a></dd>
                      <dd><a href="javascript:;">黑茶</a></dd>
                    </dl>
                    <div class="promoBanner">
                      <a href="javascript:;">
                        <img src="../../public/img/gnbShopping_banner_20190131.png" alt="">
                      </a>
                    </div>
                    <ul>
                      <li><a href="javascript:;"><img src="../../public/img/gnb_menu3-1.gif" alt=""></a></li>
                      <li><a href="javascript:;"><img src="../../public/img/gnb_menu3-2.gif" alt=""></a></li>
                      <li><a href="javascript:;"><img src="../../public/img/gnb_menu3-3.gif" alt=""></a></li>
                      <li><a href="javascript:;"><img src="../../public/img/gnb_menu3-4.gif" alt=""></a></li>
                    </ul>
                    <a href="javascript:;" class="btnClose">
                      <img src="../../public/img/btn_close_x_666666.gif" alt="">
                    </a>
                  </div>
                  
                </li>
                <li class="gnb_menu4">
                  <a href="javascript:;" class="menu">
                    <strong></strong>
                  </a>
                  <div class="subMenu4">
                    <ul class="subList">
                      <li><a href="javascript:;">正在进行的活动</a></li>
                      <li><a href="javascript:;">过去进行的活动</a></li>
                      <li><a href="javascript:;">新品试用活动</a></li>
                      <li><a href="javascript:;">中奖者名单</a></li>
                    </ul>
                    <p class="banner">
                      <img src="../../public/img/gnbMenu4_banner20150327.jpg" alt="">
                    </p>
                  </div>
                  
                </li>
                <li class="gnb_menu5">
                  <a href="javascript:;" class="menu">
                    <strong></strong>
                  </a>
                  <div class="subMenu5">
                    <ul class="subList">
                      <li><a href="javascript:;">照片评论</a></li>
                      <li><a href="javascript:;">绿茶农场游戏</a></li>
                      <li><a href="javascript:;">inni社交圈</a></li>
                      <li><a href="javascript:;">inni粉积分榜</a></li>
                      <li><a href="javascript:;">美妆秀</a></li>
                    </ul>
                    <p class="banner">
                      <img src="../../public/img/gnbMenu5_banner.jpg" alt="">
                    </p>
                  </div>
                  
                </li>
              </ul>
            </div>
            
            <!-- 快捷登录区域 -->
            <div class="loginArea">
              <form class="loginFrm">
                <span class="loginId">
                  <input type="text" id="id"  placeholder="   邮箱/手机">
                </span>
                <span class="loginPwd">
                  <input type="password" id="pwd"  placeholder="   密码" >
                </span>
                <span>
                  <a href="javascript:;" class="login" alt="登录">
                    <img src="../../public/img/btn_login.png" alt="">
                  </a>
                </span>
              </form>
            </div>
            <!--每日签到-->
            <div class="checkIN">
            <a href="javascipt:;">
              <img src="../../public/img/161227_check.png" alt="">
            </a>
          </div>
          </div>
        </div>
    </header>
  </div>
</template>


<script>

export default {
  data(){
    return{
      showContent:false,
      show2:false
    }
  },
  methods:{
    quick(){
      this.showContent=true;
    },
    span(){
      this.show2=true;
    }
    // init(){
    //   this.showContent=false;
    // }
  }
}

</script>


<style>




  header{
    width:100%;
    height:164
  }
  #headerMenu {
    margin:0 auto;
    width:980px;
    height:164px;
    position:relative;
  }
  #headerMenu li{
    list-style:none;
    float:left;
  }


  /* 顶部菜单 */
  .utilMenu {
    width:980px;
    height:26px;
  } 
  .utilMenu .welcomeMsg{
    position:absolute;
    left:-23px;
  }
  .utilMenu .menu{
    width:435px;
    height:18px;
    float:right;
    margin-top:5px;
  }
  .utilMenu .menu li a{
    color:#666666;
  }
  .utilMenu .menu li{
    font-weight:bold;
    font-size:11px;
    color:#666666;
    background:url('../../public/img/bar_2x10_e9e9e9.gif')no-repeat 0 50% ;
    padding-right:6px;
    padding-left:6px;
  }
  .utilMenu>.menu li:first-child{
    margin-top:2px;
    background:none;
  }
  .utilMenu>.menu li:nth-child(4){
    margin-right:8px;
  }
  .utilMenu>.menu li:nth-child(7){
    border-right:0px;
  }


  /* logo图片 */
  #headerMenu .logo{
    width:130px; 
    margin-top:10px;
  }


  /* 快捷搜索和导航 */
  .quickMenu{
    display:block;
    clear:both;
    height:100px;
    width:430px;
    position:absolute;
    left:180px;
    top:30px;
  }
  .quickMenu div{
    float:left;
  }
  .quickMenu li{
    float:left;
    padding: 0 10px;
  }


  /* 上快捷导航*/
  .QMTop{
    margin-left:10px;
  }
  .QMTop li a{
    padding:0 3px;
  }


  /* 下快捷导航 */
  .QMButtom {
    margin-left:25px;
  }
  .QMButtom li {
    margin-top:-5px;
    background:url('../../public/img/bar_1x9_666666.gif')no-repeat left center;
  }
  .QMButtom li:first-child{
    background:none;
  }

  .QMButtom li a{
    font-size:11px;
    color:#666666;
    font-family:"Simsum","宋体","tahoma";
    width:42px;
    height:12.8px;
    padding:0 10px;
  }
  .QMButtom li:nth-child(4){
    border: 0px;
  }


  /* 搜索框 */
  .quickMenu .search{
    width:400px;
    height:40px;
    margin-top:3px;
    background:url('../../public/img/BG_search_170717.png')no-repeat;
    
  }
  .quickMenu .search img{
    float:right;
    margin:-34px -15px;
  }
  .quickMenu .search input{
    width:260px;
    height:28px;
    margin:4px 40px;
    border:0px solid #fff;
    font-size:12px;
  }


  /* 探店指南 */
  .headerAd{
    float:right;
    cursor:pointer;
    margin-top:-70px;
  }


  /* 快速购物通道 */
  .BtotalMenu {
    background:#045321; 
    width:100%;
    height:40px;
    margin-top:-40px;      
  }
  .totalMenu{
    margin:0 auto;
    height:40px;
    width:980px;
    position: relative;
  }
  .totalMenu .quickShopping .totalList{
    float: left;
    position: absolute;
    display:block;
    left:135px;
    top:0;
  }
  .totalMenu .quickShopping .totalList>li{
    height:40px;
    float: left;
    list-style:none;
    z-index:10;
  }
/*  
  .totalMenu .quickShopping .totalList li>a{
    position: relative;
    overflow: hidden;
    z-index: 2;
    display: block;
    height: 40px;
  }
*/
  .totalMenu .quickShopping .totalList .gnb_menu1{
    background:url('../../public/img/gnb_menu1.png')no-repeat 0 0;
    width:116px;
  }
  .totalMenu .quickShopping .totalList .gnb_menu2{
    background:url('../../public/img/gnb_menu2.png')no-repeat 0 0;
    width:132px;
  }
  .totalMenu .quickShopping .totalList .gnb_menu3{
    background:url('../../public/img/gnb_menu3.png')no-repeat 0 0;
    width:83px;
  }
  .totalMenu .quickShopping .totalList .gnb_menu4{
    background:url('../../public/img/gnb_menu4.png')no-repeat 0 0;
    width:82px;
  }
  .totalMenu .quickShopping .totalList .gnb_menu5{
    background:url('../../public/img/gnb_menu5.png')no-repeat 0 0;
    width:85px;
  }
  .totalMenu .quickShopping .totalList li:hover{
    background-position:0 -40px;
    cursor:pointer;
  }

   /* 快捷菜单hover触发div  */
  .BtotalMenu .totalList li>div{
    display:none;
    background:#fff;
    position:absolute;
    top:39px;
    z-index:1;
    margin:0;
  }
  .BtotalMenu .totalList li:hover>div{
    display:block;
    border-left:1px solid #333;
    border-right:1px solid #333;
    border-bottom:1px solid #333;
  }


 .BtotalMenu .totalList li div ul>li{
    list-style:none;
    width:176px;
    height:18px;
  }
  .BtotalMenu .totalList li div .subList li>a{
    font-size:12px;
    color:#9b9b9b;
    display:block;
    padding:2px 25px 2px;
    font-family:"SimSun","宋体",'tahoma';
    text-decoration:none;
    width:176px;height:18px;  

  }

  .BtotalMenu .totalList li div .subList>li:hover a{
    background:#045321;
    color:#fff;
  }

/* 1 */
  .BtotalMenu .totalList .gnb_menu1 .subMenu1{
    width:200px;
    height:166px;
  }

  .BtotalMenu .totalList .gnb_menu1 .subMenu1 ul{ 
    margin:13px 0 0 6px;
  }
  
  .BtotalMenu .totalList .gnb_menu1 .subMenu1 .banner{
    position:absolute;
    top:96px;
  }
/*2*/
  .BtotalMenu .totalList .gnb_menu2 .subMenu2{
    width:200px;
    height:148px;
  }
  .BtotalMenu .totalList .gnb_menu2 .subMenu2 .banner{
    position:absolute;
    top:76px;
  }
  .BtotalMenu .totalList .gnb_menu2 .subMenu2 ul{  
    margin:13px 0 0 6px;
  }
/* 3 */
  .BtotalMenu .totalList .gnb_menu3 .subMenu3{
    width:720px;
    height:357px;
    left:130px;
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 dd{
    line-height:10px;
    margin:0
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 dd a{
    width:85px;
    height:18px;
    display:block;
    font-size:12px;
    color:#9b9b9b;
    font-family:"SimSun","宋体",'tahoma';
    text-decoration:none;
    margin-top:2px;
    padding:2px 2px;
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 .promoBanner{
    float:left;
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 dl:first-child{
    width:112px;
    float:left;
    margin-right:16px;
    padding:15px 0 0 27px;
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 dl:nth-child(2){
    float:left;
    margin-right:16px;
    padding-top:15px;
    
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 dl:nth-child(2) .iconNew{
    width:31px;
    height:15px;
    font-size:10px;
    text-align:center;
    background:#015d23;
    color:#fff;
    display:inline-block;
    font-family:"ngb";
    font-style:normal;
    border-radius:3px;
    margin-top:-2px;
    margin-left:-4px;
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 dl dt a{
    font-weight:bold;
    color:#045321;
    font-size:15px;
    text-decoration:none;
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 dl dt{
    margin-bottom:2px;
    
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 ul{ 
    width:122px;
    float:left;
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 ul li{
    width:122px;
    height:48px;
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 ul li a{
    margin:0
  }
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 .btnClose{
    position:absolute;
    left:690px;
    top:325px;
  }
  /* 购物鼠标悬停产品绿背景  */
  .BtotalMenu .totalList .gnb_menu3 .subMenu3 dd a:hover{
    background:#045321;
    color:#fff;
  }
  /* 4 */
  .BtotalMenu .totalList .gnb_menu4 .subMenu4{
    width:200px;
    height:186px;
  }
  .BtotalMenu .totalList .gnb_menu4 .subMenu4 .banner{
    position:absolute;
    top:114px;
  }
  .BtotalMenu .totalList .gnb_menu4 .subMenu4 ul{ 
    margin:13px 0 2px 6px;
  }
  .BtotalMenu .totalList .gnb_menu4 .subMenu4 ul li{
    margin-bottom:2px;
  }
  /* 5 */
  .BtotalMenu .totalList .gnb_menu5 .subMenu5{
    width:200px;
    height:206px;
  }
  .BtotalMenu .totalList .gnb_menu5 .subMenu5 .banner{
    position:absolute;
    top:134px;
  }
  .BtotalMenu .totalList .gnb_menu5 .subMenu5 ul{ 
    margin:13px 0 2px 6px;
  }
  .BtotalMenu .totalList .gnb_menu5 .subMenu5 ul li{
    margin-bottom:2px;
  }


  /* 登陆账号密码框 */
  .loginArea{
    width:290px;
    position: relative;
    left:645px;
    top:-38px;
  }
  .loginArea input{
    width:135px;
    height:24px;
    border:none;
    margin:5px;
    font-size:12px;
  }
  .loginArea span a img{
    position: absolute;
    top:3px;
  }

  /*每日签到*/
  .totalMenu .checkIN a{
    position: absolute;
    left:992px;
    top:5px;
  }



      /* 点击事件*/
  .totalMenu .quickShopping .quickShoppingWin{
    background:url("../../public/img/BG_quickShopping.gif")no-repeat ;
    width:780px;
    height:400px;
  }

  .menu .span{
    background:url("../../public/img/BG_quickShopping.gif")no-repeat ;
    width:780px;
    height:400px;
    position:absolute;
    display:block;
    z-index:1
  }
</style>