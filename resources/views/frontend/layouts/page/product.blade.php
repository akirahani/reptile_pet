@extends('frontend.index')
@section('content')
<section class="all-product">
    <div class="title-product">
        <p>Trang chủ /</p>
        <b>Sản phẩm</b>
    </div>
    <div class="box-product">
        <div class="menu-product">
            <h1>Danh mục sản phẩm</h1>
            <ul class="categories-all">
                <?php foreach($cate as $valc){ ?>
                    <li id="{{$valc->slug}}">{{$valc->name}}</li>
                <?php } ?>
            </ul>
        </div>
        <div class="list-product">
            <ul>
               <?php foreach($products as $key => $item){
                    $convert_unicodetv = convert_vn2latin($item->name);
                    $lowcase = strtolower($convert_unicodetv);
                    $link = str_replace(" ","-",$lowcase);
                    $key++;
                    $img_first = explode(",",$item->image);

                ?>
                    <li>
                        <a href="{{route('product.detail',['link'=>$link])}}">
                            <img src="{{asset('assets3/image/product/'.$img_first[0].'')}}" alt="Sản phẩm">
                            <p><?=$item->name ?></p>
                        </a>
                    </li>
                <?php } ?>


            </ul>
        </div>
    </div>
    <script>
        $('.categories-all li').click(function(){
            let link_cate = $(this).attr('id');
            $.ajax({
                url: './san-pham/'+link_cate,
                type: "POST",
                data: {
                    "_token": "{{ csrf_token() }}",
                    'link': link_cate 
                },
                success:function(data){
                    let rlt = JSON.parse(data);
                    $('.list-product ul').html(rlt.data);
                }
            });
        });
    </script>
</section>
@endsection