
@extends('frontend.index')
@section('content')
<section class="all-product">
    <main>
		<div class="bread-title">
			<p><a href="">Trang chủ</a>/</p>
			<p>Sản phẩm/</p>
			<p>Kẹp gỗ ngắn gấp thức ăn </p>
		</div>
		<div class="line-bread"></div>
		<div class="tong-quan-phong">
			<div class="slides-all">
				<div id="sync1" class="thumbs-slide owl-carousel owl-theme">
					<?php  
	
						if($detail->album != NULL)
						{
							foreach (explode(",", $detail->album) as $key => $val) 
							{
								echo'<div class="image-detail item">
									<picture>
										<source class="mobile" media="(max-width:1199px)" width="367px" height="372px" srcset="uploads/sanpham/'.$val.'">
										<source class="desktop" media="(min-width:1200px)" width="616px" height="560px" srcset="uploads/sanpham/'.$val.'">
										<img src="uploads/sanpham/'.$val.'" alt="Ảnh chi tiết sản phẩm">
									</picture>
								</div>';
							}
						}
						else{
							for($i = 1; $i<=2 ; $i++){
								echo'<div class="image-detail item">
									<picture>
										<source class="mobile" media="(max-width:1199px)" srcset="uploads/sanpham/detail'.$i.'.png">
										<source class="desktop" media="(min-width:1200px)" srcset="uploads/sanpham/detail/room'.$i.'_desk.png">
										<img src="uploads/sanpham/detail/room'.$i.'_desk.png" alt="Ảnh chi tiết sản phẩm">
									</picture>
								</div>';
							}
	
						}				
					?>
				</div>
				<div id="sync2" class="thumbs-slide2 owl-carousel owl-theme">
					<?php  
						if($detail->album != NULL){
							foreach (explode(",", $detail->album) as $key => $val) {
								echo'<div class="image-detail item"><img src="uploads/sanpham/'.$val.'" alt="Ảnh chi tiết sản phẩm"></div>';
							}
						}
						else{
							for($i = 1; $i<=2 ; $i++){
								echo'<div class="image-detail item"><img src="uploads/sanpham/detail'.$i.'.png" alt="Ảnh chi tiết sản phẩm"></div>';
							}
						}
	
					?>
				</div>
			</div>
	
			<div class="thong-tin-phong">
				<h1><?=$detail->ten ?></h1>
				<div class="detail-price">
					<span><?php
						
						echo number_format('1000000',0,'.','.');
						?>đ 
					</span>
				</div> 
				<div class="button-flex">
					<button class="them-gio" id="" sp="" loai="them-gio">Thêm vào giỏ hàng</button>
					<button class="mua-ngay" id="" sp="" loai="mua-ngay" >Mua ngay</button>
				</div>
				<article>
						<?php echo 'aaaas'; ?>
				</article>
			</div>
		</div>
	
	</main>
</section>
@endsection


<script>
	$('.them-gio').click(function(){
		let sptg = $(this).attr('sp');
		let loaitg = $(this).attr('loai');
		$.ajax({
			method : "POST",
			data : {sanpham: sptg, loai: loaitg},
			url : "view/gio-hang/ajax-cart.php",
			success:function(data){
				let rlt = JSON.parse(data);
				if(rlt.status == "success"){
					Swal.fire(
	                    "",
	                    "Thêm giỏ hàng thành công",
	                    "success"
	                );
				}
			
			}
		});
	});

	$('.mua-ngay').click(function(){
		let spmn = $(this).attr('sp');
		let loaimn = $(this).attr('loai');
		$.ajax({
			method : "POST",
			data : {sanpham: spmn, loai: loaimn},
			url : "view/gio-hang/ajax-cart.php",
			success:function(data){
				window.location.href = "gio-hang"; 
			}
		});
	});

	$('.thumbs-slide').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		lazyLoad: true,
		margin:20,
		responsiveClass:true,
		navText: ["<img src='public/image/prev.svg''>","<img src='public/image/next.svg''>"]
	});

	$(document).ready(function() {

	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	  var slidesPerPage = 4; //globaly define number of elements per page
	  var syncedSecondary = true;

	  sync1.owlCarousel({
	    items : 1,
	    slideSpeed : 2000,
	    nav: true,
	    autoplay: false,
	    dots: true,
	    loop: true,
	    responsiveRefreshRate : 200,

	  }).on('changed.owl.carousel', syncPosition);

	  sync2
	    .on('initialized.owl.carousel', function () {
	      sync2.find(".owl-item").eq(0).addClass("current");
	    })
	    .owlCarousel({
	    items : slidesPerPage,
	    dots: false,
	    nav: false,
	    margin: 11,
	    smartSpeed: 200,
	    slideSpeed : 500,
	    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	    responsiveRefreshRate : 100
	  }).on('changed.owl.carousel', syncPosition2);

	  function syncPosition(el) {
	    //if you set loop to false, you have to restore this next line
	    //var current = el.item.index;
	    
	    //if you disable loop you have to comment this block
	    var count = el.item.count-1;
	    var current = Math.round(el.item.index - (el.item.count/2) - .5);
	    
	    if(current < 0) {
	      current = count;
	    }
	    if(current > count) {
	      current = 0;
	    }
	    
	    //end block

	    sync2
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = sync2.find('.owl-item.active').length - 1;
	    var start = sync2.find('.owl-item.active').first().index();
	    var end = sync2.find('.owl-item.active').last().index();
	    
	    if (current > end) {
	      sync2.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	      sync2.data('owl.carousel').to(current - onscreen, 100, true);
	    }
	  }
	  
	  function syncPosition2(el) {
	    if(syncedSecondary) {
	      var number = el.item.index;
	      sync1.data('owl.carousel').to(number, 100, true);
	    }
	  }
	  
	  sync2.on("click", ".owl-item", function(e){
	    e.preventDefault();
	    var number = $(this).index();
	    sync1.data('owl.carousel').to(number, 300, true);
	  });
	});

	// Sent info
	$('input[name="sent"]').click(function(){
	    let ten = $('input[name="ten"]').val();
	    let dienthoai = $('input[name="dienthoai"]').val();
	    let phong = $(this).attr("phong");
	    if(ten != '')
	    {
            if(dienthoai != '')
            {
                $(".loading").css("display", "flex");
                $.ajax({
                    method: "POST",
                    data: {ten:ten, dienthoai:dienthoai, phong: phong},
                    url: "view/phong/dat-phong.php",
                    success:function(data)
                    {
                        let info = JSON.parse(data);
                        if(info.status == "success")
                        {
                        	Swal.fire(
                                "",
                                "Cảm ơn bạn đã đăng kí, chúng tôi sẽ liên hệ sớm nhất!",
                                "success"
                            );
                            $('input[name="ten"]').val('');
                            $('input[name="dienthoai"]').val('');
                            $(".loading").css("display", "none");
                        }
                        else
                        {
                            $(".loading").css("display", "none");
                            Swal.fire(
                                "",
                                "có lỗi trong quá trình đăng kí",
                                "error"
                            );
                        }
                    }
                });
            }
            else
            {
                Swal.fire(
                    "",
                    "Vui lòng điền số điện thoại của bạn!",
                    "error"
                );
            }
	    }
	    else
	    {
	        Swal.fire(
	            "",
	            "Vui lòng điền tên của bạn!",
	            "error"
	        );
	    }
	});
</script>
