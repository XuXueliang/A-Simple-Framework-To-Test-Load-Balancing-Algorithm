<?php
	/*
	    This conf record all the logical mapping
	    author: xxl
	*/
	
	$jobHandlerMappingConf = array();
	$jobNameConf = array();

	$jobNameConf[0] = "task";
	$jobNameConf[1] = "well";

    $jobHandlerMappingConf['task'] = "/DMVC/bin/logic/taskHandler.php";
    $jobHandlerMappingConf['well'] = '/DMVC/bin/logic/wellHandler.php';


?>