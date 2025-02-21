<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $table = 'blog';
    protected $fillable = ['id','active','title','subtit','slug','image','content','updated_at','created_at'];
}
