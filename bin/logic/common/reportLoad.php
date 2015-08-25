<?php
    
    /*
       To report the load state
       Author: xxl
       Date: 2014-11-2
    */
    include '../../conf/control/controlHandlerConf.php';
    class loadReport {
    	private  $workStartTime;
    	private  $workEndTime;
    	private  $workDuringTime;

    	public function setStartTime($sTime) {
    		$this->workStartTime = $sTime;
    	}
    	public function getStartTime() {
    		return $this->workStartTime;
    	}
    	public function end() {
    		$this->workEndTime = mktime();
    	}
    	public function getEndTime() {
    		return $this->workEndTime;
    	}
    	public function cal() {
    		$this->workDuringTime = $this->workEndTime - $this->workStartTime;
    	}
        public function buildPostMessage($data = array()) {
            global $controllerHanlderServer;

            $data = http_build_query($data);  
            $opts = array (  
               'http' => array (  
                   'method' => 'POST',  
                   'header'=> "Content-type: application/x-www-form-urlencoded\r\n" .  
                              "Content-Length: " . strlen($data) . "\r\n",  
                              'content' => $data  
               )
            ); 
            $context = stream_context_create($opts);  
            $html = file_get_contents($controllerHanlderServer, false, $context);  
        }
        public function report($priority, $task_id) {
            $this->cal();
            $data = array();
            writeLog("This process during time is : $this->workEndTime - $this->workStartTime = ".$this->workDuringTime."\r\n");
            $data['p'] = $priority;
            $data['dTime'] = $this->workDuringTime;
            $data['func'] = "report";
            $data['task_id'] = $task_id;
            $this->buildPostMessage($data);
        }
    }   
?>