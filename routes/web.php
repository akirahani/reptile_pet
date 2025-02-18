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

Route::get('/', 'Frontend\Detail\ProductController@index');

// all nav page 
Route::get('/san-pham','Frontend\Page\ProductController@index');
Route::post('/san-pham/{category}','Frontend\Page\ProductController@load_category');

Route::get('/kien-thuc', function () {
    return view('frontend.layouts.page.blog');
});

Route::get('/lien-he', function () {
    return view('frontend.layouts.page.contact');
});

// all detail page

Route::get('/san-pham/{link}','Frontend\Detail\ProductController@index')->name('product.detail');
Route::get('/kien-thuc/{link}', 'Frontend\Detail\BlogController@index')->name('blog.detail');
// search page
Route::get('/tim-kiem', function () {
    return view('frontend.layouts.detail.search');
});


