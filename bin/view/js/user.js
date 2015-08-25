// JavaScript Document

//edit user info
$(function(){
    function save_user_profile()
    {
        var UserID = document.getElementById("UserID").value;
        var UserName = document.getElementById("UserName").value;
        var Phone = document.getElementById("Phone").value;
        var Email = document.getElementById("Email").value;
        var Birthday = document.getElementById("Birthday").value;

        var request = "UserID="+UserID+"&UserName="+UserName+"&Phone="+Phone+"&Email="+Email+"&Birthday="+Birthday;
        
        $.getJSON("../php/update_user_data.php",request,function(response){
           if(response.status !=5) alert("error!");
        });
    }
	$(".clickedit a").click(function(){
		$(".clickedit").hide();
		$(".pleaseedit").show();
		$(".info").hide();
		$(".info2").show();
		})
		
  	$(".info2 #button2").click(function(){  //取消
		$(".pleaseedit").hide();
		$(".clickedit").show();
		$(".info2").hide();
		$(".info").show();
		})	
		
	$(".info2 #button1").click(function(){  //确定
		//此处信息保存
        save_user_profile();
        ////////////////////////////////////////////////
		$(this).noticeDialog({
			title:"提示信息",
			content:"信息修改成功！",
			onInit:function(){       //显示对话框时触发
				$(".dialog .bottom").hide();
				setTimeout(function(){
					$(".dialog").remove();
					$(".mask").remove();
					},1500)}
			})
			
		$(".pleaseedit").hide();
		$(".clickedit").show();
		$(".info2").hide();
		$(".info").show();
        window.location.href = "../Student/user_profile.php"; 
		})		
	})
	
//psw_change
$(function(){
	//current
	$("#psw_change_content input.cc").focus(function(){
		$(this).css({"background":"#E6F1D8","border-color":"#98D0B9"});
		$(this).siblings("span.currentCode").text("请输入当前密码！").css({"background":"#E6F1D8","color":"black"}).show();
		})
	$("#psw_change_content input.cc").blur(function(){
		$(this).css({"background":"white","border-color":"#ccc"});
		if($(this).val()==""){
			$(this).siblings("span.currentCode").text("密码错误").css({"background":"#FCDAD5","color":"#555555"});
			}else{
				$(this).siblings("span.currentCode").text("").hide();
				}
		})
	//codeOne		
	$("#psw_change_content input.nc1").focus(function(){
		$(this).css({"background":"#E6F1D8","border-color":"#98D0B9"});
		$(this).siblings("span.newCodeOne").text("请输入新的密码！").css({"background":"#E6F1D8","color":"black"}).show();
		})
	$("#psw_change_content input.nc1").blur(function(){
		if($(this).val()==""){
			$(this).css({"background":"#FCDAD5","border-color":"#E54646"});
			$(this).siblings("span.newCodeOne").text("密码不能为空").css({"background":"#FCDAD5","color":"#555555"});
			}else{
				$(this).css({"background":"white","border-color":"#ccc"});
				$(this).siblings("span.newCodeOne").text("正确");
			}
		})
		
	//codeTwo	
	$("#psw_change_content input.nc2").focus(function(){
		$(this).css({"background":"#E6F1D8","border-color":"#98D0B9"});
		$(this).siblings("span.newCodeTwo").text("请再次输入密码！").css({"background":"#E6F1D8","color":"black"}).show();
		})
	$("#psw_change_content input.nc2").blur(function(){
		if($(this).val()==""||$(this).val()!=$("#psw_change_content input.nc1").val()){
			$(this).css({"background":"#FCDAD5","border-color":"#E54646"});
			$(this).siblings("span.newCodeTwo").text("两次输入密码不一致，请重新输入").css({"background":"#FCDAD5","color":"#555555"});
			}else{
				$(this).css({"background":"white","border-color":"#ccc"});
				$(this).siblings("span.newCodeTwo").text("正确");
			}
		})
		
	//button
	$("#psw_change_content input[type=button]").click(function(){

		if($("#psw_change_content input.nc1").val()==""){
				$("#psw_change_content input.nc1").css({"background":"#FCDAD5","border-color":"#E54646"});
				$("#psw_change_content span.newCodeOne").text("密码不能为空").css({"background":"#FCDAD5","color":"#555555"}).show();
				}else if($("#psw_change_content input.nc1").val()!=$("#psw_change_content input.nc2").val()){
		    		if($("#psw_change_content input.cc").val()==""){
						$("#psw_change_content input.cc").css({"background":"#FCDAD5","border-color":"#E54646"});
						$("#psw_change_content span.currentCode").text("密码错误").css({"background":"#FCDAD5","color":"#555555"}).show();
						}
			
					$("#psw_change_content input.nc2").css({"background":"#FCDAD5","border-color":"#E54646"});
					$("#psw_change_content span.newCodeTwo").text("两次输入密码不一致，请重新输入").css({"background":"#FCDAD5","color":"#555555"}).show();
					alert("不提交！！");//
				}
				else
		       {
					//alert("fsdf");
					var userid = document.getElementById("userid").value
					var old_pwd  = document.getElementById("opwd").value;
					var new_pwd = document.getElementById("npwd").value;
					var new_pwd_2 = document.getElementById("npwd2").value;
					

					var request ="userid="+userid+"&old_pwd="+old_pwd+"&new_pwd="+new_pwd;
					
					 $.getJSON("../php/modify_pwd.php",request,function(response){
					      if(response.status !=5 ) alert('密码错误！');
						  else  alert('修改密码成功');
					 });

					
				}
				/*else if($("#psw_change_content input.cc").val()!="123456"){//假设密码为123456
					$("#psw_change_content input.cc").css({"background":"#FCDAD5","border-color":"#E54646"});
			   	 	$("#psw_change_content span.currentCode").text("密码错误").css({"background":"#FCDAD5","color":"#555555"}).show();
					alert("密码错 不提交")
				}
				else{
					$("#psw_change_content input.nc1,#psw_change_content input.nc2").css({"background":"white","border-color":"#ccc"});
				    $("#psw_change_content span.newCodeOne,#psw_change_content span.newCodeTwo").text("正确").css({"background":"#E6F1D8","color":"black"});
					alert("密码为123456提交")//提交动作
					}*/
		})					
	})
	
	
	
	
