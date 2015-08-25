<?php
	/*
	    Connect the database
	    author: xxl
	*/
	$link = "";
	function connectToDatabase($userName="root", $pwd="knight") {
		// phpAdmin url: http://10.103.242.222/phpmyadmin
		header('Content-type: application/json');	
		$sname = "localhost";
		$duser = $userName;
		$dpwd = $pwd;

		$link = mysql_connect($sname,$duser,$dpwd) or die("connect error!\n".mysql_error());
		mysql_select_db("DMVC_TEST",$link);
	    mysql_query("set charset utf8");
	    mysql_query("set character set 'utf8'");
	    mysql_query("set names 'utf8'");
	}
	function closeDatabase($userName="root", $pwd="knight") {
		mysql_close($link);
	}
?>