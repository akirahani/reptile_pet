<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('frontend.layouts.home');
});

// all nav page 
Route::get('/san-pham', function () {
    return view('frontend.layouts.page.product');
});

Route::get('/kien-thuc', function () {
    return view('frontend.layouts.page.blog');
});

Route::get('/lien-he', function () {
    return view('frontend.layouts.page.contact');
});

// all detal page

Route::get('/san-pham/detail', function () {
    return view('frontend.layouts.detail.product');
});

Route::get('/kien-thuc/detail', function () {
    return view('frontend.layouts.detail.blog');
});

Route::get('/lien-he/detail', function () {
    return view('frontend.layouts.detail.contact');
});

// search page
Route::get('/tim-kiem', function () {
    return view('frontend.layouts.detail.search');
});


