// JavaScript Document


/*var globeParam={      //全局参数的属性
	title:"NoticeHead",
	content:"NoticeContent",
	backUrl:null,
	aheadUrl:null,
	onConfirm:function(){},           //点击确认
	onCancel:function(){},            //点击取消   
	onInit:function(){}              //初始化时调用
};*/


//调整位置函数
function dialogPos(Objstr){
	var objW = $(window); //当前窗口
	var objC = $(Objstr); //对话框
	var brsW = objW.width();
 	var brsH = objW.height();
 	var sclL = objW.scrollLeft();
 	var sclT = objW.scrollTop();
	var curW = objC.width();
 	var curH = objC.height();

	//计算对话框居中时的左边距
	var left = sclL + (brsW - curW) / 2;

	//计算对话框居中时的上边距
	var top = sclT + (brsH - curH) / 2;

	//设置对话框在页面中的位置
	objC.css({ "left": left, "top": top });
}

//对话框操作函数
function dialogOperation(config,Objstr){
	
	config.onConfirm=(typeof config.onConfirm=="undefined")? function(){} : config.onConfirm //"onConfirm" event handler
	config.onCancel=(typeof config.onCancel=="undefined")? function(){} : config.onCancel //"onCancel" event handler
	config.onInit=(typeof config.onInit=="undefined")? function(){} : config.onInit //"onInit" event handler
	config.onDelete=(typeof config.onDelete=="undefined")? function(){} : config.onDelete //"onDelete" event handler
				
	$(".mask").show(); //显示背景色
	dialogPos(Objstr);
	$(Objstr).show(); //显示提示对话框
	
	config.onInit();
				  
	$(window).resize(function(){
		if(!( $(Objstr).is(":visible"))){
			return ;}
		dialogPos(Objstr);
			});
		   
	$(".title .close").click(function() {  //注册关闭图片点击事件
		$(Objstr).remove();                
 		$(".mask").remove();				  
		})
		
	$("#confirmButton").click(function() {//注册确定按钮点击事件
 		$(Objstr).remove();
		$(".mask").remove();
		config.onConfirm();
		})

	$("#cancelButton").click(function() {//注册取消按钮点击事件
		$(Objstr).remove();
		$(".mask").remove();
		config.onCancel();
		})
		
	$("#deleteButton").click(function() {//注册删除按钮点击事件
		$(Objstr).remove();
		$(".mask").remove();
		config.onDelete();
		})	
		
	}


 ;(function ($) {
	   $.fn.noticeDialog=function(settings){
		   
		   var config={
			   title:"NoticeHead",
			   content:"NoticeContent",
			   onConfirm:function(){},           //点击确认
			   onCancel:function(){},            //点击取消   
			   onInit:function(){}              //初始化时调用
			   }   //config格式定义
		   
		   if(settings){$.extend(config,settings);}
	
			function dialogInlit(){      //dialog 初始化
			   $("body").append("<div class=\"mask\"></div>");
			   $("body").append('<div class="dialog"></div>');
			   $(".dialog").append('<div class="title"><a class="close" href="#"><i class="icon-remove icon-white"></i></a>'+config.title+'</div>');
			   $(".dialog").append('<div class="content"><a href="#"><i class="icon-heart"></i></a><span>'+config.content+'</span></div>');
			   $(".dialog").append(' <div class="bottom"> <input id="confirmButton" type="button" value="确定" class="btn"/>&nbsp;&nbsp;<input id="cancelButton" type="button" value="取消" class="btn"/></div>');
				}	
   
		   $(this).each(function(){
			   // TO Do myCode
			   dialogInlit();      //dialog 初始化
			   dialogOperation(config,".dialog"); //dialog 操作
			   });
			   
			return $(this);   
		   }
	  })(jQuery);
	  
	  
//plugin remarkDialog
 ;(function ($) {
	   $.fn.remarkDialog=function(settings){
		   
		   var config={
			   title:"NoticeHead",
			   content:"NoticeContent",
			   onConfirm:function(){},           //点击确认 
			   };  
		    
		   if(settings){$.extend(config,settings);}
		   
		   function dialogInlit(){      //dialog 初始化
			   $("body").append("<div class=\"mask\"></div>");
			   $("body").append('<div class="dialog" id="remark"></div>');
			   $(".dialog").append('<div class="title"><a class="close" href="#"><i class="icon-remove icon-white"></i><a>'+config.title+'</div>');
			   $(".dialog").append('<div class="content">'+config.content+'</div>');
			   $(".dialog").append('<div class="bottom"><input id="confirmButton" type="button" value="确定" class="btn"/></div>');
				}	
 
		   return $(this).each(function(){
			   // TO Do myCode
			   dialogInlit();      //dialog 初始化
			   dialogOperation(config,"#remark"); //dialog 操作
			   });
		   }
	  })(jQuery);
	  
	  
