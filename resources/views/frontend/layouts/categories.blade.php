
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
<script type="text/javascript">
    $(document).ready(function(){
        let arr_accessory = <?php echo $get_accs; ?>;
        
        
        if(window.innerWidth <= 1200){
            $.each( arr_accessory, function( i, val ) {
                $('.list-accessory').append('<li id="'+i+'"><a href="./san-pham/'+val.slug+'"><img src="assets3/image/product/'+val.image+'" alt="Sản phẩm (phụ kiện)"><p>'+val.name+'</p></a></li>');

            });
        }else{
            $('.list-accessory').append('<div class="all-accs-img"><li id="0" class="img-accs"></li><li id="1" class="img-accs-none"></li></div>');            
            let imgaccs = $('.all-accs-img');
            imgaccs.html('<img src="assets3/image/imgpkup.png" alt="Thumb phụ kiện">');
            
            $.each( arr_accessory, function( i, val ) {
                i++;
                $('.list-accessory').append('<li id="'+i+'"><a href="./san-pham/'+val.slug+'"><img src="assets3/image/product/'+val.image+'" alt="Sản phẩm (phụ kiện)"><p>'+val.name+'</p></a></li>');
            });
        }
    });
    

    $('.click-all-product').click(function(){
        $(location).attr('href', './san-pham');
    });
   
</script>