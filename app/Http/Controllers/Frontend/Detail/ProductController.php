<?php

namespace App\Http\Controllers\Frontend\Detail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
class ProductController extends Controller
{
    public function index(Request $req){
        $arr_link = explode("/",$_SERVER['REQUEST_URI'] );
        if($arr_link[1] != ""){
            if($arr_link[2] != "" ){
                $slug_product = $arr_link[2];
                $detail = DB::table('products')->where('slug', $slug_product)->first();
                return view('frontend.layouts.detail.product',compact('detail'));    
            }else{
 
            }
        }else{
            $products = DB::table('products')->select('name','slug','image')->take(5)->orderBy('id','ASC')->get();
            return view('frontend.layouts.home',compact('products'));  
        }
           
       
    }
}
