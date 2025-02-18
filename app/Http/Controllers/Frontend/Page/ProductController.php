<?php

namespace App\Http\Controllers\Frontend\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
class ProductController extends Controller
{
    public function index(){
        $products = DB::table('products')->select('name','slug','image')->get();
        $cate = DB::table('categories')->get();
        return view('frontend.layouts.page.product',compact('products','cate'));
    }
    
    public function load_category(Request $req){
        $slug = $req->link;
        $cate_id = DB::table('categories')->select('id','slug')->where('slug',$slug)->first();

        $result = DB:: table('products')->where('category_id',$cate_id->id)->get();
        $product_result = '';
        foreach($result as $val){
            $img_first = explode(",",$val->image);
            $product_result .= '<li><a href="san-pham/'.$val->slug.'">
                    <img src="./assets3/image/product/'.$img_first[0].'" alt="Sản phẩm">
                    <p>'.$val->name.'</p>
                </a>
            </li>';
        }
        return json_encode([
            'data'=> $product_result
        ]);
    }
}
