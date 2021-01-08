console.log("加载成功");

//侧边导航栏
$('.icon').onclick=function(){
    $('.static').style.display=none;
    $('.hover').style.display=block;
}


// 倒计时
var startTime = new Date();
    startTime.setFullYear(2021,1,5);
    startTime.setHours(22);
    startTime.setMinutes(0);
    startTime.setSeconds(0);  
var EndTime=startTime.getTime();

function GetRTime(){
    //定义方法
        var NowTime = new Date();
        //定义参数可返回当天的日期和时间
        var nMS = EndTime - NowTime.getTime();
        var nD = Math.floor(nMS/(1000 * 60 * 60 * 24));
        //定义参数 获得天数
        var nH = Math.floor(nMS/(1000*60*60)) % 24;
        //定义参数 获得小时
        var nM = Math.floor(nMS/(1000*60)) % 60;
        //定义参数 获得分钟
        var nS = Math.floor(nMS/1000) % 60;
        //定义参数 获得秒钟
        if (nMS < 0){
            $(".desc").hide();
            $(".daoend").show();
        }else{
        //否则
           $(".desc").show();
           //天数展开
           $(".daoend").hide();
           //活动截止时间隐藏
           //显示天数
           $(".RemainH").text(nH);
           //显示小时
           $(".RemainM").text(nM);
           //显示分钟
           $(".RemainS").text(nS);
           //显示秒钟
        }
    }
    $(document).ready(function () {
        var timer_rt = window.setInterval("GetRTime()", 1000);
    });


     //返回顶部按钮显隐
     $(window).scroll(function(){
        // console.log(111)
      if($(window).scrollTop()>600){
          $('.home-tool-bar a:nth-child(6)').css({
              'display':'flex',
          })
      }else{
        $('.home-tool-bar a:nth-child(6)').css({
            'display':'none',
        })
      }
    })
    $('.home-tool-bar a:nth-child(6)').click(function(){
        $('body,html').animate({scrollTop:0},1000); 
    //    console.log( screenTop)
    })
    $('.home-tool-bar a:nth-child(2)').click(function(){
        // console.log("11111")
        location.href='./regsiter.html' 
    })
    $('.home-tool-bar').on('mouseenter', function () {
        $('.icon').removeClass('static').addClass('hover');
    })



    //显示登录或退出状态
function loginStatus() {
	if (localStorage.getItem('status')) {
		$('.loginstatus').html(`用户${localStorage.getItem('status')}`);
		$('.tuichulogin').html(`退出登录`);

	} else {
		$('.loginstatus').html('登录');
	}
}
loginStatus();
$('.tuichulogin').click(function () {
	localStorage.setItem('status', '');
	location.href = './index.html';
	$('.tuichulogin').html(`消息通知`);
})
//小米闪购ul定位变化
function splist() {
	var spleft = 0;
	function fn() {
		$('.djssplist').animate({ left: spleft }, 800);
		spleft -= 992;
		if (spleft < -1984) {
			spleft = 0;
		}
	}
	var timer2 = setInterval(fn, 5000);
}
splist()