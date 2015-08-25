// JavaScript Document
$(function(){
	
	function loginLoc(){          //adjust the location of login box
		var  objW = $(window); //当前窗口
		var objC = $(".login_box"); //对话框
        var brsW = objW.width();

        var brsH = objW.height();

        var sclL = objW.scrollLeft();

        var sclT = objW.scrollTop();

        var curW = objC.width();

        var curH = objC.height();

                //计算对话框居中时的左边距

        var left = sclL + (brsW - curW) *0.9;
	

                //计算对话框居中时的上边距

       var top = sclT + (brsH - curH) *0.7 ;

                //设置对话框在页面中的位置

       objC.css({ "left": left, "top": top });
		}
		
		
		loginLoc();
		
		$(window).resize(function(){
			loginLoc();
			});
			
			
		//alert(350*0.65);	
		
	});
	
	
$(function(){
	$("#login-alt .left span img").click(function(){
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		$("#login-alt table").css("background",$(this).parent().css("background"));
		})
	$("#login-alt .left .physics img").click(function(){
		$("#login-alt .left .physics").css("box-shadow","-2px -2px 5px #333");
		$("#login-alt .left .computer").css("box-shadow","-2px 2px 5px #333 inset");
		})
	$("#login-alt .left .computer img").click(function(){
		$("#login-alt .left .physics").css("box-shadow","-2px -2px 5px #333 inset");
		$("#login-alt .left .computer").css("box-shadow","-2px 2px 5px #333");
		})		
	})	