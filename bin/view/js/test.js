// JavaScript Document

//experiment_tabs
$(function(){
	$("#experiment_tabs ul li").click(function(){
		$(this).siblings().removeClass("current");
		$(this).addClass("current");
		
		var divInd=$(this).find("a").attr("class");
		$("#experiment_tabs div.tabiv").removeClass("current");
		$("#experiment_tabs div#"+divInd).addClass("current");
		//alert(divInd) 
		})
	})

$(function(){
	var width = document.body.clientWidth;
	var minus = (width - 1080) / 2;
	width = minus + "px";

	$("#experiment_tabs").css("left", minus);
})

function seeLog() {
	var request = "";
	var html = "<a href=\"javascript:closeLog();\">Close Log</a>";
	$.getJSON("../util/seeLog.php",request,function(response){
		$("#SeeLog").html(response.logData);
		$("#flag").html(html);
	});
}
function closeLog() {
	var html = "<a href=\"javascript:seeLog();\">See Running Log</a>";
	$("#flag").html(html);
	$("#SeeLog").html("");

}

// Performance Test
var i=1;
function createXmlHttpRequest(){     
    if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");     
    } else if(window.XMLHttpRequest){    
        return new XMLHttpRequest();     
    }
}     
function postMessage(){     
    var url ="http://localhost/DMVC/bin/control/run.php";  
    xmlHttpRequest = createXmlHttpRequest();    
    xmlHttpRequest.onreadystatechange = resultHandler;  
    xmlHttpRequest.open("post",url,true);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var param = "func=well&returnType=json";
    xmlHttpRequest.send(param);       
}          
 function resultHandler(){     
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){  
        var b = xmlHttpRequest.responseText;  
        document.getElementById("place").innerHTML = b;
    } 
}
function testBegin() {
	createXmlHttpRequest();  
    postMessage();      
    i++; 
    if(i<100){
    	document.getElementById("testDiv").innerHTML = "Number "+i+" request post...";
    	setTimeout("testBegin();","50");
    } else {
    	document.getElementById("testDiv").innerHTML = "Post end."
    }
}