<?php

namespace App\Http\Controllers\Frontend\Page;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
class ContactController extends Controller
{
    public function index(){
        return view('frontend.layouts.page.contact');
    }
    
    public function post(Request $req){
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        require base_path("vendor/phpmailer/phpmailer/phpmailer/src/PHPMailer.php");
        require base_path("vendor/phpmailer/phpmailer/phpmailer/src/Exception.php");
        require base_path("vendor/phpmailer/phpmailer/phpmailer/src/SMTP.php");
        require base_path("vendor/autoload.php");

        $input = $req->all();
        DB::table('customer')->insert(
            ['email' => $input['email'],'phone' => $input['phone'],'name' => $input['name'],'note' => $input['note'],]
        );

        $mail = new PHPMailer();    
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';             
        $mail->SMTPAuth = true;
        $mail->Username = 'minhvu21091@gmail.com';   
        $mail->Password = 'kalp egyk pbxa yjhy';       
        $mail->SMTPSecure = 'tls';                 
        $mail->Port = 587;                      
        // // $mail->SMTPOptions=array(
        // //     'ssl'=>array(
        // //         'verify_peer'=>false,
        // //         'verify_peer_name'=>false,
        // //         'allow_self_signed'=>true
        // //     )
        // // );
        $mail->setFrom('minhvu21091@gmail.com', 'Khách hàng #');
        $mail->addAddress('minhvu21091@gmail.com');
        $mail->isHTML(true);  
        $mail->Subject = $input['name'].' đăng ký liên hệ #'.date("d-m-Y H:i:s");
        $mail->Body    = '
            Tên: '.$input['name'].'
            <br> 
            SĐT: '.$input['phone'].'
            <br>
            Email: '.$input['email'].'
            <br>
            Note: '.$input['note'].'
        ';
        $mail -> CharSet = "UTF-8";

        if( !$mail->send() ) {
            return back()->with("failed", "Email not sent.")->withErrors($mail->ErrorInfo);
        }
        
        else {
            return back()->with("success", "Email has been sent.");
        }

    }
}
