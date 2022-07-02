<?php

header("Content-Type : application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require ('../enterprise/PHPMailer-master/src/PHPMailer.php');
require ('../enterprise/PHPMailer-master/src/Exception.php');
require ('../enterprise/PHPMailer-master/src/SMTP.php');





if(isset($_SERVER) && $_SERVER['REQUEST_METHOD']=='POST'){
    $json = file_get_contents('php://input');
    $data = (array)json_decode($json);

    $args = array(
        'name'=>FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'email'=>FILTER_SANITIZE_EMAIL,
        'message'=>FILTER_SANITIZE_FULL_SPECIAL_CHARS 
    );
    $output = filter_var_array($data,$args);

   $to = 'omarabdirisaq@ileys.com';
   $cc = 'ilbuuromar@gmail.com';
   $from = $output['email'];
   $fromName = $output['name'];



    $mail = new PHPMailer(true);
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'omarabdirisaq@ileys.com';                     
    $mail->Password   = 'work42@92';                               
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
    $mail->Port       = 465;    
    $mail->setFrom('no-reply@ileys.com', 'ILEYS ENTERPRISES');
    $mail->addReplyTo($from,$fromName);
    $mail->addAddress('omarabdirisaq@ileys.com');
    $mail->addCC($cc);
    $mail->isHTML(true);                                  
    $mail->Subject = 'Contact Form';
    $mail->Body    = '<h1>Message from Contact Form </h1></br> <p>'.$output['message'].'</p>';

    if(!$mail->send()){
        $res = ['data'=>'failed','err'=>$mail->ErrorInfo];
       
    }   else {
        $res = ['data'=>'success'];
    }

      
     echo json_encode($res);

}




?>