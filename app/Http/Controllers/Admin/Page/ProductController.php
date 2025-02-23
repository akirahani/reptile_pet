<?php

namespace App\Http\Controllers\Admin\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(){
        $product = DB::table('products')->get();
        $cate = DB::table('categories')->get();
        $arr_loai_sp = [];
        foreach($cate as $val){
            $arr_loai_sp[$val->id] = $val->name; 
        }
        return view('backend.page.product.index',compact('product','arr_loai_sp'));
    }

    public function add(){
        $category = DB::table('categories')
        ->select('*')
        ->get();
        return view('backend.page.product.add',compact('category'));
    }

    public function insert(Request $request)
    {
        $input = $request->all();
        // $admin = Auth::guard('admin')->user();
        $product = new Product();
        $input = $request->all();
        $product->name = $input['name'];
        $product->category_id = $input['category_id'];
        $product->price = $input['price'];
        $product->slug = $input['slug'];
        $product->slug_shopee= $input['slug_shopee'];
        $product->description = $input['description'];

        if($request->hasfile('image')){
            $image = $request ->file('image');
            $arr_img = [];
            foreach($image as $val){
                array_push($arr_img, $val->getClientOriginalName());
                $val->move(public_path('/assets3/image/product'),$val->getClientOriginalName());
            }
            $product->image = implode(',',$arr_img);
        }

        $product->save();
        return redirect()->route('admin.product.index');
    }
    public function update(Request $request, Product $product)
    {
        // $admin = Auth::guard('admin')->user();
        $input = $request->all();
        $id = $input['id'];
        $arr = array(
            'name'=>$input['name'],
            'category_id' => $input['category_id'],
            'price' => $input['price'],
            'slug_shopee' => $input['slug_shopee'],
            'slug' => $input['slug'],
            'description' => $input['description'],
        );

       
        if($request->hasfile('image')){
            $image = $request ->file('image');
            $arr_img = [];
            foreach($image as $val){
                array_push($arr_img, $val->getClientOriginalName());
                $val->move(public_path('/assets3/image/product'),$val->getClientOriginalName());
            }
            $arr['image'] = implode(',',$arr_img);
        }
        
        $product->where('id',$id)->update($arr);
        return redirect()->route('admin.product.index');
    }
    public function edit($id)
    {
        $product = Product::find($id);
        $category = DB::table('categories')
        ->select('*')
        ->get();

        $category_get = DB::table('products')
        ->select('category_id')
        ->where('id',$id)
        ->first();

        return view('backend.page.product.edit',compact('product','category','category_get'));
    }

    public function delete($id,Product $product)
    {
        $product->where('id',$id)->delete();
        return response()->json([
            "success"=>"Bạn xóa thành công"
        ]);
    }

    public function search(Request $req){
        $input = $req->all();
        $name = $input['search'];
        $cate = $input['cate'];
        $arr_sp = [];
        $cateory = DB::table('categories')->get();
        $arr_loai_sp = [];
        foreach($cateory as $val){
            $arr_loai_sp[$val->id] = $val->name; 
        }

        if($name != ""){
            if($cate == 0){
                $arr_sp = DB::table('products')->select("id","name","image","category_id")->
                where('name','LIKE','%'.$name.'%')
                ->get();
            }else{
                $arr_sp = DB::table('products')->select("id","name","image","category_id")->
                where('name','LIKE','%'.$name.'%')
                ->orWhere('category_id',$cate)
                ->get();
            }
        }else{
            $arr_sp = DB::table('products')->select("id","name","image","category_id")
            ->get();
        }

        
        $rlt ='';
        foreach($arr_sp as $val){
            $arr_imgs = explode(",",$val->image);
            $rlt .= ' <tr id="product'.$val->id.'">
              <td  scope="row" style="width: 25%">'.$val->name.'</td>
                  
              <td  scope="row" style="width: 25%">'.$arr_loai_sp[$val->category_id].'</td>

              <td class="image-son" scope="row" style="width: 25%">
                  <img src="../assets3/image/product/'.$arr_imgs[0].'" alt="" style="width: 100%;" >
              </td>
              <td  scope="row" style="width: 25%">
                  <a href="/admin/product/edit/'.$val->id.'" class="btn btn-info"><i class="fas fa-edit"></i></a>
                  <a data-id ="'.$val->id.'" class="btn btn-danger del"> <i class="fas fa-trash"></i></a>
              </td>
          </tr>';
        } 

        if(sizeof($arr_sp) > 0 ){
            return response()->json([
                'status' => 'success',
                'data' => $rlt
            ]);
        }else{
            return response()->json([
                'status' => 'failed',
                'data' => ''
            ]);
        }
  
    }
}