//plugin editDialog	
 ;(function ($) {
	   $.fn.editDialog=function(settings){
		   
		   var config={
			   title:"NoticeHead",
			   name:"name",
			   username:"username", 
			   class:"class",
			   studentNo:"student number",
			   seqNo:"sequence number",
			   psw:"password",
			   onConfirm2:function(){},           //点击确认
			   onCancel:function(){},           //点击取消
			   onInit:function(){},
			   onDelete:function(){}  
			   };  
		    
		   if(settings){$.extend(config,settings);}
		   
		   function dialogInlit(){       //dialog 初始化
			   var trs='<tr><td>班级：<span><input type="text" value="'+config.class+'"/></span></td></tr>';
			       trs+='<tr><td>学号：<span><input type="text"  value="'+config.studentNo+'"/></span></td></tr>';
			   	   trs+='<tr><td>班内序号：<span><input type="text"  value="'+config.seqNo+'"/></span></td></tr>';
			   	   trs+='<tr><td>姓名：<span><input type="text"  value="'+config.name+'"/></span></td></tr>';
  			   	   trs+='<tr><td>用户名：<span><input type="text"  value="'+config.username+'"/></span></td></tr>';
  			       trs+='<tr><td>密码：<span><input type="text"  value="'+config.psw+'"/></span></td></tr>';
			   
			   $("body").append("<div class=\"mask\"></div>");
			   $("body").append('<div class="dialog" id="edit"></div>');
			   $(".dialog").append('<div class="title"><a class="close" href="#"><i class="icon-remove icon-white"></i><a>'+config.title+'</div>');
			   $(".dialog").append('<div class="content"><table></table></div>');
			   $(".dialog").append('<div class="bottom"><input id="cancelButton" type="button" value="取消" class="btn"/>&nbsp;&nbsp;<input id="confirmButton" type="button" value="确认修改" class="btn"/>&nbsp;&nbsp;<input id="deleteButton" type="button" value="删除用户" class="btn"/></div>');
			   $("#edit .content table").append(trs);
			   
			   $("#confirmButton").click(function() {//注册确定按钮点击事件
					config.onConfirm2(); //添加onConfirm2动作
					})
				}	
 
		   return $(this).each(function(){
			   // TO Do myCode
			   dialogInlit();      //dialog 初始化
			   dialogOperation(config,"#edit"); //dialog 操作
			   });
		   }
	  })(jQuery);  
	  
	  
	  
