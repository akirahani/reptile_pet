<?php

namespace App\Http\Controllers\Frontend\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\libs;
class ProductController extends Controller
{
    public function index(){
        $products = DB::table('products')->select('name','slug','image')->get();
        $page_get = pageAddress();
        $process_page = ConfigPage($page_get, $products ,12);
        $cate = DB::table('categories')->get();
        return view('frontend.layouts.page.product',compact('products','cate','page_get','process_page'));
    }
    
    public function load_category(Request $req){
        $getrlt = $req->all();
        $slug = $getrlt['link']; 
        $loai = $getrlt['loai']; 
        $cate_id = DB::table('categories')->select('id','slug')->where('slug',$slug)->first();
        $result = DB:: table('products')->where('category_id',$cate_id->id)->get();
        $page_get = pageAddress();

        $process_page = ConfigPage($page_get, $result ,2);
        $product_result = '';
        $product_result .= '<ul>';
        foreach($result as $key => $val){
            $img_first = explode(",",$val->image);
            if( $key >= $process_page['start_page'] && $key < $process_page['end_page'])
            {
                if($loai == 1){
                    $product_result .= '<li><a href="./san-pham/'.$val->slug.'">
                            <img src="./assets3/image/product/'.$img_first[0].'" alt="Sản phẩm">
                            <p>'.$val->name.'</p>
                        </a>
                    </li>';
                }else if($loai == 2){
                    $product_result .= '<li><a href="./'.$val->slug.'">
                            <img src="../assets3/image/product/'.$img_first[0].'" alt="Sản phẩm">
                            <p>'.$val->name.'</p>
                        </a>
                    </li>';
                }
              
            }
        }
        $product_result .= '</ul>';
        if($process_page['total_row'] > $process_page['num_of_page'])
        {
            $product_result .= '<div class="page_filter">
                    <ul>';
                    if($loai == 1){
                        $product_result .=   PhanTrang('san-pham/'.$slug.'?', $process_page['total_page'],  $process_page['page']);

                    }
                    else{
                        $product_result .=   PhanTrang($slug.'?', $process_page['total_page'],  $process_page['page']);

                    }
            $product_result .= '</ul></div>';
        }
        return json_encode([
            'data'=> $product_result,
            'slug' => $slug
        ]);
    }

    public function filter_category(Request $req){        
        $arr_link = explode("/",$_SERVER['REQUEST_URI'] );
        $cate = DB::table('categories')->get();                               
        
        if($arr_link[1] != ""){
            if($arr_link[2] != "" ){
                if($arr_link[2] == "public"){
                    if(isset($arr_link[3])){
                        if($arr_link[3] != ""){
                            if (str_contains($arr_link[4], '?')) { 
                                $slug =  explode("?", $arr_link[4] )[0];
                            }else{
                                $slug = $arr_link[4];
                                $detail = DB::table('products')->where('slug', $slug)->first();
                                if($detail != null){
                                    return view('frontend.layouts.detail.product',compact('detail'));    
                                }else{
                                    return redirect()->back();
                                }
                            }
                        }else{

                        }
                    }else{
                    }
                }else{
                    if(isset($arr_link[3])){
                        if($arr_link[3] != "" ){
                            if (str_contains($arr_link[3], '?')) { 
                                $slug =  explode("?", $arr_link[3] )[0];
                                
                            }else{
                                $slug = $arr_link[3];
                                $detail = DB::table('products')->where('slug', $slug)->first();
                                if($detail != null){
                                    return view('frontend.layouts.detail.product',compact('detail'));    
                                }else{
                                    return redirect()->back();
                                }
                            }
                        }else{
                        }
                    }else{
                        if (str_contains($arr_link[2], '?')) { 
                            $slug =  explode("?", $arr_link[2] )[0];
                            
                        }else{
                            $slug = $arr_link[2];
                            $detail = DB::table('products')->where('slug', $slug)->first();
                            if($detail != null){
                                return view('frontend.layouts.detail.product',compact('detail'));    
                            }else{
                                return redirect()->back();
                            }
                        }
                    }
                }

    
            }else{

            }
        }else{
        }
        $cate_id = DB::table('categories')->select('id','slug')->where('slug',$slug)->first();
        $result = DB:: table('products')->where('category_id',$cate_id->id)->get(); 
        $page_get = pageAddress();
        $process_page = ConfigPage($page_get, $result ,2);
        return view('frontend.layouts.page.category',compact('result','cate','process_page','slug'));
       

    }
}
