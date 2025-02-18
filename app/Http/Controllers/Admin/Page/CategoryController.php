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
}
