<?php

namespace App\Http\Controllers\Frontend\Detail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $req){
        $arr_link = explode("/",$_SERVER['REQUEST_URI'] );
        dd($arr_link[2]);
        return view('frontend.layouts.detail.product');    
    }
}
