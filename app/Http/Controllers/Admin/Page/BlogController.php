<?php

namespace App\Http\Controllers\Admin\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Blog;
class BlogController extends Controller
{
    public function index(){
        $blog = DB::table('blog')->get();
        return view('backend.page.blog.index',compact('blog'));
    }

    public function add(){

        return view('backend.page.blog.add');
    }

    public function insert(Request $request)
    {
        $input = $request->all();
        // $admin = Auth::guard('admin')->user();
        $blog = new Blog();
        $input = $request->all();
        $blog->title = $input['title'];
        $blog->content = $input['content'];
        $blog->active = $input['active'];
        $blog->subtit = $input['subtit'];
        $blog->slug = $input['slug'];
        if($request->hasFile('image')){
            $image = $request->file('image');
            $blog->image = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('assets3/image/img_news'), $blog->image);
        }
        $blog->save();
        return redirect()->route('admin.blog.index');
    }

    public function upload(Request $request)
    {
   
        if($request->hasFile('upload')) {
            //get filename with extension
            $filenamewithextension = $request->file('upload')->getClientOriginalName();

            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);

            //get file extension
            $extension = $request->file('upload')->getClientOriginalExtension();

            //filename to store
            $filenametostore = $filename.'_'.time().'.'.$extension;

            //Upload File
            $request->file('upload')->move('assets3/image/img_blog/', $filenametostore);

            $CKEditorFuncNum = $request->input('CKEditorFuncNum');
            $url = asset('assets3/image/img_blog/'.$filenametostore);
            $msg = 'Image successfully uploaded';
            $re = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";

            @header('Content-type: text/html;charset=utf-8');
            echo $re;
        }
    
    }

    public function update(Request $request, Blog $blog)
    {
        // $admin = Auth::guard('admin')->user();
        $input = $request->all();
        $id = $input['id'];
        $arr = array(
            'title'=>$input['title'],
            'content' => $input['content'],
            'subtit' => $input['subtit'],
            'slug' => $input['slug'],
            'active' => $input['active']
        );
        if($request->hasFile('image')){
            $image = $request->file('image');
            $image_url = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('/assets3/image/img_news'), $image_url);
            $arr['image'] = $image_url;
        }
        $blog->where('id',$id)->update($arr);
        return redirect()->route('admin.blog.index');
    }
    public function edit($id)
    {
        $blog = Blog::find($id);
        return view('backend.page.blog.edit',compact('blog'));
    }

    public function delete($id,Blog $blog)
    {
        $blog->where('id',$id)->delete();
        return response()->json([
            "success"=>"Bạn xóa thành công"
        ]);
    }
}
