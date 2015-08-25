<?php
	
	/*
	 * This file is to distribute the requests to different servers , divided by functions 
	 * Data : 2014.5.5
     * Author : xxl
	 */

    include 'controller.php';	
    
    $handler = new controller();
    echo $_POST['func']."-".$_POST['returnType'];
    $handler->parsePara($_POST['func']);
    $handler->mergePara($_POST);
    $handler->run();

?>