/*for Teacher
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/	
//user_tabs
$(function(){
	$("#user_tabs ul li").click(function(){
		$(this).siblings().removeClass("current");
		$(this).addClass("current");
		
		var divInd=$(this).find("a").attr("class");
		$("#user_tabs div.tabdiv").removeClass("current");
		$("#user_tabs div#"+divInd).addClass("current");
		//alert(divInd) 
		})
	})	
	
//user edit
$(function(){
	$("#tab-3 table.list td a").click(function(){
		$(this).editDialog({
			 title:"编辑学生用户",
			 name:"黄小明",
			 username:"小明", 
			 class:"2008211303",
			 studentNo:"08211200",
			 seqNo:"14",
			 psw:"123456",
			 onConfirm2:function(){  //点击确定
				 var str=$("#edit input:eq(0)").val()+" "; 
				     str+=$("#edit input:eq(1)").val()+" ";
					 str+=$("#edit input:eq(2)").val()+" ";
					 str+=$("#edit input:eq(3)").val()+" ";
					 str+=$("#edit input:eq(4)").val()+" ";
					 str+=$("#edit input:eq(5)").val()+" ";
				 alert(str)
				 },    
			 onCancel:function(){},           //点击取消
			 //onInit:function(){},
			 onDelete:function(){}  
			});
		})
	})	
	
	
//tab-1 addteacher  
$(function(){                     
    /*var arr=["班级1","班级2","班级3","班级4","班级5","班级6","班级7","班级8"]; //data from db

	
	for(var i=0;i<arr.length;i++){                     
		$(".addteacher #all_list").append("<option>"+arr[i]+"</option>");
		}*/
		
	$(".addteacher a.plus").click(function(){
		if($(".addteacher #all_list option:selected").length>0){
			$(".addteacher #all_list option:selected").each(function(){
				$("#tab-1 .addteacher #selected_list").append("<option>"+$(this).text()+"</option>");
				$(this).remove();
				})
			}
		})
		
	$(".addteacher a.minus").click(function(){
		if($(".addteacher #selected_list option:selected").length>0){
			$(".addteacher #selected_list option:selected").each(function(){
				$(".addteacher #all_list").append("<option>"+$(this).text()+"</option>");
				$(this).remove();
				})
			}
		})	
		
	$(".addteacher #all_list").dblclick(function(){
		$(this).find("option:selected").clone().appendTo($(".addteacher #selected_list"));
		$(this).find("option:selected").remove();
		})
		
	$(".addteacher #selected_list").dblclick(function(){
		$(this).find("option:selected").clone().appendTo($(".addteacher #all_list"));
		$(this).find("option:selected").remove();
		})		
	})		
	
//teacher edit

/*$(function(){
	$("#tab-2 .teacherlist .list td a").click(function(){
		var classArr=["班级5","班级6","班级7"];  //已选的初始班级
		$(this).editTeacherDialog({
			 title:"编辑教师用户",
			 name:"黄小明",
			 username:"小明",
			 psw:"123456",
			 arr1:["班级1","班级2","班级3","班级4"],
			 arr2:classArr,
			 onConfirm2:function(arr){  //点击确定
			     var str=$("#editTeacher .content input:eq(0)").val()+",";
				 str+=$("#editTeacher .content input:eq(1)").val()+",";
				 str+=$("#editTeacher .content input:eq(2)").val()+",";
				 alert(str+arr);
				 },    
			 onCancel:function(){},           //点击取消
			 //onInit:function(){},
			 onDelete:function(){}  
			});
		})
	})		*/