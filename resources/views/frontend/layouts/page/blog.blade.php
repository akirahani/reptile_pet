@extends('frontend.index')
@section('content')
<section class="all-blog">
    <div class="title-blog">
        <p>Trang chủ / </p>
        <b> Kiến thức</b>
    </div>
    <div class="list-blog">
        @php
            $blog = DB::table('blog')->get();
            foreach($blog as $val){
                echo'<div class="box-blog">';
                    echo'<a href="./kien-thuc/'.$val->slug.'">';
                        echo  '<img src="assets3/image/img_news/'.$val->image.'" alt="Ảnh tin tức"/>';
                        echo  '<h1>'.$val->title.'</h1>';
                        echo  '<span>'.date( 'd/m/Y',strtotime($val->created_at)).'</span>';
                        echo  '<p>'.$val->subtit.'</p>';
                    echo'</a>';
                echo'</div>';
            }
        @endphp
    </div>
</section>
@endsection