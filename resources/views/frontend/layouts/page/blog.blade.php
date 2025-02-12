@extends('frontend.index')
@section('content')
<section class="all-blog">
    <div class="title-blog">
        <p>Trang chủ / </p>
        <b> Kiến thức</b>
    </div>
    <div class="list-blog">
        @php
            for($i = 0; $i <6; $i++){
                echo'<div class="box-blog">';
                    echo  '<img src="assets3/image/blog-img.png" alt="Ảnh tin tức"/>';
                    echo  '<h1>TOP 10 Dòng Sóc Bay Úc Đẹp Nhất Trên Thế Giới</h1>';
                    echo  '<span>21/08/2023</span>';
                    echo  '<p>DDVS thảo dược Yaocare women - lựa chọn an toàn cho mẹ bầu & mẹ sau sinh. Được chứng nhận an toàn bởi Viện kiểm nghiệm..</p>';
                echo'</div>';
            }
        @endphp
    </div>
</section>
@endsection