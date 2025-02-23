<?php

namespace App\Http\Controllers\Admin\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  DB;
class HomeController extends Controller
{
    public function index(){
        return view('backend.home');
    }

    public function search(Request $req){
        $input = $req->all();
        $name = $input['search'];
       
        if($name != ""){
           $arr_customer = DB::table('customer')->select("*")->
            where('name','LIKE','%'.$name.'%')
            ->orWhere('phone','LIKE','%'.$name.'%')
            ->get();
            
        }else{
           $arr_customer = DB::table('customer')->select("*")
            ->get();
        }

        
        $rlt ='';
        foreach($arr_customer as $val){
            $rlt .= ' <tr id="customer'.$val->id.'">
                    <td style="width:20%" scope="row">'.$val->name.'</td>  
                    <td style="width:20%" scope="row">'.$val->email.'</td>  
                    <td style="width:20%" scope="row">'.$val->phone.'</td>  
                    <td style="width:20%" scope="row">'.$val->note.'</td>
                    <td style="width:20%" scope="row">'.$val->time.'</td>  
                </tr>';
        } 

        if(sizeof($arr_customer) > 0 ){
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
