<?php
    date_default_timezone_set("Asia/Shanghai");
    $date = date("Y-m-d");
    $fileName = $date."-log.txt";
    $fp = file("../../log/".$fileName);
    $result = array();
    $result['status'] = 200;

    $i = 10;
    $result['logData'] = "";
    while($i>0) {
        if(count($fp) < $i) {
        	$i--;
        	continue;
        }

    	$result['logData'] .= $fp[count($fp)-$i]."<br>";
    	$i--;
    }
    echo json_encode($result);
?>