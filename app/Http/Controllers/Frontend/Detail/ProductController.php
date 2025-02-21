<?php

namespace App\Http\Controllers\Frontend\Detail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
class ProductController extends Controller
{
    public function index(Request $req){
        $arr_link = explode("/",$_SERVER['REQUEST_URI'] );
        $products = DB::table('products')->select('name','slug','image')->take(5)->orderBy('id','ASC')->get();
        $accesory = DB::table('products')->select('slug','image','name','category_id')->where('category_id',1)->get();
        $get_accs = json_encode($accesory);

        $highlight = DB::table('blog')->where('active',1)->orderBy('created_at', 'desc')->first();
        $other_blog_get = DB::table('blog')->where('active',0)->take(4)->orderBy('created_at', 'desc')->get();
        
        if($arr_link[1] != ""){
            if($arr_link[2] != "" ){

                if($arr_link[2] == "public"){
                   
                    if(isset($arr_link[3])){
                        if($arr_link[3] != ""){
                            $slug_product =  $arr_link[4];
                        }else{

                        }
                    }else{
                        return view('frontend.layouts.home',compact('accesory','products','get_accs','highlight','other_blog_get'));
                    }
                }else{
                    if(isset($arr_link[3])){
                        if($arr_link[3] != ""){
                            $slug_product =  $arr_link[3];
                        }else{
                        }
                    }else{
                        $slug_product =  $arr_link[2];

                    }
                }

                $detail = DB::table('products')->where('slug', $slug_product)->first();
                if($detail != null){
                    return view('frontend.layouts.detail.product',compact('detail'));    
                }else{
                    return redirect()->back();
                }
            }else{

            }
        }else{
            return view('frontend.layouts.home',compact('accesory','products','get_accs','highlight','other_blog_get'));
        }
           
       
    }
}
