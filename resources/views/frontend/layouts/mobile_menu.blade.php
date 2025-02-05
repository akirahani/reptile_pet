<nav class="nav-mobile">
	<ul>
		<img src="{{asset('assets3/image/logo.svg')}}" alt="Logo bò sát" />
        <li><a href="./">Trang chủ</a></li>
        <li><a href="{{url('./pet')}}">Sản phẩm</a></li>
        <li><a href="./loai-san-pham">kiến thức</a></li>
        <li><a href="./lien-he">Liên hệ</a></li>     
	</ul>
	<div class="close-nav"></div>
</nav>

<!-- menu -->
<script>
	$('.head-left').click(function(){
		if($(document).width() >= 0 && $(document).width() < 520)
		{
			$('.nav-mobile').css('margin-left','0');
		}

		if($(document).width() >= 520 && $(document).width() < 3200)
	    {
	        $('.nav-mobile').css("margin-left", '100%');
	    }
	});
	$('.close-nav').click(function(){
		$('.nav-mobile').css('margin-left','-100%');
	});



</script>
