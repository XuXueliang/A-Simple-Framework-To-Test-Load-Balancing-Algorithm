<?php
	
	/*
	 * This file is to distribute the requests  to different servers , is divided by functions 
	 * Data : 2014.5.5
     * Author : xxl
	 */

    include 'reBuildPackage.php';
    include '../util/writeLog.php';
    include './loadBalance.php';
    include '../../conf/logical/jobHandlerMappingConf.php';
    
    class controller {
        private $functionName;
        private $getPara;
        private $startTime;

        public function parsePara($para) {
            $this->functionName = $para;
        }

        public function mergePara($post=array()) {
            foreach($post as $k=>$v) {
                $this->getPara .="&$k=$v";
            }
        }

        private function rediect($path) {
            header('HTTP/1.1 301 Moved Permanently');
            header('Location: '.$path);
        }

        private function printError($content) {
            echo $content;
            writeLog($content."\r\n");
        }

        private function init() {
            writeLog("Rediect init...\r\n");
            $this->rediect("./init.php");
        }

        private function loadBalanceReport() {
            writeLog("Load Banlace report processing\r\n");
            calGradeForServer($_POST['task_id'], $_POST['p'], $_POST['g']);
        }

        private function runFunction() {
            global $jobHandlerMappingConf;

            writeLog("Parsing func para:".$this->functionName."\r\n");
            $this->startTime = mktime();
            //Redirect the request to a handle server
            writeLog("Begin to select proper server...\r\n");
            $result = selectMatchServer($this->functionName);
            if($hostName != 'error') {
                writeLog("Choosing done. Request went to ".$result['host'].".\r\n");
                $path = "http://".$result['host']."/".$jobHandlerMappingConf[$this->functionName].
                         "?".$this->getPara."&startTime=".$this->startTime."&p=".$result['p'];
                $this->rediect($path);
            } else {
                $this->printError("server error now!");
            }
        }

        public function run() {
            global $jobNameConf;
            if($this->functionName == 'init') { 
                $this->init();
            } else if($this->functionName == 'report') {
                $this->loadBalanceReport();
            } else if(!in_array($this->functionName, $jobNameConf)) {
                $this->printError("No this function now:".$this->functionName.".<br>");
            } else {
                $this->runFunction();
            }
        }

    }


?>