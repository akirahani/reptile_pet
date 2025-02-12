<main>
	<div class="banner-product">
		<p>
			<a href="./">Home</a> 
			> Tin tức
		</p>
	</div>
	<div class="all-news-product">
		<div class="list-news">
			<?php  
				foreach ($tintuc as $key => $val) {
					echo '<div class="new-item">';
						echo '<a href="tin-tuc/'.$val->slug.'">
								<div class="img-news">
									<img src="uploads/baiviet/'.$val->anh.'" alt="" />
								</div>
								<div class="info-news">
									<div class="text-new-item">
										<h2>'.$val->tieude.'</h2>
										<p>'.$val->mota.'</p>
									</div>
									<div class="below-description">
										<p><i class="fas fa-clock"></i>'.$val->thoigian.'</p>
									</div>
								</div>
							</a>';
					echo '</div>';
				}
			?>
		</div>
		<div class="product-highlight">
			<?php foreach($product as $val){
				echo '<div class="product-item">';		
					echo '<a href="san-pham/'.$val->slug.'">';
						echo '<img src="uploads/sanpham/'.$val->anh.'" alt="'.$val->ten.'" />';
						echo '<h2>'.$val->ten.'</h2>';
						echo '<p class="price">'.number_format($val->giacuoi,0,".",".").'đ</p>';
						echo '<p> Trọng lượng: '.$val->trongluong.''.$arr_donvi[$val->donvi]->tentat.'</p>';
					echo '</a>';
				echo '</div>';
			} ?>
		</div>
	</div>
</main>
