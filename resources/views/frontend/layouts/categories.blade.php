<section class="highlight-day">
    <h1 class="title-hd">Hôm nay có gì ?</h1>
    <ul>
        <li>
            <img src="{{asset('assets3/image/product/pd1.png')}}" alt="Sản phẩm">
            <p>Tấm sưởi cho bò sát</p>
        </li>
        <li>
            <img src="{{asset('assets3/image/product/pd2.png')}}" alt="Sản phẩm">
            <p>Cùi bắp lót chuồng</p>
        </li>
        <li>
            <img src="{{asset('assets3/image/product/pd3.png')}}" alt="Sản phẩm">
            <p>Kẹp đèn</p>
        </li>
        <li>
            <img src="{{asset('assets3/image/product/pd4.png')}}" alt="Sản phẩm">
            <p>Chén nhựa đôi</p>
        </li>
        <li>
            <img src="{{asset('assets3/image/product/pd5.png')}}" alt="Sản phẩm">
            <p>Hộp nhựa chuyên dụng</p>
        </li>
    </ul>
    <button><p>Xem tất cả</p> <img src="{{asset('assets3/image/next.svg')}}" alt="next"></button>
</section>
<section class="accessory">
    <h1 class="title-ac">Phụ kiện bò sát</h1>
    <ul>
        <?php
            for($i = 1; $i < 7; $i++){
                echo'<li>';
                echo'<img src="assets3/image/product/pd6.png" alt="Sản phẩm (phụ kiện)">
                        <p>Đèn sưởi UAV</p>';
                echo'</li>';
            }
        ?>
    </ul>
    <button><p>Xem tất cả</p>  <img src="{{asset('assets3/image/next.svg')}}" alt="next"></button>
    <div class="image-plus">

    </div>
</section>