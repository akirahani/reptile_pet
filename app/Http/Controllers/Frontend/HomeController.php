<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
class HomeController extends Controller
{
    public function index(){
        $products = DB::table('products')->select('name','slug','image')->take(5)->orderBy('id','ASC')->get();
        $accesory = DB::table('products')->select('slug','image','name','category_id')->where('category_id',1)->get();
        $get_accs = json_encode($accesory);


        $highlight = DB::table('blog')->where('active',1)->orderBy('created_at', 'desc')->first();
        $other_blog_get = DB::table('blog')->where('active',0)->take(4)->orderBy('created_at', 'desc')->get();
        return view('frontend.layouts.home',compact('accesory','products','get_accs','highlight','other_blog_get'));
    }
    public function search(Request $req){
        $search = $req->search;
        $arr_rlt  = '';
        if($search != ''){
            $rlt = DB::table('products')->select('slug','name','image')->where('name', 'LIKE', '%' . $search . '%')->get();
            $arr_rlt .= '<div class= "highlight-day" style="padding-top: 20px">';
            $arr_rlt .= '<div class="hd-screen"><ul class="product-hd">';
            foreach($rlt as $val){
                $arrimg = explode(",",$val->image);
                $arr_rlt .= '
                            <li>
                                <a href="./san-pham/'.$val->slug.'">
                                    <img src="assets3/image/product/'.$arrimg[0].'" alt="Sản phẩm">
                                    <p>'.$val->name.'</p>
                                </a>
                            </li>
                   ';
            }
            $arr_rlt .= ' </ul></div>';
            $arr_rlt .= '</div>';
            return response()->json([
                'data' =>  $arr_rlt
            ]);

        }else{  
            return redirect()->back();
        }

    }
}
