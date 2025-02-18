
@extends('frontend.index')
@section('content')
<section class="blog-detail-all"> 
	<div class="blog-detail-title">
		<a href="{{url('/')}}">Trang chủ / </a> 
		<p> Kiến thức/ </p>
	 	<span> {!!$detail->title!!}</span>
	</div>
	<div class="blog-main">
		<div class="blog-content">
			<h1>{!!$detail->title!!}</h1>
			@php
				$time =date( 'd/m/Y',strtotime($detail->created_at));
				
			@endphp
			<span>{!!$time!!}</span>
			<?php  
				echo '<article>'.$detail->content.'</article>';
			?>
		</div>
		<div class="other-blog">
			<h1>Bài viết gần đây</h1>
			<div class="line-blog"></div>
			<?php			
				foreach($blog as $val){
					echo'<ul>';
						echo'<li><a href="./'.$val->slug.'">'.$val->title.'</a></li>';
					echo'</ul>';
				}
			?>
		</div>
	</div>
</section>
@endsection
