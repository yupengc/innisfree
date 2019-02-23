# innisfree

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<template>
  <div id="wrap" class="sub_wrap">
    <!-- header -->
    <my-header></my-header>
    <!-- body -->
    <div class="container">
      <!-- 当前所处位置区 -->
      <div class="locationArea">
        <p>
          <span class="home"></span>
          <span class="pathImg"></span>
          <span class="path">
            <a href="javascript:;">
              登录/会员注册
            </a>
          </span>
          <span class="pathImg"></span>
          <span class="path">
            <a href="javascript:;">
              登录
            </a>
          </span>
        </p>
      </div>
      <!-- 会员信息 -->
      <div class="memberArea">
        <h2 class="memberTitle">
          <img src="../../public/img/lnbTitle_util.gif" alt="">
        </h2>
        <ul class="memberMenu">
          <li>
            <a href="javascript:;">
              <img src="../../public/img/lnbUtil1_on.gif" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/img/lnbUtil2.gif" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/img/lnbUtil3.gif" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/img/lnbUtil4.gif" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/img/lnbUtil6.gif" alt="">
            </a>
          </li>
        </ul>
      </div>
      <!-- 登录主界面 -->
      <div class="loginPage">
        <div class="pageTitle">
          <h3>
            <img src="../../public/img/h2_login.gif" alt="">
          </h3>
          <p>
            <img src="../../public/img/desc_login.gif" alt="">
          </p>
        </div>
        <div class="pageBox">
          <form class="loginFrm" action="">
            <h4>
              <img src="../../public/img/title_login.gif" alt="">
            </h4>
            <div class="typing_info">
              <ul>
                <li class="font"><label>邮箱地址/手机号码</label></li>
                <li class="input"><input type="text" class="input-text"></li>
              </ul>
              <ul>
                <li class="font"><label>密码</label></li>
                <li class="input"><input type="password" class="input-text"></li>
              </ul>
              <span>
                <input id="saveId"  type="checkbox" class="input-check">
                <label for="saveId" class="lable-save">保存邮箱/手机号</label>
              </span>
              <a href="javascript:;">
                <img src="../../public/img/btn_login.gif" alt="">
              </a>
            </div>
            <ul class="loginCaution">
              <li>- 输入电子邮地址和密码进行登录时，请务必区分大小写。</li>
              <li>- IE6.0用户如出现登录后页面无反应的情况，请刷新页面或点击网站其它页面。</li>
            </ul>
            <dl class="loginSNS">
              <dt>使用合作网站账号登录</dt>
              <dd>
                <a href="javascript:;">
                  <img src="../../public/img/ico_sns_weibo.gif" alt="">
                </a>
              </dd>
              <dd>
                <a href="javascript:;">
                  <img src="../../public/img/ico_sns_wechat.gif" alt="">
                </a>
              </dd>
              <dd>
                <a href="javascript:;">
                  <img src="../../public/img/ico_sns_alipay.gif" alt="">
                </a>
              </dd>
              <dd>
                <a href="javascript:;">
                  <img src="../../public/img/ico_sns_qq.gif" alt="">
                </a>
              </dd>
            </dl>
          </form>
        </div>
        <div class="loginNote">
          <img src="../../public/img/txt_loginNote.gif" alt="" usemap="#loginNote">
          <map name="loginNote">
            <area shape="rect" coords="620,14,759,36" href="javascript:;" alt="">
            <area shape="rect" coords="665,89,759,111" href="javascript:;" alt="">
          </map>
        </div>
      </div>
    </div>
    
    <!-- footer -->
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  
  *{margin: 0;padding: 0;}

  .container {
    width:980px;
    margin: 0 auto;
    padding:0;
  }
  .container a {
    color:#666666;
    font-size:12px;
    font-family: "SimSun","宋体",'tahoma';
  }
  .container li {
    list-style: none;
  }
  .sub_wrap footer {
    margin-top:90px;
  }


  /* 所处区域导航 */
  .container .locationArea {
    margin-top:8px;
    border-bottom: 1px solid #e0e0e0;
  }
  .container .locationArea span {
    margin:0 2px;
  }
  .container .locationArea .home {
    width:53px;
    height:17px;
    display: inline-block;
    background:url('../../public/img/BG_home.png')no-repeat ;
    margin-bottom:-3px;
    margin-right:10px;
  }
  .container .locationArea .pathImg {
    display: inline-block;
    width:10px;
    height:5px;
    background:url('../../public/img/BG_path.gif')no-repeat;
    margin-bottom: 2px;
  }
  

  /*左处会员信息栏*/
  .container .memberArea {
    background:url('../../public/img/BG_lnbUtil.gif')no-repeat;
    height:298px;
    width:178px;
    margin-top:18px;
  }
  .container .memberArea ul {
    margin-left:12px;
    width:178px;
  }


  /*登陆主界面*/
  .loginPage {
    width:780px;
    height:688px;
    margin-top:-300px;
    margin-left:200px;
  }
  .loginPage li {
    list-style:none;
  }

  .loginPage .pageBox {
    height:307px;
    padding:15px 100px 0 295px;
    background: url('../../public/img/BG_loginBox.gif')no-repeat;
    font-size:12px;
    color:#666666;
    font-family: "SimSun","宋体",'tahoma'
  }
  .loginPage .pageBox .loginFrm h4 {
    border-bottom: 1px solid #c3c3c3;
    padding-bottom: 19px;
  }


  /*账号密码输入框*/
  .loginPage .pageBox .loginFrm .typing_info {
    padding: 10px 0;
    margin:0;
    height:100px
  }
  .loginPage .pageBox .loginFrm .typing_info ul {
    margin-bottom: 0;
    width:300px;
    padding:2px 0;
  }
  .loginPage .pageBox .loginFrm .typing_info .font {
    width:125px;
    display: table-cell;
  }
  .loginPage .pageBox .loginFrm .typing_info .input {
    display: table-cell;
    width:175px;
  }
  .loginPage .pageBox .loginFrm .typing_info .input-text {
    width:100%;
    height:22px;
    border:1px solid #dedede;
  }

  /*记住密码及登录按钮*/
  .loginPage .pageBox .loginFrm .typing_info span {
    left:125px;
    position: relative;
    top:-18px;
  }
  .loginPage .pageBox .loginFrm .typing_info .lable-save {
    cursor: pointer;
    vertical-align:middle;
    margin-left:8px;
  }

  .loginPage .pageBox .loginFrm .typing_info a {
    position:relative;
    left:200px;
    top:-62px;
  }


  /*提示文字*/
  .loginPage .pageBox .loginFrm .loginCaution li {
    width:445px;
    line-height: 20px;
  }
  .loginPage .pageBox .loginFrm .loginCaution {
    margin-bottom: 8px;
  }


  /*SNS*/
  .loginPage .pageBox .loginFrm .loginSNS {
    border-top:1px solid #c3c3c3;
    padding-top:8px;
    height:33px;
    width:385px;
  }
  .loginPage .pageBox .loginFrm .loginSNS dt {
    width:123px;
  
  }
  .loginPage .pageBox .loginFrm .loginSNS dd {
    vertical-align:middle;
    display: inline-block;
    margin-left:18px;
    position: relative;
    left:120px;
    top:-21px;
  }
  

  /*Note界面*/
  .loginPage .loginNote {
    margin-top:30px; 
  }


</style>
