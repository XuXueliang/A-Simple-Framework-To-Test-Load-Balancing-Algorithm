<?php
	/*
	    This conf record all the data model
	    author: xxl
	*/
	
	$dataModel = array();

	$dataModel['autoTask']['name'] = "autoTaskName";
	$dataModel['autoTask']['userName'] = "admin";
	$dataModel['autoTask']['time'] = "autoTaskName";
	$dataModel['autoTask']['pwd'] = "bupt1016";
	$dataModel['autoTask']['sql'] = "select autoTask_id from autoTask where taskDate>to_date('2014/07/23', 'YYYY/MM/DD')";
?>