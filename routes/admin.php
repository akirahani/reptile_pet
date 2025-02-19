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
    // Route::middleware(['check.permission'])->group(function(){
    //product
        Route::get('/product', 'Admin\Page\ProductController@index')->name('admin.product.index');
        Route::get('/product/add', 'Admin\Page\ProductController@add')->name('product.add');
        Route::post('/product/insert', 'Admin\Page\ProductController@insert')->name('product.insert');
        Route::get('/product/edit/{id}', 'Admin\Page\ProductController@edit')->name('product.edit');
        Route::post('/product/update', 'Admin\Page\ProductController@update')->name('product.update');
        Route::get('/product/del/{id}', 'Admin\Page\ProductController@delete')->name('product.del');
    //new(blog)
        Route::get('/blog', 'Admin\Page\BlogController@index')->name('admin.blog.index');
        Route::get('/blog/add', 'Admin\Page\BlogController@add')->name('admin.blog.add');
        Route::post('/blog/insert', 'Admin\Page\BlogController@insert')->name('admin.blog.insert');
        Route::get('/blog/edit/{id}', 'Admin\Page\BlogController@edit')->name('admin.blog.edit');
        Route::post('/blog/update', 'Admin\Page\BlogController@update')->name('admin.blog.update');
        Route::get('/blog/del/{id}', 'Admin\Page\BlogController@delete')->name('admin.blog.del');
        Route::post('file-blog','Admin\Page\BlogController@upload')->name('admin.blog.upload');
    //category
        Route::get('/category', 'Admin\Page\CategoryController@index')->name('admin.category.index');
        Route::get('/category/add', 'Admin\Page\CategoryController@add')->name('admin.category.add');
        Route::post('/category/insert', 'Admin\Page\CategoryController@insert')->name('admin.category.insert');
        Route::get('/category/edit/{id}', 'Admin\Page\CategoryController@edit')->name('admin.category.edit');
        Route::post('/category/update', 'Admin\Page\CategoryController@update')->name('admin.category.update');
        Route::get('/category/del/{id}', 'Admin\Page\CategoryController@delete')->name('admin.category.del');
    // customer
        Route::get('/customer',function(){
            return view('backend.page.customer');
        });

    // });
});