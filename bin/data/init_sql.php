<?php
	/*
	    init the environment
	    author: xxl
	*/
	include 'connect_database.php';
	function initEnv($content=array()) {
		connectToDatabase();
		writeLog("Init Env data...\r\n");
		
        //echo json_encode($content);
		$sql = "drop table if exists initEnv";
		mysql_query($sql);

		$sql = "CREATE TABLE IF NOT EXISTS `initEnv` (
			  `task_id` varchar(20) NOT NULL,
  			  `p1` varchar(30) NOT NULL,
              `p1g` float(11) NOT NULL,
              `p2` varchar(30) NOT NULL,
              `p2g` float(11) NOT NULL,
              `p3` varchar(30) NOT NULL,
              `p3g` float(11) NOT NULL
             ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
        mysql_query($sql);

        foreach($content as $k => $v) {
        	$sql1 = "insert into initEnv(task_id, p1, p1g, p2, p2g, p3, p3g) values
        	         ('".$k."', '".$v['p1']['host']."', ".$v['p1']['grade'].",
        	                '".$v['p2']['host']."', ".$v['p2']['grade'].",
        	                '".$v['p3']['host']."', ".$v['p3']['grade']."
        	         )";
            mysql_query($sql1);
        }
	}
?>