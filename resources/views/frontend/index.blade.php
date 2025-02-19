<!DOCTYPE html>
<head>
   @include('frontend.layouts.asset')
</head>
<body>

    <div id="all-wrapper-ui">
        <div class="all-wrapper-header">
            @include('frontend.layouts.header')
        </div>
        <div class="all-wrapper-content">
            <div class="main-content" >
              @yield('content')
            </div>
        </div>
        <div class="all-wrapper-footer">
            @include('frontend.layouts.footer')
        </div>
    </div>
   

    <img class="lazy" src="{{asset('assets3/image/vuong.svg')}}" data-src="{{asset('upload/vuong.svg')}}" />
</body>
<script>
    $(function(){
        $("img.lazy").lazyload({
            threshold: 200,
            event : "click"
        });
    });


    // product detail
    $('.thumbs-slide').owlCarousel({
	 	items: 1,
	 	nav: false,
	 	dots: false,
	 	lazyLoad: true,
	 	margin:20,
	 	responsiveClass:true,
	 });

	 $(document).ready(function() {

	   var sync1 = $("#sync1");
	   var sync2 = $("#sync2");
	   var slidesPerPage = 3; 
	   var syncedSecondary = true;

	   sync1.owlCarousel({
	     items : 1,
	     slideSpeed : 200,
	     nav: false,
	     autoplay: false,
	     dots: false,
	     loop: false,
         slideBy: 1,

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
	     slideBy: slidesPerPage,
	     responsiveRefreshRate : 100
	   }).on('changed.owl.carousel', syncPosition2);

	   function syncPosition(el) {
	     var current = el.item.index;
	     var count = el.item.count-1;
	     var current = Math.round(el.item.index - (el.item.count/2) - .5);
	    
	     if(current < 0) {
	       current = count;
	     }
	     if(current > count) {
	       current = 0;
	     }
	    
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
    // 
    
    $(".banner").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		lazyLoad: true,
        responsiveClass:true,
	});

	$(document).ready(function() {
		var syncbn = $("#sync-banner");
		var syncibn = $("#sync-item-banner");
		var slidesPerPage = 4; 
		var syncedSecondary = true;

		syncbn.owlCarousel({
		items : 1,
		slideSpeed : 200,
		nav: false,
		autoplay: false,
		dots: false,
		loop: false,
		slideBy: 1,

		responsiveRefreshRate : 200,

		}).on('changed.owl.carousel', syncPosition);

		syncibn
		.on('initialized.owl.carousel', function () {
			syncibn.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
		items : slidesPerPage,
		dots: false,
		nav: false,
		margin: 11,
		smartSpeed: 200,
		slideSpeed : 500,
		slideBy: slidesPerPage,
		responsiveRefreshRate : 100
		}).on('changed.owl.carousel', syncPosition2);

		function syncPosition(el) {
		var current = el.item.index;
		var count = el.item.count-1;
		var current = Math.round(el.item.index - (el.item.count/2) - .5);
		
		if(current < 0) {
			current = count;
		}
		if(current > count) {
			current = 0;
		}
		
		syncibn
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		var onscreen = syncibn.find('.owl-item.active').length - 1;
		var start = syncibn.find('.owl-item.active').first().index();
		var end = syncibn.find('.owl-item.active').last().index();
		
		if (current > end) {
			syncibn.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
			syncibn.data('owl.carousel').to(current - onscreen, 100, true);
		}
		}

		function syncPosition2(el) {
		if(syncedSecondary) {
			var number = el.item.index;
			syncbn.data('owl.carousel').to(number, 100, true);
		}
		}

		syncibn.on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).index();
		syncbn.data('owl.carousel').to(number, 300, true);
		});
	});


	$('.screenshot_slider').owlCarousel({
	    loop: true,
	    responsiveClass: true,
	    nav: true,    
	    navText: ['<img src="./assets3/image/left-multi-thumbs.svg">', '<img src="./assets3/image/right-multi-thumb.svg">'],
	    responsive: {
	        0: {
                margin: 20,
	            items: 2,
	        },
	        600: {
	            items: 2
	        },
	        1200: {
                margin: 50,
	            items: 3
	        }
	    }
	});

</script>

</html>
