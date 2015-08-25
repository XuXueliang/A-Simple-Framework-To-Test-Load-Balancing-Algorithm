<?php
	/*
	    Clear data model job 
	    author: xxl
	*/
	include 'connect_database.php';
	function searchParaForWell($userName="root", $pwd="knight", $wellId="302") {
		connectToDatabase($userName, $pwd);
		writeLog("well_sql begin searching database.\r\n");
		$sql = "select * from well where well_id=$wellId";
		$sqlf = mysql_query($sql);

		$result = array();
		if($sqlf == false || mysql_num_rows($sqlf) < 1) {
			$result['status'] = 404;
		} else {
			$result['status'] = 200;
			$pos = 0;
			$result['data'] = array();
			while(($info = mysql_fetch_object($sqlf))) {
				$result['data'][$pos] = array();
				$result['data'][$pos++] = $info;
			}
		}
        return $result;
	}
?>