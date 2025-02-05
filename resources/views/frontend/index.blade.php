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
   

    <img class="lazy" src="{{asset('upload/vuong.svg')}}" data-src="{{asset('upload/vuong.svg')}}" />
</body>
<script>
    $(function(){
        $("img.lazy").lazyload({
            threshold: 200,
            event : "click"
        });
    });

    
    $(".banner").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		lazyLoad: true,
        responsiveClass:true,
	});
    $(".item-banner").owlCarousel({
		items: 4,
		nav: false,
		dots: false,
        margin: 30,
		lazyLoad: true,
        responsiveClass:true,
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
