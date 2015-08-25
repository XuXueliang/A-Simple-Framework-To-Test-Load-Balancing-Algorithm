<?php
    /*
        To generate result type.
        Author : xxl
        Date : 2014-10-01
    */
	function jsonType($content){ 
		return json_encode($content);
	}
	function htmlType($content){ 
		$html = "<html><body>";
		$html .= "<div><table style='border:1 solid gray;'>";
		/*if(is_array($content)) { 
			foreach($content as $k1 => $v1) { 
				$html .= "<tr><td>".$k1."</td>";
				if(is_array($v1)){ 
					$html .= "<td><table>";

					foreach($v1 as $k2=>$v2){ 
						$html .= "<tr>";
						//$html .= "<td>".$k2."</td><td>".$v2."</td>";
						$html .= "</tr>";
					}

					$html .= "</table></td>";
				} else { 
					$html .= "<td>".$v1."</td>";
				}
				$html .= "</tr>";
			}
		}*/
        

		$html .= "</table></div></body></html>";

		return $html;
	}
?>