@extends('frontend.index')
@section('content')
<section class="all-product">
    <div class="title-product">
        <p>Trang chủ /</p>
        <p>Sản phẩm /</p>
        <b>{{$slug}}</b>
    </div>
    <div class="box-product">
        <div class="menu-product">
            <h1>Danh mục sản phẩm</h1>
            <ul class="categories-all-filter">
                <?php foreach($cate as $valc){ ?>
                    <li id="{{$valc->slug}}">{{$valc->name}}</li>
                <?php } ?>
            </ul>
        </div>
        <div class="list-product">
            <ul>
               <?php foreach($result as $key => $item){
                    $convert_unicodetv = convert_vn2latin($item->name);
                    $lowcase = strtolower($convert_unicodetv);
                    $link = str_replace(" ","-",$lowcase);
                    $key++;
                    $img_first = explode(",",$item->image);
                    if( $key >= $process_page['start_page'] && $key < $process_page['end_page'])
			        {
                ?>
                    <li>
                        <a href="{{url('san-pham/'.$link)}}">
                            <img src="{{asset('assets3/image/product/'.$img_first[0].'')}}" alt="Sản phẩm">
                            <p><?=$item->name ?></p>
                        </a>
                    </li>
                <?php } } ?>


            </ul>
            <?php 
                if($process_page['total_row'] > $process_page['num_of_page'])
                {
                    echo '<div class="page-filter">';
                        echo '<ul>';
                            echo PhanTrang('?', $process_page['total_page'], $process_page['page']);
                        echo '</ul>';
                    echo '</div>';
                }
            ?>
        </div>
    </div>

</section>

@endsection