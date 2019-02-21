$(function(){
//获得地址栏中的search部分
//将search按=切割，取第2部分
var search=location.search;
if(search!==""){
var lid=search//?lid=9
        .split("=")//[?lid, 9]
        [1];//9
$.ajax({
  url:"http://localhost:3000/details",
  type:"get",
  data:{lid},
  dataType:"json",
  success:function(output){
  //从output大对象中解构出三个小部分分别使用
    var {product,specs,pics}=output;
  //1. 将商品基本信息显示到右上方的对应元素中
    $("#details>h6:first")
    .html(product.title)
    .next().children("a")
    .html(product.subtitle);
    if(product.price===undefined)
      product.price=0;
    $("#details>div:first>div>h2")
    .html(`¥${product.price.toFixed(2)}`)
    .parent().next().children().last()
    .html(product.promise);
    //2. 将规格列表动态生成到右边列表元素中
    //html: 72行附近，找到4个a
    //      删除后三个a，注释第一个a
    //      删除第一个a中多余的一个class
    //      复制第一个a的HTML片段
    var html="";
    for(var sp of specs){
      //sp:{lid:商品编号, spec: 规格名称 }
      //将复制的第一个a的HTML片段粘贴到此
      html+=`<a class="btn btn-sm btn-outline-secondary ${sp.lid==lid?'active':''}" href="product_details.html?lid=${sp.lid}">${sp.spec}</a>`;
    }
    //查找#details>div:eq(1)>div:eq(1)
    $("#details>div:eq(1)>div:eq(1)")
    .html(html);
    //3. 将图片列表动态生成到左边的放大镜中
    //3.1 将小图片生成列表，放入放大镜的底部
    var html="";
    //遍历图片列表数组中的每张图片记录
    for(var p of pics){
      //p:{sm: , md: , lg: }
      //复制details.html中36~38行<li>片段到此
      html+=`<li class="float-left p-1">
        <img src="${p.sm}" data-md="${p.md}" data-lg="${p.lg}">
      </li>`;
    }
    $("#preview>div>div:last ul")
    .html(html)
    .css("width",62*pics.length);
    //3.2 取出第一张图片的中图片版本，放在中图片中
    $("#preview>div>img")
    .attr("src",pics[0].md);
    //3.3 取出第一张图片的大图片版本，放在右边的大图中
    //删除html中id="div-lg"元素上的d-none
    $("#div-lg")
    .css("background-image",`url(${pics[0].lg})`)
    /*放大镜效果*/
    //小图片列表左右移动:
    //如果pics的图片张数<=4，就要禁用右边按钮
    if(pics.length<=4)
      $("#preview>div>div:last>img:last")
      .addClass("disabled");
    //查找要修改的ul
    var $ulImgs=$("#preview>div>div:last ul")
    //定义moved保存已经左移的li的个数
    var moved=0;
    //单击右边按钮向左移动一个li
    $("#preview>div>div:last>img:last")
    .click(function(){
      var $btnRight=$(this);
      //如果当前按钮不是禁用的
      if(!$btnRight.is(".disabled")){
        moved++;//左移的li个数+1
        //ul的marginLeft永远等于moved*-62
        $ulImgs.css("margin-left",-62*moved);
        //如果多余的li已经移动完了,就禁用当前按钮
        if(pics.length-moved==4)
          $btnRight.addClass("disabled");
        //只要右边按钮点了一下，左边按钮一定启用
        $btnRight.prevAll("img").removeClass("disabled")
      }
    })
    //点击左边按钮向右移动一个li
    $("#preview>div>div:last>img:first")
    .click(function(){
      var $btnLeft=$(this);
      //如果当前按钮不是禁用的
      if(!$btnLeft.is(".disabled")){
        moved--;//左移的li个数-1
        //ul的marginLeft永远等于moved*-62
        $ulImgs.css("margin-left",-62*moved);
        //如果左移的li个数为0,就禁用当前按钮
        if(moved==0)
          $btnLeft.addClass("disabled");
        //只要左边按钮点了一下，右边按钮一定启用
        $btnLeft.nextAll("img").removeClass("disabled")
      }
    })
    /*鼠标进入小图片，切换中图片和大图片*/
    //保存中图片元素:
    var $mImg=$("#preview>div>img");
    var $lgDiv=$("#div-lg");
    //利用冒泡: 为ulImgs绑定鼠标进入
    //当鼠标进入img时，才触发
    $ulImgs.on("mouseenter","img",function(){
    //获得当前img的data-md和data-lg，分别给中图片和大图片设置新路径
      var $img=$(this);
      $mImg.attr("src",$img.attr("data-md"));
      $lgDiv.css(
        "background-image",
        `url(${$img.attr("data-lg")})`
      );
    })
    /*鼠标进出中图片，控制遮罩层和大图片的显示隐藏*/
    //查找遮罩层:
    var $mask=$("#mask");
    //查找supermask: 作为中图片和半透明遮罩层上层的保护层
    var $smask=$("#super-mask");
    //为superMask绑定鼠标进入事件和鼠标移出事件
    $smask.hover(
      function(){//当鼠标进入时，都显示
        $mask.removeClass("d-none");
        $lgDiv.removeClass("d-none");
      },
      function(){//当鼠标移出时，都隐藏
        $mask.addClass("d-none");
        $lgDiv.addClass("d-none");
      }
    )
    //为superMask绑定鼠标移动事件
    .mousemove(function(e){
      var offsetX=e.offsetX;
      var offsetY=e.offsetY;
      var top=offsetY-175/2;
      var left=offsetX-175/2;
      //如果top或left<0,就拉回0
      //如果top或left>175,就拉回175
      if(top<0) top=0; else if(top>175) top=175
      if(left<0) left=0;
      else if(left>175) left=175;
      $mask.css({top,left});
      //让lgDiv的背景图片位置跟随top和left移动
      $lgDiv.css(
        "background-position",
        `-${16/7*left}px -${16/7*top}px`
      )
    })
  }
})//测试: live server运行: 
  //http://127.0.0.1:5500?lid=9
}
})