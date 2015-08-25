<?php
        class word
        {
                function start()
                {
                    ob_start();
                    print'<html xmlns:o="urn:schemas-microsoft-com:office:office"
                            xmlns:w="urn:schemas-microsoft-com:office:word"
                            xmlns="http://www.w3.org/TR/REC-html40">';
                }
                function save($path)
                {
                    /*This echo will output to word.*/
                    echo "something";
                    /**/
                    print "</html>";
                    $data = ob_get_contents();
                    ob_end_clean();
                    $this->wirtefile ($path,$data);
                }
                function wirtefile ($fn,$data)
                {
                    $fp=fopen($fn,"wb");
                    fwrite($fp,$data);
                    fclose($fp);
                }
        }
        $word=new word;
        $word->start();
        echo $cout;
        $wordname="word/客户.doc";
        $word->save($wordname);
?>