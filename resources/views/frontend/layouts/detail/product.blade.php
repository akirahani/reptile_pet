
@extends('frontend.index')
@section('content')

<section class="all-product-detail">
    <main>
		<div class="bread-title">
			<p><a href="{{url('/')}}">Trang chủ</a> / &nbsp; </p>
			<p> Sản phẩm / &nbsp;</p>
			<p class="product-name"> <?=$detail->name?> </p>
		</div>
		<div class="content-detail">
			<div class="slides-all">
				<div id="sync1" class="thumbs-slide owl-carousel owl-theme">
					<?php  
	
						if($detail->image != NULL)
						{
							foreach (explode(",", $detail->image) as $key => $val) 
							{
								echo'<div class="image-detail item">
										<img src="../assets3/image/product/'.$val.'" alt="Ảnh chi tiết sản phẩm">
								</div>';
							}
						}
						else{
							for($i = 1; $i<=3 ; $i++){
								echo'<div class="image-detail item">
										<img src="../assets3/image/product/pd'.$i.'.png" alt="Ảnh chi tiết sản phẩm">
								</div>';
							}
	
						}				
					?>
				</div>
				<div id="sync2" class="thumbs-slide2 owl-carousel owl-theme">
					<?php  
						if($detail->image != NULL){
							foreach (explode(",", $detail->image) as $key => $val) {
								echo'<div class="image-detail item"><img src="../assets3/image/product/'.$val.'" alt="Ảnh chi tiết sản phẩm"></div>';
							}
						}
						else{
							for($i = 1; $i<=3 ; $i++){
								echo'<div class="image-detail item"><img src="../assets3/image/product/pd'.$i.'.png" alt="Ảnh chi tiết sản phẩm"></div>';
							}
						}
	
					?>
				</div>
			</div>
	
			<div class="product-info">
				<h1><?=$detail->name ?></h1>
				<div class="detail-price">
					<span><?php echo number_format($detail->price,0,'.','.'); ?>đ 
					</span>
				</div> 
				<p>Thông tin sản phẩm :</p>
				<article>
					<?php echo $detail->description; ?>
				</article>
				<div class="button-flex">
					@php
						if($detail->slug_shopee == NULL){
							echo '';
						}
						else{
							echo '<button class="them-gio" id="'.$detail->slug_shopee.'" >Đặt hàng ngay</button>';
						}
					@endphp
					<button class="mua-ngay" id="" sp="" loai="mua-ngay" >Liên hệ trực tiếp</button>
				</div>
		
			</div>
		</div>
	
	</main>
</section>
<script>
	$('.them-gio').click(function(){
		let slug_shopee = $(this).attr('id');
		if(slug_shopee ==''){
			console.log('a')
		}else{
			window.location.href = slug_shopee;
		}

	});
	$('.mua-ngay').click(function(){
		window.location.href = '../lien-he';
	});
</script>
@endsection