//plugin editTeacherDialog	
 ;(function ($) {
	   $.fn.editTeacherDialog=function(settings){
		   
		   var config={
			   title:"NoticeHead",
			   name:"name",
			   username:"username", 
			   psw:"password",
			   arr1:[],
			   arr2:[],
			   onConfirm2:function(){},           //点击确认
			   onCancel:function(){},           //点击取消
			   onInit:function(){},
			   onDelete:function(){}  
			   };  
		    
		   if(settings){$.extend(config,settings);}
		   
		   function dialogInlit(){       //dialog 初始化
			   var trs='<tr><td>教师姓名：<span><input type="text" value="'+config.name+'"/></span></td></tr>';
			       trs+='<tr><td>用户名：<span><input type="text"  value="'+config.username+'"/></span></td></tr>';
			   	   trs+='<tr><td>密码：<span><input type="text"  value="'+config.psw+'"/></span></td></tr>';
			   	   trs+='<tr><td>所授班级：<span><select id="all_list" multiple="multiple"></select><div class="line"><a href="javascript:void(0)" class="plus"><i class="icon-forward"></i></a><br/><a href="javascript:void(0)" class="minus"><i class="icon-backward"></i></a></div><select id="selected_list" multiple="multiple"></select></span></td></tr>';
			   
			   $("body").append("<div class=\"mask\"></div>");
			   $("body").append('<div class="dialog" id="editTeacher"></div>');
			   $(".dialog").append('<div class="title"><a class="close" href="#"><i class="icon-remove icon-white"></i><a>'+config.title+'</div>');
			   $(".dialog").append('<div class="content"><table></table></div>');
			   $(".dialog").append('<div class="bottom"><input id="cancelButton" type="button" value="取消" class="btn"/>&nbsp;&nbsp;<input id="confirmButton" type="button" value="确认修改" class="btn"/>&nbsp;&nbsp;<input id="deleteButton" type="button" value="删除用户" class="btn"/></div>');
			   $("#editTeacher .content table").append(trs);
			   
			   for(var i=0;i<config.arr1.length;i++){
				   $("#editTeacher #all_list").append("<option>"+config.arr1[i]+"</option>");
				   }
			   for(var i=0;i<config.arr2.length;i++){
				   $("#editTeacher #selected_list").append("<option>"+config.arr2[i]+"</option>");
				   }  
				   
			   $("#editTeacher a.plus").click(function(){
					if($("#editTeacher #all_list option:selected").length>0){
						$("#editTeacher #all_list option:selected").each(function(){
							$("#editTeacher #selected_list").append("<option>"+$(this).text()+"</option>");
							$(this).remove();
							})
						}
				})
		
				$("#editTeacher a.minus").click(function(){
					if($("#editTeacher #selected_list option:selected").length>0){
						$("#editTeacher #selected_list option:selected").each(function(){
							$("#editTeacher #all_list").append("<option>"+$(this).text()+"</option>");
							$(this).remove();
							})
						}
					})	
		
				$("#editTeacher #all_list").dblclick(function(){
					$(this).find("option:selected").clone().appendTo($("#editTeacher #selected_list"));
					$(this).find("option:selected").remove();
					})
		
				$("#editTeacher #selected_list").dblclick(function(){
					$(this).find("option:selected").clone().appendTo($("#editTeacher #all_list"));
					$(this).find("option:selected").remove();
					})		   
				    
				var selArr=[];
				
			   $("#confirmButton").click(function() {//注册确定按钮点击事件
			   		$("#editTeacher #selected_list option").each(function(){
						selArr.push($(this).text());
						})	
						
					config.onConfirm2(selArr); //添加onConfirm2动作
					})
				}	
 
		   return $(this).each(function(){
			   // TO Do myCode
			   dialogInlit();      //dialog 初始化
			   dialogOperation(config,"#editTeacher"); //dialog 操作
			   });
		   }
	  })(jQuery);	
	  
	  
//plugin editPositionDialog	
 ;(function ($) {
	   $.fn.editPositionDialog=function(settings){
		   
		   var config={
			   title:"NoticeHead",
			   arr:[],
			   onConfirm2:function(){},           //点击确认
			   onCancel:function(){},           //点击取消
			   onInit:function(){}
			   };  
		    
		   if(settings){$.extend(config,settings);}
		   
		   function dialogInlit(){       //dialog 初始化
		   
			   var lis='';
			   for(var i=0;i<config.arr.length;i++){
				   lis+='<li>'+config.arr[i]+'</li>';
				   }
			   $("body").append("<div class=\"mask\"></div>");
			   $("body").append('<div class="dialog" id="editPosition"></div>');
			   $(".dialog").append('<div class="title"><a class="close" href="#"><i class="icon-remove icon-white"></i><a>'+config.title+'排序</div>');
			   $(".dialog").append('<div class="content"><ul id="sortlist"></ul></div>');
			   $(".dialog").append('<div class="bottom"><input id="cancelButton" type="button" value="取消" class="btn"/>&nbsp;&nbsp;<input id="confirmButton" type="button" value="保存修改" class="btn"/></div>');
			   $("#editPosition #sortlist").append(lis);
			   $("#editPosition #sortlist").sortable();
			   
			   var sortedArr=[];//排序之后
			   $("#confirmButton").click(function() {//注册确定按钮点击事件
			        $("#editPosition #sortlist li").each(function(){
						sortedArr.push($(this).text())
						})	
					config.onConfirm2(sortedArr); //添加onConfirm2动作
					})
				}	
 
		   return $(this).each(function(){
			   // TO Do myCode
			   dialogInlit();      //dialog 初始化
			   dialogOperation(config,"#editPosition"); //dialog 操作
			   });
		   }
	  })(jQuery);		    