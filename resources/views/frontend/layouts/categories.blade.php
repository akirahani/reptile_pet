
<section class="highlight-day">
    <div class="hd-screen">
        <h1 class="title-hd">Hôm nay có gì ?</h1>
        <ul class="product-hd">
            <?php foreach($products as $key => $item){
                $convert_unicodetv = convert_vn2latin($item->name);
                $lowcase = strtolower($convert_unicodetv);
                $link = str_replace(" ","-",$lowcase);
                $key++;
            ?>
                <li>
                    <a href="{{route('product.detail',['link'=>$link])}}">
                        <img src="{{asset('assets3/image/product/pd'.$key.'.png')}}" alt="Sản phẩm">
                        <p><?=$item->name ?></p>
                    </a>
                </li>
            <?php } ?>
        </ul>
        <button class="click-all-product"><p>Xem tất cả</p> <img src="{{asset('assets3/image/next.svg')}}" alt="next"></button>
    </div>
</section>
<section class="accessory">
    <div class="ac-screen">
        <h1 class="title-ac">Phụ kiện bò sát</h1>
        <ul class ="list-accessory">

        </ul>
        <button class="click-all-product"><p>Xem tất cả</p>  <img src="{{asset('assets3/image/next.svg')}}" alt="next"></button>
    </div>
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
            $('.list-accessory').append('<li><a href=""><img src="assets3/image/product/pd6.png" alt="Sản phẩm (phụ kiện)"><p>Đèn sưởi UAV</p></a></li>');
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
                    $('.list-accessory').append('<li><a href=""><img src="assets3/image/product/pd6.png" alt="Sản phẩm (phụ kiện)"><p>Đèn sưởi UAV</p></a></li>');
                }
            }
        }
    }

    $('.click-all-product').click(function(){
        $(location).attr('href', './san-pham');
    });
   
</script>