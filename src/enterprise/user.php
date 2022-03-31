<?php
header("Content-Type : application/json");
// p
$json = file_get_contents('php://input');
$data = (array)json_decode($json);

    $res = [
        'err'=>'Exists'
    ];
    echo json_encode($res);


?>