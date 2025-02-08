<section class="highlight-day">
    <h1 class="title-hd">Hôm nay có gì ?</h1>
    <ul class="product-hd">
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
    <ul class ="list-accessory">

    </ul>
    <button><p>Xem tất cả</p>  <img src="{{asset('assets3/image/next.svg')}}" alt="next"></button>
    <div class="image-plus">
        <ul>
            <?php
                for($i = 0; $i < 3; $i++){
                    echo'<li>';
                    echo'<img src="assets3/image/imgpk.png" alt="Sản phẩm (phụ kiện)">';
                    echo'</li>';
                }
            ?>
        </ul>
    </div>
</section>
<script>
    if(window.innerWidth <= 1200){
        for(let i = 1; i < 11; i++){
            $('.list-accessory').append('<li><img src="assets3/image/product/pd6.png" alt="Sản phẩm (phụ kiện)"><p>Đèn sưởi UAV</p></li>');
        }
    }else{
        for(let i = 1; i < 11; i++){

            if(i == 1 ){
                $('.list-accessory').append('<li class="first-img-acces"><img src="assets3/image/imgpkup.png" alt="Thumb phụ kiện"></li>');
            }
            else{
                if(i == 2){
                    $('.list-accessory').append('');

                }else{
                    $('.list-accessory').append('<li><img src="assets3/image/product/pd6.png" alt="Sản phẩm (phụ kiện)"><p>Đèn sưởi UAV</p></li>');
                }
            }
        }
    }
   
</script>