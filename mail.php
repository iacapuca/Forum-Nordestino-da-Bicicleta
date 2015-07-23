<?php

    $to = "contato@fne.com.br";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "De: $from";
    $subject = "Você tem uma nova mensagem do site do FNE";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"texto"} = "texto";

    $body = "Aqui está o que foi enviado:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
