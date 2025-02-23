<?php

namespace App\Http\Controllers\Admin\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Category;
class CategoryController extends Controller
{
    public function index(){
        $category = DB::table('categories')->get();
        return view('backend.page.category.index',compact('category'));
    }

    public function add(){
        return view('backend.page.category.add');
    }

    public function insert(Request $request)
    {
        $input = $request->all();
        // $admin = Auth::guard('admin')->user();
        $category = new Category();
        $input = $request->all();
        $category->name = $input['name'];
        $category->parent_id = 1;
        $category->slug = $input['slug'];
        $category->save();
        return redirect()->route('admin.category.index');
    }
    public function update(Request $request, Category $category)
    {
        // $admin = Auth::guard('admin')->user();
        $input = $request->all();
        $id = $input['id'];
        $arr = array(
            'name'=>$input['name'],
            'parent_id' => 1,
            'slug' => $input['slug'],
        );

        $category->where('id',$id)->update($arr);
        return redirect()->route('admin.category.index');
    }
    public function edit($id)
    {
        $category = Category::find($id);
        return view('backend.page.category.edit',compact('category'));
    }

    public function delete($id,Category $category)
    {
        $category->where('id',$id)->delete();
        return response()->json([
            "success"=>"Bạn xóa thành công"
        ]);
    }

    public function search(Request $req){
        $input = $req->all();
        $name = $input['search'];
       
        if($name != ""){
           $arr_cate = DB::table('categories')->select("id","name","slug")->
            where('name','LIKE','%'.$name.'%')
            ->get();
            
        }else{
           $arr_cate = DB::table('categories')->select("id","name","slug")
            ->get();
        }

        
        $rlt ='';
        foreach($arr_cate as $val){
            $rlt .= '<tr id="category'.$val->id.'">
                    <td style="width:20%" scope="row">'.$val->name.'</td>  
         
                    <td style="width:20%" scope="row">'.$val->slug.'</td>  

                    <td style="width:20%" scope="row">
                        <a href="/admin/category/edit/'.$val->id.'" class="btn btn-info"><i class="fas fa-edit"></i></a>
                        <a data-id="'.$val->id.'" class="btn btn-danger del"  ><i class="fas fa-trash"></i></a>
                    </td>
                </tr>';
        } 

        if(sizeof($arr_cate) > 0 ){
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
