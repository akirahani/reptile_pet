<?php

namespace App\Http\Controllers\Frontend\Detail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
class BlogController extends Controller
{
    public function index(Request $req){
        $arr_link = explode("/",$_SERVER['REQUEST_URI'] );
        if($arr_link[1] != ""){
            if($arr_link[2] != "" ){
                if($arr_link[2] == "public"){
                    if(isset($arr_link[3])){
                        if($arr_link[3] != ""){
                            $slugb = $arr_link[3];
                        }else{

                        }

                    }else{

                    }
                }else{
                    if($arr_link[2] != "" ){
                        if(isset($arr_link[3])){
                            if($arr_link[3] != ""){
                                $slugb = $arr_link[3];
                            }else{
    
                            }
    
                        }else{
                            $slugb =  $arr_link[2];
                        }
                    }else{

                    }
                }
                $detail = DB::table('blog')->where('slug', $slugb)->first();
                $blog = DB::table('blog')->where('slug','!=',$slugb)->get();
                return view('frontend.layouts.detail.blog',compact('detail','blog'));  
            }else{
 
            }
        }else{
            // $blog = DB::table('blog')->select('*')->take(6)->orderBy('id','ASC')->get();
            // return view('frontend.layouts.home',compact('blog')); 
            return view('frontend.layouts.home'); 
        }
           
       
    }
}
