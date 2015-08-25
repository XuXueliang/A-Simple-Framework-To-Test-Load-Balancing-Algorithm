<?php
	/*
	 * This file is to calculate the grade
	 * Data : 2014.8.5
     * Author : xxl
	 */
    include '../data/loadBalance_sql.php';
	function selectMatchServer($task_id) {
		writeLog("Select proper server for the request.\r\n");
        return selectMatchServerUsingData($task_id);
	}

	function calGradeForServer($task_id, $p, $g) {
		writeLog("Caculate the grade for current function-host\r\n");
		calGradeForServerSql($task_id, $p, $g);
	}

?>