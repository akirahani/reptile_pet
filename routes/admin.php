<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\LoginController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Admin\Auth\LoginController@login');
Route::post('/login', 'Admin\Auth\LoginController@post_login');
Route::get('/logout', 'Admin\Auth\LoginController@logout');
Route::middleware('auth:admin')->group(function(){
    Route::get('/home', 'Admin\Page\HomeController@index')->name('dashboard');
    Route::middleware(['check.permission'])->group(function(){
        

    });
});