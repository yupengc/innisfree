<template>
  <header>
    <div id="headerMenu" >
          <!-- 顶部菜单 -->
      <div class="utilMenu">
        <p class="welcomeMsg">
          <img src="../../public/img/txt_welcomeMsg.png" alt="">
        </p>
        <ul class="menu">
          <li>
            <span>
              <span>广东省</span>
            </span>
          </li>
          <li>
            <a href="javascript:;">
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
              <input type="text" name="value" class="searchInput">
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
            <a href="javascript:;">
              <img src="../../public/img/gnb_quickShopping.gif" alt="">
            </a>
            
            <div></div>
          </div>
          <!-- List菜单 -->
          <ul class="totalList">
            <li>
              <a href="javascript:;">
                <strong>品牌简介</strong>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <strong>济州岛故事</strong>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <strong>购物</strong>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <strong>活动</strong>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <strong>社区</strong>
              </a>
            </li>
          </ul>
          <!-- 快捷登录区域 -->
          <div class="loginArea">
            <form loginFrm>
              <span class="loginId">
                <input type="text" id="id">
              </span>
              <span class="loginPwd">
                <input type="password" id="pwd">
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
</template>

<script>

export default {
  
}
</script>

<style>

  *{
    margin:0;
    padding:0;
  }
  body{
    background:#fff
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
    
  }
  .utilMenu .menu li{
    font-weight:bold;
    font-size:11px;
    color:#666666;
    border-right:1px solid #666666;
    padding-right:6px;
    padding-left:6px;
  }
  .utilMenu>.menu li:first-child{
    margin-top:2px;
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

  /* 下快捷导航 */
  .QMButtom li {
    border-right:1px solid #666666;
  }
  .QMButtom li a{
    font-size:11px;
    color:#666666;
    font-family:"Simsum","宋体","tahoma";
  }
  /* 搜索框 */
  .quickMenu .search{
    width:400px;
    height:40px;
    background:url('../../public/img/BG_search_170717.png')no-repeat;
    
  }
  .quickMenu .search img{
    float:right;
    margin:-34px -15px;
  }
  .quickMenu .search input{
    width:260px;
    margin:5px 35px;
    border:0px solid #f5f5f5;
    background:#f5f5f5
  }
  /* 探店指南 */
  .headerAd{
    float:right;
    cursor:pointer;
    margin-top:-50px;
  }

  /* 快速购物通道 */
  header .BtotalMenu {
    background:#045321; 
    width:100%;
    height:40px;
  }
  .totalList a{
    color:#000;
    margin-left:10px;
  }
</style>