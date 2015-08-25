<?php
    function ReBuildHttpBag($argv=array(), $curPageName, $desPageName, $serverPath , $serverPort)
    {
        $flag = 0;
        $post = '';
        $errno = '';
        $errstr = '';

       
        //构造要post的字符串
        foreach ($argv as $key=>$value) {
            if ($flag!=0) {
                $post .= "&";
                $flag = 1;
            }
            $post.= $key."="; 
            $post.= urlencode($value);
            $flag = 1;
        }

        $length = strlen($post);
        //创建socket连接
        $fp = fsockopen($serverPath,$serverPort,$errno,$errstr,10) or exit($errstr."--->".$errno);
        //构造post请求的头
        $header  = "POST ".$desPageName." HTTP/1.1\r\n";
        $header .= "Host:".$serverPath."\r\n";
        $header .= "Referer: ".$curPageName." \r\n";
        $header .= "Content-Type: application/x-www-form-urlencoded\r\n";
        $header .= "Content-Length: ".$length."\r\n";
        $header .= "Connection: Close\r\n\r\n";
        //添加post的字符串
        $header .= $post."\r\n";
        
        //发送post的数据
        fputs($fp,$header);

        $inheader = 1;
        while (!feof($fp)) {
            $line = fgets($fp,1024); //去除请求包的头只显示页面的返回数据
            if ($inheader && ($line == "\n" || $line == "\r\n")) {
                 $inheader = 0;
            }
            if ($inheader == 0) {
              echo $line;
            }
        }

        fclose($fp);
    }
    
?>