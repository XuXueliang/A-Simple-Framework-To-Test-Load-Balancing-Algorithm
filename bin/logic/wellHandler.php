<?php
    /*
      To process the function on well stuff.
      Author : xxl
      Date : 2014-12-01
    */
    include '../util/writeLog.php';
    include '../data/well_sql.php';
    include './common/resultType.php';
    include './common/reportLoad.php';

    //Record the handle log
    $loadReport1 = new loadReport();
    $loadReport1->setStartTime($_GET['startTime']);
    writeLog("wellHanlder begin to handle this request.\r\n");
    $functionName = $_GET['func'];

    //Search the database.
    $result = searchParaForWell();

    $returnContent = "";
    if($_GET['returnType'] == 'json') {
    	writeLog("Need result type: json.\r\n");
    	$returnContent = jsonType($result);
    } else if ($_GET['returnType'] == 'html') {
    	writeLog("Need result type: html.\r\n");
    	$returnContent = htmlType($result);
    }

    echo $returnContent;
    $loadReport1->end();
    $loadReport1->report($_GET['p'], 'well');
    writeLog("wellHanlder begin to report grade\r\n");
?>