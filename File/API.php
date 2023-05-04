<?php 

if (isset($_POST['CEP']))
{
    $cep = $_POST['CEP'];
    $ch = curl_init();
    curl_setopt_array($ch, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://viacep.com.br/ws/" . $cep . "/json",
        CURLOPT_SSL_VERIFYPEER => false
    ));


    $response = json_decode(curl_exec($ch));
    curl_close($ch);

    $array_dados = json_encode($response);

    echo $array_dados;
}

?>