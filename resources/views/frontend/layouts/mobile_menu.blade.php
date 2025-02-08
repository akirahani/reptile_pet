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
	
		if(window.innerWidth >= 0 && window.innerWidth < 520)
		{
			$('.nav-mobile').css('margin-left','0');
		}

		if(window.innerWidth >= 520 && window.innerWidth < 1201)
	    {
			let a = ((window.innerWidth - 480)/2)-5;
	        $('.nav-mobile').css("margin-left", 'calc(100% + '+a+'px )');
	    }
	});
	$('.close-nav').click(function(){
		$('.nav-mobile').css('margin-left','-100%');
	});



</script>
