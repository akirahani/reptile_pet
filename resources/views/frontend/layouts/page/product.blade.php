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
            <ul>
                <li>Phụ kiện bò sát</li>
                <li>Leopard gecko</li>
                <li>Fattail gecko</li>
            </ul>
        </div>
        <div class="list-product">
            <ul>
                <?php for($i = 0; $i < 16; $i++){ ?>
                    <li>
                    <img src="{{asset('assets3/image/product/pd6.png')}}" alt="Sản phẩm (phụ kiện)">
                    <p>Đèn sưởi UAV</p>
                    </li>
               <?php } ?>
            </ul>
        </div>
    </div>
</section>
@endsection