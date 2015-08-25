<?php
    /*
	 * To record logs
	 * Data : 2014.7.5
     * Author : xxl
	 */
    function writeLog($content) {
    	date_default_timezone_set("Asia/Shanghai");
    	$date = date("Y-m-d");
    	$dateNow = date("Y-m-d h:i:sa");
    	$fileName = $date."-log.txt";
    	$fp = fopen("../../log/".$fileName, "a+");

    	$content = $dateNow." ".$content;
    	fwrite($fp,$content,strlen($content));
    	fclose($fp);
    }
?>