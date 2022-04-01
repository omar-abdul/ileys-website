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
        'message'=>FILTER_SANITIZE_STRING 
    );
    $output = filter_var_array($data,$args);

   $to = 'omarabdirisaq@ileys.com';
    $cc = 'ilbuuromar@gmail.com';
   $from = $output['email'];
   $fromName = $output['name'];



    $mail = new PHPMailer(true);
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'omarabdirisaq@ileys.com';                     //SMTP username
    $mail->Password   = 'work42@92';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;    
    $mail->setFrom('omarabdirisaq@ileys.com', 'Mailer');
    $mail->addReplyTo($from,$name);
    $mail->addAddress('omarabdirisaq@ileys.com');
    $mail->addCC($cc);
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Contact Form';
    $mail->Body    = $output['message'];

    if(!$mail->send()){
        $res = ['data'=>'failed','err'=>$mail->ErrorInfo];
        echo json_encode($res);
    }   else {
        $res = ['data'=>'success'];
        echo json_encode($res);
    }
      
    


    

}




?>