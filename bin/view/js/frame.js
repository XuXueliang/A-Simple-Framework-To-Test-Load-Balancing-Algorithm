// JavaScript Document

//navbox hide show
$(function(){
	$("#frame #main .nav .navbox .boxhead").click(function(){
		if($(this).siblings(".boxcontent").is(":visible")){
		    $(this).find("span").removeClass("icon-minus").addClass("icon-plus");
			$(this).siblings(".boxcontent").slideUp(1000);
			if($(this).parent().attr("id")=="personal_info"){
				$("#frame #main .nav #exp_list .boxcontent").animate({height:"540px"},1000);
				}	
			}else{
				$(this).siblings(".boxcontent").slideDown(1000);
				$(this).find("span").removeClass("icon-plus").addClass("icon-minus");
				if($(this).parent().attr("id")=="personal_info"){
					$("#frame #main .nav #exp_list .boxcontent").animate({height:"440px"},1000);
					}
				}
		})
	})
	
//navcontent ----->>plugin ddaccordion.js
ddaccordion.init({
	headerclass: "submenuhead", //Shared CSS class name of headers group
	contentclass: "submenu", //Shared CSS class name of contents group
	revealtype: "click", //Reveal content when user clicks or onmouseover the header? Valid value: "click", "clickgo", or "mouseover"
	mouseoverdelay: 200, //if revealtype="mouseover", set delay in milliseconds before header expands onMouseover
	collapseprev: true, //Collapse previous content (so only one open at any time)? true/false 
	defaultexpanded: [0], //index of content(s) open by default [index1, index2, etc] [] denotes no content
	onemustopen: false, //Specify whether at least one header should be open always (so never all headers closed)
	animatedefault: false, //Should contents open by default be animated into view?
	persiststate: true, //persist state of opened contents within browser session?
	toggleclass: ["", ""], //applied to the header when it's collapsed and expanded, respectively ["class1", "class2"]
	togglehtml: ["prefix", "<i class='icon-chevron-right'></i>", "<i class='icon-chevron-down'></i>"], //added to the header when collapsed and expanded, respectively  ["position", "html1", "html2"] 
	animatespeed: "fast", //speed of animation: integer in milliseconds (ie: 200), or keywords "fast", "normal", or "slow"
	oninit:function(headers, expandedindices){ //custom code to run when headers have initalized
		//do nothing
		//alert("1")
	},
	onopenclose:function(header, index, state, isuseractivated){ //custom code to run whenever a header is opened or closed
		//do nothing
		//alert("2");
	}
})



	
	
