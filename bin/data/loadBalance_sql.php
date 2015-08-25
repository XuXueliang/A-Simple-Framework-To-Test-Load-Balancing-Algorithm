<?php
	/*
	    select proper server from database
	    author: xxl
	*/
	include 'connect_database.php';
	function selectMatchServerUsingData($task_id) {
		connectToDatabase();
		
		$sql = "select * from initEnv where task_id='".$task_id."'";
		$sqlf = mysql_query($sql);

    $host = '';
    $p = '';
    $result = array();
    if($sqlf == false || mysql_num_rows($sqlf) < 1) {
      $host = 'error';
    } else {
      $info = mysql_fetch_object($sqlf);
      $g = 0;
      if($info->p1 != '') {
        $host = $info->p1;
        $g = $info->p1g;
        $p = 'p1';
      }

      if($info->p2 != '' && $g <= $info->p2g) {
        $host = $info->p2;
        $g = $info->p2g;
        $p = 'p2';
      }

      if($info->p3 != '' && $g <= $info->p3g) {
        $host = $info->p3;
        $g = $info->p3g;
        $p = 'p3';
      }
    }
    $result['host'] = $host;
    $result['p'] = $p;
    closeDatabase();
    return $result;
	}
  function calGradeForServerSql($task_id, $p, $g) {
    connectToDatabase();
    $g = 1 / (2+$g);
    if($p == "p1"){
      $g = 1 / (2+$g);
      $sql = "update initEnv set p1g=$g where task_id='".$task_id."'";
    } else if($p == "p2") {
      $g = 0.5 / (2+$g);
      $sql = "update initEnv set p2g=$g where task_id='".$task_id."'";
    } else if($p == "p3") {
      $g = 0.3 / (2+$g);
      $sql = "update initEnv set p3g=$g where task_id='".$task_id."'";
    }

    writeLog($sql."\r\n");
    
    $sqlf = mysql_query($sql);
    closeDatabase();
  }
?>