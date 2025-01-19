<?php

namespace App\Http\Controllers\Admin\Auth;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Hash;
class LoginController extends Controller
{
    public function login(){
        return view('backend.auth.login');
    }

    public function post_login(Request $req){
        $credentials = $req->only(['email', 'password']);
        if (Auth::guard('admin')->attempt($credentials)) {
            $account = DB::table('users')
            ->select('*')
            ->where('email',$req['email'])
            ->first(); 
            $req->session()->push('acc',$account); 
            return redirect()->route('dashboard');
        } else {
            return redirect()->back()->withInput();
        }
     
    }

    public function logout(Request $req){
        $req->session()->forget('acc');
        return view('backend.auth.login');
    }
}
