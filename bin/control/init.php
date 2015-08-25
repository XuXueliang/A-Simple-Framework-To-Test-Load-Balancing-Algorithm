<?php
	/*
	 * This file is to init the framework
	 * Data : 2014.6.5
     * Author : xxl
	 */
    
    include '../../conf/logical/jobHandlerMappingConf.php';
    include '../../conf/balance/balaceConf.php';
    include '../data/init_sql.php';
    include '../util/writeLog.php';

    writeLog("Init Env ...\r\n");
    initEnv($taskServerMappingConf);
    echo 'Init succeed!';
    writeLog("Init Env succeed.\r\n");
?>
